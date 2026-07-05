import { existsSync, readFileSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(fileURLToPath(new URL("..", import.meta.url)));
const htmlFiles = ["index.html", "home-evaluation/index.html"];
const htmlByFile = Object.fromEntries(
  htmlFiles.map((file) => [file, readFileSync(join(root, file), "utf8")])
);
const html = Object.values(htmlByFile).join("\n");
const css = readFileSync(join(root, "styles.css"), "utf8");
const js = readFileSync(join(root, "script.js"), "utf8");
const errors = [];

const localRefs = [];
for (const [file, content] of Object.entries(htmlByFile)) {
  const fileDir = dirname(join(root, file));
  for (const match of content.matchAll(/(?:src|href)="([^"]+)"/g)) {
    const ref = match[1];
    if (ref.startsWith("http") || ref.startsWith("mailto:") || ref.startsWith("tel:") || ref.startsWith("#")) {
      continue;
    }

    localRefs.push({
      file,
      ref,
      resolved: resolve(fileDir, ref)
    });
  }
}

for (const item of localRefs) {
  if (!item.resolved.startsWith(root) || !existsSync(item.resolved)) {
    errors.push(`Broken local reference in ${item.file}: ${item.ref}`);
  }
}

const localImages = [...new Map(
  localRefs
    .filter((item) => /\.(?:avif|gif|jpe?g|png|svg|webp)$/i.test(item.ref))
    .map((item) => [item.resolved, item])
).values()];

for (const item of localImages) {
  const size = statSync(item.resolved).size;
  if (size > 650 * 1024) {
    errors.push(`Image is too heavy for this prototype: ${item.ref} (${Math.round(size / 1024)} KB)`);
  }
}

for (const [file, content] of Object.entries(htmlByFile)) {
  for (const anchor of [...content.matchAll(/href="#([^"]+)"/g)].map((match) => match[1])) {
    if (!content.includes(`id="${anchor}"`)) {
      errors.push(`Missing anchor target in ${file}: #${anchor}`);
    }
  }

  if (content.includes("Lorem ipsum") || content.includes("placeholder")) {
    errors.push(`Prototype still contains placeholder copy in ${file}.`);
  }
}

const altCount = [...html.matchAll(/<img\b[^>]*\balt="[^"]+"/g)].length;
const imgCount = [...html.matchAll(/<img\b/g)].length;
if (altCount !== imgCount) {
  errors.push("Every image needs descriptive alt text.");
}

if (!css.includes(":focus-visible")) {
  errors.push("Missing visible keyboard focus styles.");
}

if (!js.includes("mailto:corbin@callcorbin.ca")) {
  errors.push("Contact form must point to the real Corbin & Co email address.");
}

if (!js.includes("/home-evaluation/")) {
  errors.push("Homepage hero should route into the local home evaluation prototype.");
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("Static checks passed: local pages, assets, anchors, alt text, image weights, and handoff actions are valid.");

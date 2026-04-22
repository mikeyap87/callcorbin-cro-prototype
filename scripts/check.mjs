import { existsSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(fileURLToPath(new URL("..", import.meta.url)));
const html = readFileSync(join(root, "index.html"), "utf8");
const css = readFileSync(join(root, "styles.css"), "utf8");
const js = readFileSync(join(root, "script.js"), "utf8");

const requiredFiles = [
  "assets/images/hero-langley-advisor.jpg",
  "assets/images/seller-prep.jpg",
  "assets/images/buyer-tour.jpg",
  "assets/images/market-strategy.jpg",
  "assets/images/team-process.jpg"
];

const errors = [];

for (const file of requiredFiles) {
  const path = join(root, file);
  if (!existsSync(path)) {
    errors.push(`Missing image: ${file}`);
    continue;
  }
  const size = statSync(path).size;
  if (size > 650 * 1024) {
    errors.push(`Image is too heavy for this prototype: ${file} (${Math.round(size / 1024)} KB)`);
  }
}

const localRefs = [...html.matchAll(/(?:src|href)="([^"]+)"/g)]
  .map((match) => match[1])
  .filter((ref) => !ref.startsWith("http") && !ref.startsWith("mailto:") && !ref.startsWith("tel:") && !ref.startsWith("#"));

for (const ref of localRefs) {
  if (!existsSync(join(root, ref))) {
    errors.push(`Broken local reference: ${ref}`);
  }
}

for (const anchor of [...html.matchAll(/href="#([^"]+)"/g)].map((match) => match[1])) {
  if (!html.includes(`id="${anchor}"`)) {
    errors.push(`Missing anchor target: #${anchor}`);
  }
}

const altCount = [...html.matchAll(/<img\b[^>]*\balt="[^"]+"/g)].length;
const imgCount = [...html.matchAll(/<img\b/g)].length;
if (altCount !== imgCount) {
  errors.push("Every image needs descriptive alt text.");
}

if (html.includes("Lorem ipsum") || html.includes("placeholder")) {
  errors.push("Prototype still contains placeholder copy.");
}

if (!css.includes(":focus-visible")) {
  errors.push("Missing visible keyboard focus styles.");
}

if (!js.includes("mailto:corbin@callcorbin.ca")) {
  errors.push("Contact form must point to the real Corbin & Co email address.");
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("Static checks passed: local assets, anchors, alt text, image weights, and contact action are valid.");

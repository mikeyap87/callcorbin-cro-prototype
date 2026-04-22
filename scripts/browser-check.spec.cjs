const { test, expect } = require("@playwright/test");

const localUrl = process.env.PROTOTYPE_URL || "http://127.0.0.1:5197/";

async function checkPage(page) {
  const browserProblems = [];
  page.on("console", (message) => {
    if (message.type() === "error") {
      browserProblems.push(message.text());
    }
  });
  page.on("pageerror", (error) => {
    browserProblems.push(error.message);
  });

  await page.goto(localUrl, { waitUntil: "networkidle" });

  const images = await page.locator("img").evaluateAll((nodes) =>
    nodes.map((img) => ({
      src: img.getAttribute("src"),
      alt: img.getAttribute("alt"),
      width: img.naturalWidth,
      height: img.naturalHeight,
      complete: img.complete
    }))
  );

  const badImages = images.filter((image) => !image.complete || !image.width || !image.height || !image.alt);
  const externalCtas = await page.locator("a[href^='https://'], a[href^='tel:'], a[href^='mailto:']").count();
  const bodyBox = await page.locator("body").boundingBox();

  expect(browserProblems, "console and page errors").toEqual([]);
  expect(badImages, "all images load and have alt text").toEqual([]);
  expect(externalCtas, "live outbound, phone, and email CTAs").toBeGreaterThan(8);
  expect(bodyBox.width, "page width should fit viewport").toBeLessThanOrEqual(page.viewportSize().width + 1);
}

test("desktop layout loads cleanly", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1100 });
  await checkPage(page);
  await expect(page.getByRole("heading", { name: /Real estate decisions/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /Get a 24-hour home value/i }).first()).toHaveAttribute(
    "href",
    "https://callcorbin.ca/home-evaluation/"
  );
});

test("mobile layout loads cleanly", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 1200 });
  await checkPage(page);
  await page.getByRole("button", { name: "Menu" }).click();
  await expect(page.getByRole("navigation", { name: "Primary navigation" })).toBeVisible();
});

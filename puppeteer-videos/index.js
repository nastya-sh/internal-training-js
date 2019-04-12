/* let puppeteer = require("puppeteer");

async function run() {
  console.log("Hello world!");
  let options = { headless: false };
  let browser = await puppeteer.launch(options);
  let page = await browser.newPage();
  await page.setViewport({ height: 1200, width: 960 });
  await page.goto("https://github.com/");
  await page.screenshot({ path: "screenshot.png" });
  await page.close();
  await browser.close();
}

run(); */

let puppeteer = require("puppeteer");

async function run() {
  console.log("Hello world!");
  let options = { headless: false };
  let browser = await puppeteer.launch(options);
  let page = await browser.newPage();
  await page.setViewport({ height: 1200, width: 960 });
  await page.goto("https://github.com/");
  await page.close();
  await browser.close();
}

run();

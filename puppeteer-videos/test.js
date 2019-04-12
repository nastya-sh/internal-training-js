const puppeteer = require("puppeteer");

async function getPic() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1240, height: 940 });

  await page.goto("https://google.ru/");
  await page.waitFor(2000);
  let textBoxId =
    "#tsf > div:nth-child(2) > div > div.RNNXgb > div > div.a4bIc > input";
  await page.type(textBoxId, "гугл почта", { delay: 100 });
  await page.keyboard.press("Enter");
  await page.waitFor(1000);

  let loginBtn = await page.waitForSelector(".rc");

  await loginBtn.click();
  /*   await page.waitForSelector("#logo");
  await page.click("#logo"); */

  /* await page.waitFor(4000);
  await page.close();
  await browser.close(); */
}

getPic();

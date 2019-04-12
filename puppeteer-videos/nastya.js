let puppeteer = require("puppeteer");

async function search() {
  let width = 1600;
  let height = 1040;

  let option = {
    headless: false,
    slowMo: true,
    args: ["--window-size=${width},${height}"]
  };
  let browser = await puppeteer.launch(option);
  let page = await browser.newPage();
  let vp = { width: width, height: height };
  await page.setViewport(vp);

  const navigationPromise = page.waitForNavigation();

  await page.goto("https://www.google.ru");
  await navigationPromise;
  await page.waitFor(2000);

  let textBoxId = "sb_form_q";
  await page.type("#" + textBoxId, "vk", { delay: 100 });
  await page.keyboard.press("Enter");

  let selectorString = "#b_results > .b_algo:nth-child(1) > h2 > a > strong";
  await page.waitForSelector(selectorString);
  let selector = await page.$(
    "#b_results > .b_algo:nth-child(1) > h2 > a > strong"
  );
  console.log(selector);
  if (selector != null) {
    let element = selector.asElement();
    await element.click();
    await navigationPromise;
  }

  await page.waitFor(5000);
  await page.close();
  await browser.close();
}

search();

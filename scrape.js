/////Одна книга
/* const puppeteer = require("puppeteer");

let scrape = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("http://books.toscrape.com/");
  await page.click(
    "#default > div > div > div > div > section > div:nth-child(2) > ol > li:nth-child(1) > article > div.image_container > a > img"
  );
  await page.waitFor(1000);

  const result = await page.evaluate(() => {
    let title = document.querySelector("h1").innerText;
    let price = document.querySelector(".price_color").innerText;

    return {
      title,
      price
    };
  });

  browser.close();
  return result;
};

scrape().then(value => {
  console.log(value); // Получилось!
});
 */

/////Все книги
/*
const puppeteer = require("puppeteer");

let scrape = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("http://books.toscrape.com/");

  const result = await page.evaluate(() => {
    let data = []; // Создаём пустой массив для хранения данных
    let elements = document.querySelectorAll(".product_pod"); // Выбираем все товары

    for (var element of elements) {
      // Проходимся в цикле по каждому товару
      let title = element.childNodes[5].innerText; // Выбираем название
      let price = element.childNodes[7].children[0].innerText; // Выбираем цену

      data.push({ title, price }); // Помещаем объект с данными в массив
    }

    return data; // Возвращаем массив
  });

  browser.close();
  return result; // Возвращаем данные
};

scrape().then(value => {
  console.log(value); // Получилось!
});
 */

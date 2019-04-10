/////////ЗАДАНИЕ 1
///Ф.И.О
let task1 = document.querySelector(".person__info");
let fio = task1.querySelector(".person__fio");
console.log(fio.innerHTML);

//email
let task10 = document.querySelector(".person__info");
let l = task10.querySelector(".person_email");
console.log(l.innerHTML);

///Немного обо мне
let Me = document.querySelector(".about-me__title");
let aboutMe = document.querySelector(".about-me__info");
console.log(Me.innerHTML, aboutMe.innerHTML);

///Мой опыт в тестировании
let myExperience = document.querySelectorAll(".about-me__title");
let my = document.querySelectorAll(".about-me__info");
console.log(myExperience[1].innerHTML, my[1].innerHTML);

///Футер
let futer = document.querySelector(".footer__text");
console.log(futer.innerHTML);

///Адреса
let addressGit = document.querySelector(".social__list");
let r = addressGit.querySelectorAll(".social__item a");
for (i = 0; i < r.length; i++) {
  console.log(r[i] + "a");
}

///Картинка
let picture = document.querySelector(".watch__list");
let x = picture.querySelectorAll(".watch__icon");
console.log(x.src);
for (i = 0; i < x.length; i++) {
  console.log(x[i].src);
}

//////////ЗАДАНИЕ 2

///Ф.И.О
$(".person__fio").text("Ширяева Анастасия Николаевна");

///email
let task101 = document.querySelector(".person_email");
let l1 = $(task101).text("nastyaSH19@inbox.ru");

///Немного обо мне
let my22 = document.querySelectorAll(".about-me__info");
let x2x = $(my22).text(
  "Меня зовут Настя. Мне 20 лет и я работаю тестировщиком в Brave Developers."
);

///Мой опыт в тестировании
let my2 = document.querySelectorAll(".about-me__info");
let xx = $(my2[1]).text(
  "Я прошла курсы начинающего тестировщика и в данный момент изучаю JavaScript."
);

///Ссылки
let arr1 = [
  "https://github.com/nastya-sh",
  "https://www.skype.com/ru/",
  "https://vk.com/"
];
let el = document.getElementsByTagName("a");

for (let i = 0; i < arr1.length; i++) {
  el[i].href = arr1[i];
}

/////////ЗАДАНИЕ 3

let picture9 = document.querySelector(".watch__list");
let x9 = picture9.querySelectorAll(".watch__icon");
console.log(x9.src);
for (i = 0; i < x9.length; i++) {
  console.log(x9[i].src);
}

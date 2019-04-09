///////////////Задание №1
let task1 = document.getElementsByClassName("contact__copyright");
console.log(task1[0].innerHTML);

let task11 = document.querySelectorAll(".contact__copyright");
console.log(task11[0].innerHTML);

let task111 = document.querySelector("#contact__copyright");
console.log(task11[0].innerHTML);

//////////////////Задание №2
let task2 = document.getElementById("about");
console.log(task2.innerHTML);

let task22 = document.querySelector("#about");
console.log(task22.innerHTML);

let task222 = document.querySelector('[id="about"]');
console.log(task222.innerHTML);

//////////////////Задание №3

let task3 = document.getElementsByTagName("div");
console.log(task3.length);

let task33 = document.getElementsByTagName("ul");
console.log(task33.length);

let task333 = document.getElementsByTagName("svg");
console.log(task333.length);

//////////////////Задание №4

let task4 = document.querySelector(".contact__list");
let arr = task4.querySelectorAll(".contact__item");

let array = [];

arr.forEach(elem => {
  array.push(elem.innerHTML.toUpperCase());
});
console.log(array);

///
let test3 = document.querySelector(".skills__list");

let x2 = test3.querySelectorAll(".skills__name");

let z2 = [];

x2.forEach(im => {
  console.log(im);
  z2.push(im.innerHTML.toUpperCase());
});
console.log(z2);

///

let test = document.querySelectorAll(".skills__item");
let x1 = document.querySelectorAll(".skills__desc");

let z1 = [];

x1.forEach(itm => {
  z1.push(itm.innerHTML);
});
console.log(z1);

//////////////////Задание №5 ДОДЕЛАТЬ

/* let task5 = document.querySelectorAll(".skills__list");

let task55 = document.querySelectorAll(".skills__desc");

let task555 = document.querySelectorAll(".skills__name");
 */

//////////////////Задание №6

let colr = document.querySelector(".main__title");
console.log(colr.style.color);
console.log(window.getComputedStyle(colr).color);

let colr1 = document.querySelector(".about__top-title");
console.log(colr1.style.color);
console.log(window.getComputedStyle(colr).color);

//////////////////Задание №7
let cc = (document.getElementById("about").innerHTML = "newtext");
console.log(cc);

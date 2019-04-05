/* let employee = {
  firstName: "Марк",
  lastName: "Кузнецов",
  middleName: "Александрович",
  dateOfBirth: "04.04.1990",
  salary: 35000
};
function returnOfAge() {
  return this.employee.lastName;
}
let x = returnOfAge();
console.log(x);
 */

/*
Задача 2. Работа с датами.
2.1 Вывести текущий день
2.2 Вывести текущий месяц
2.3 Вывести текущий год
2.4 Вывести номер текущего дня недели
2.5 Определить какой сегодня день недели (понедельник, вторник ...)
2.6 Определить в какой день недели вы родились.
2.7 Вывести количество часов, которое осталось до 20:00.
2.8 В зависимости от времени вывести на экран Доброе утро (до 10:00), Добрый день (до 17:00), Добрый вечер.
2.9 Создать дату 23.07.1991 и вывести на консоль.
2.10 На основе текущей даты и даты рождения вычислить возраст.
*/

let a = new Date();
console.log("2.1 Текущий день:");
console.log(a.getDate());
console.log("2.2 Текущий месяц:");
console.log(a.getMonth() + 1);
console.log("2.3 Текущий год:");
console.log(a.getFullYear());
console.log("2.4 Номер текущего дня недели");
console.log(a.getDay());
console.log("2.5 Определить день недели");
let b = a.getDay();
if (b === 1) {
  console.log("Понедельник");
} else if (b === 2) {
  console.log("Вторник");
} else if (b === 3) {
  console.log("Среда");
} else if (b === 4) {
  console.log("Четверг");
} else if (b === 5) {
  console.log("Пятница");
} else if (b === 6) {
  console.log("Суббота");
} else if (b === 7) {
  console.log("Воскресенье");
}
console.log("2.6 Определить день недели в котором вы родились ");
let days = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота"
];
let months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь"
];

let myDate = new Date();
myDate.setDate(16);
myDate.setMonth(10);
myDate.setYear(1998);

let fullDate =
  myDate.getDate() +
  " " +
  months[myDate.getMonth()] +
  " " +
  myDate.getFullYear() +
  ", " +
  days[myDate.getDay()];
console.log(fullDate);
console.log("2.7 Вывести количество часов, которое осталось до 20:00");

let today = new Date();
console.log(20 - today.getHours());

// 2.9 Создать дату 23.07.1991 и вывести на консоль.
let dateOfBirth = new Date("1991-07-23");
console.log(dateOfBirth);

//2.10 На основе текущей даты и даты рождения вычислить возраст.
let myDateOfBirth = new Date("1998-11-16");
console.log(myDateOfBirth);
let currentDate = new Date();
console.log(currentDate.getFullYear() - myDateOfBirth.getFullYear());

/* Функции */

/*
 Задание 1:

 Функция должна принимать один аргумент и возвращать его
 */
function returnFirstArgument(arg) {
  return arg;
}

let task1 = returnFirstArgument(1);
console.log(task1);
/*
 Задание 2:

 Функция должна принимать два аргумента и возвращать сумму переданных значений
 Значение по умолчанию второго аргумента должно быть 100
 */
function defaultParameterValue(a, b = 100) {
  return a + b;
}

let task2 = defaultParameterValue(3);
console.log(task2);

/*
 Задание 3// Доделать

 Функция должна возвращать все переданные в нее аргументы в виде массива
 Количество переданных аргументов заранее неизвестно
 */
function returnArgumentsArray() {
  return arguments;
}

let result = returnArgumentsArray("qwe", 8, "lll", 8);
console.log(result);

/*
 Задание 4:

 Функция должна принимать другую функцию и возвращать результат вызова переданной функции
 */

function returnFnResult(fn) {
  fn();
}

returnFnResult(() => console.log("Hello world!"));

/*
 Задание 5:

 Функция должна принимать число (значение по умолчанию - 0) и возвращать функцию (F)
 При вызове F, переданное число должно быть увеличено на единицу и возвращено из F
 */
function returnCounter(number = 0) {
  return (F = () => {
    return ++number;
  });
}
let y = 0;
console.log(y++); // 0
console.log(y++); // 1
console.log(y++); // 2
console.log("------");

let y2 = 0;
console.log(++y2); // 1
console.log(++y2); // 2
console.log(++y2); // 3
console.log(y2++); // 3
console.log(++y2); // 5

console.log("qqqqqqqq------");
for (var i = 4; i < 3; i++) {
  console.log("9", i);
}
/*
0 0
1 1
2 2

*/
console.log("444------");

let newF = returnCounter();
console.log(newF());

/*
 Задание 6 *:

 Функция должна принимать другую функцию (F) и некоторое количество дополнительных аргументов
 Функция должна привязать переданные аргументы к функции F и вернуть получившуюся функцию
 */
function bindFunction(fn) {}

// export {
//   returnFirstArgument,
//   defaultParameterValue,
//   returnArgumentsArray,
//   returnFnResult,
//   returnCounter,
//   bindFunction
// };

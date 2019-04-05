/*
Задача 1. Работа с Math.
*/

/*
1.1. Найти квадратный корень из 2019. Результат округлите до целых, до десятых, до сотых.
1.2. Найти квадратный корень из 863. Округлите результат в большую и меньшую стороны
Результаты округления сохранить в объект {first: ..., second: ...  }
1.3. Даны массив чисел 477, 5, 120, 1, 34, -44, 55, 0. Найти минимальное и максимальное число.
1.4. Даны два числа.  Найти модуль разности этих чисел.
*/
console.log("1.1 Найти квадратный корень из 2019: ");
let x = 2019;
let z = Math.sqrt(x);
let s = Math.ceil(z);
let q = Math.round(z * 100) / 100;
let w = Math.round(z * 10) / 100;
console.log("Квадратный корень из 2019:", z);
console.log("До целых: ", s);
console.log("До десятых: ", w);
console.log("До сотых: ", q);

console.log("1.2 Найти квадратный корень из 863 ");
let p = 863;
let a = Math.sqrt(p);
let z1 = Math.ceil(a);
let z2 = Math.floor(a);
let result = {
  first: z1,
  second: z2
};
console.log("Квадратный корень из 863:", a);
console.log(result);

console.log("1.3 Найти минимальное и максимальное число.");
let arr = [477, 5, 120, 1, 34, -44, 55, 0];
let l = Math.min.apply(null, arr);
console.log("Минимальное число", l);
let l1 = Math.max.apply(null, arr);
console.log("Максимальное число", l1);

console.log("1.4 Найти модуль разности чисел");

/*
Задача 2. Объект JavaScript Date..
2.1. Создать дату используя год и месяц (2015 год, январь)
2.2. Создать дату используя год, месяц и день (2015 год, март, 25)
2.2. Создать дату используя год, месяц, день и часы (2015 год, январь, 25, 13)
2.3. Сравнить даты созданные в пунктах 2.1 и 2.2. Вывести на консоль, какая из дат было раньше.qweqwe
*/

/*
Задача 3. Библиотека Moment.js.
2.1. Создать дату - сейчас
2.2. Создать дату на 4 дня в будущем
2.2. Создать дату на 2 года в прошлом
2.3. Задача:
    1. Создать дату - сейчас.
    2. Изменить на 4 дня в будущем.
    3. Вывести
    4. Сбросить и вывести
2.4. Добавь 5 минут к текущей дате
2.5. Вывести дату в следующим виде - 04/05/2019
2.6. Вывести название дня недели текущей даты.
2.7. Вывести - четверг, ноябрь 24 2011
2.8. Добавь 5 лет и 3 месяца к текущей дате
*/

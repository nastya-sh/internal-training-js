/* Задача 1.  Дана строка 'Работа со строками'.
Найти количество символов в данной строке. */

let task1 = 'Работа со строками'
console.log('Задача 1.', task1.length)

/* Задача 2. Дана строка 'https://learn.javascript.ru/string'.
Нужно вывести learn.javascript.ru тремя разными способами (через substr, substring, slice).*/

let task2 = 'https://learn.javascript.ru/string'
console.log('Задача 2.', task2.substring(8, 27))
console.log('Задача 2.', task2.substr(8, 19))
console.log('Задача 2.', task2.slice(8, 27))

/* Задача 3.  Дана строка . Найдите позицию подстроки «со».*/

let task3 = 'Работа со строками'
console.log('Задача 3.', task3.indexOf('со'))

/* Задача 4.  Дана переменная str, в которой хранится любой текст.
Реализуй обрезание длинного текста по следующему принципу:
если количество символов этого текста больше 5,
то в переменную result запишем первые 5  символов строки str и добавим в конец троеточие '...'.
В противном случае в переменную result запишем содержимое переменной str.*/

function str1(str) {
  if (str.length > 5) {
    return str.substring(0, 6) + '...'
  } else return str
}
let str = 'Hello world!'
let result = str1(str)
console.log('Задача 4.')
console.log(result)

/* Задача 5.  Дана строка "Работа со строками". С помощью метода split запишите каждое
слово этой строки в отдельный элемент массива */

let task5 = 'Работа со строками'
let arr = task5.split(' ')
console.log('Задача 5.', arr)

/* Задача 6. В переменной date сохранена дата в формате '2019-04-01'.
Преобразуйте эту дату в формат '01/04/2019'. (использовать split) */

let task6 = '2019-04-01'
console.log('Задача 6.')
console.log(task6.replace('2019-04-01', '01/04/2019'))
/* Задача 7.  Дан массив ['Работа', 'со', 'строками']. С помощью метода
join преобразуйте массив в строку 'Работа-со-строками' */

let task7 = ['Работа', 'со', 'строками']
let q = task7.join('-')
console.log('Задача 7.', q)

/* Задача 8. Дана строка 'brave developers'.
Сделать из нее строку 'BRAVE DEVELOPERS'.*/

let task8 = 'brave developers'
console.log('Задача 8.', 'brave developers'.toUpperCase())

/* Задача 9. Дана строка 'BRAVE DEVELOPERS'.
Сделать из нее строку 'brave developers'.*/

let task9 = 'BRAVE DEVELOPERS'
console.log('Задача 9.', 'BRAVE DEVELOPERS'.toLowerCase())

/* Задача 10. Дана строка 'brave developers'.
Преобразовать первую букву каждого слова строки в верхний регистр*/

let task10 = 'brave developers'
let x = task10.split(' ')
let temp = ''

x.forEach(item => {
  temp = temp + item[0].toLocaleUpperCase() + item.slice(1) + ' '
})
console.log('Задача 10.', temp)

/* Задача 11. Дана строка "email: test@test.com"
Заменить 'email' на 'адрес' с помощью замены.*/

let task11 = 'email: test@test.com'
console.log('Задача 11.')
console.log(task11.replace('email', 'адрес'))

/*Задача 12.  Преобразуйте строку 'old_date_document' в 'oldDateDocument'.
Код должен работать с любыми аналогичными строками.*/

let task12 = 'old_date_document'
console.log('Задача 12.')
console.log(task12.replace('old_date_document', 'oldDateDocument'))

/* Задача 13.  Создать переменную, в которой хранится один символ. Вывести его код.*/

let task13 = 'в'
console.log('Задача 13.', task13.charCodeAt('в'))

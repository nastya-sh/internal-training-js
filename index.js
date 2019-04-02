/*
Задача 1. Объявить следующий массив [42, 65, 49, 68, 56, 47, 70].
Вывести длину массива.
Вывести значения всех элементов массива и соответствующие им индексы:
Индексу 0 - соответствует число 42
Индексу 1 - соответствует число 65
и т.д...
*/
let task1 = [42, 65, 49, 68, 56, 47, 70]
console.log(' Задача 1.')
console.log(task1.length)
task1.forEach(function(elem, id) {
  console.log(elem + ' - ' + id)
})

/*
Задача 2. Объявить следующий массив ["Mango", "Poly", "Ajax"]. Заменить второй элемент на “JavaScript”
*/
let task2 = ['Mango', 'Poly', 'Ajax']

task2.splice(1, 1, 'JavaScrit')
console.log(' Задача 2.')
console.log(task2)

/*
Задача 3.  Задан массив [18, 27, 35, 41]. Добавить в конец массива следующие элементы 13, 77, 56
*/

let task3 = [18, 27, 35, 41]
task3.splice(4, 0, 13, 77, 56)
console.log(' Задача 3.')
console.log('Первый вариант')
console.log(task3)
let task133 = [18, 27, 35, 41]
task133.push(13, 77, 56)
console.log('Второй вариант')
console.log(task133)

/*
Задача 4.  Задан массив [18, 27, 35, 41]. Добавить в начало массива следующие элементы 13, 77
*/
let task4 = [18, 27, 35, 41]
task4.splice(0, 0, 13, 77)
console.log(' Задача 4.')
console.log('Первый вариант')
console.log(task4)
let task144 = [18, 27, 35, 41]
task144.unshift(13, 77)
console.log('Второй вариант')
console.log(task144)

/*
Задача 5. Задан массив ['startfish', 'earthworm', 'sea urchin', 'jellyfish', 'snail'].
Удалить первый элемент массива и вывести значение удаленного элемента.
*/

let task5 = ['startfish', 'earthworm', 'sea urchin', 'jellyfish', 'snail']
let x = task5.shift()
console.log(' Задача 5.')
console.log(task5)
console.log(x)

/*
Задача 6. Задан массив ['startfish', 'earthworm', 'sea urchin', 'jellyfish', 'snail'].
Удалить последний элемент массива. вывести массив после удаления.
*/

let task6 = ['startfish', 'earthworm', 'sea urchin', 'jellyfish', 'snail']
let z = task6.pop()
console.log(' Задача 6')
console.log(task6)
console.log(z)

/*
Задача 7. Задана строка 'ostopus,snail,lobster,perch,catfish,shark'.
Преобразовать строку в массив. Вывести значения всех элементов массива и соответствующие им индексы.
*/

console.log(' Задача 7. переделать')
let task7 = 'ostopus,snail,lobster,perch,catfish,shark'
let arr = task7.split(' , ')
arr.forEach(function(elemt, index) {
  console.log(elemt + ' - ' + index)
})

/*
Задача 8. Дан массив ['side', 'back', 'front'].
Создать из массива строку следующего вида: 'side view, back view, front view'.
*/
let task8 = ['side', 'back', 'front']
let str = task8.join(' , ')
const stri = ' view'
console.log(' Задание 8.')
console.log('side' + stri + ',', 'back' + stri + ',', 'front' + stri)

/*
Задача 9. Задан массив .  Удалить второй элемент.
*/

let task9 = ['side', 'back', 'front']

task9.splice(1, 1)
console.log(' Задание 9. ')
console.log(task9)

/*
Задача 10.  Задан массив .
С помощью метода splice сделай из него массив  ['startfish', 'jellyfish', 'snail']
*/

let task10 = ['startfish', 'earthworm', 'sea urchin', 'jellyfish', 'snail']
task10.splice(1, 2)
console.log(' Задание 10.')
console.log(task10)

/*
Задача 11.
Задан массив ['startfish', 'earthworm', 'sea urchin', 'jellyfish', 'snail'].
Удалить первый 2 элемента, вместо них добавить следующее 'perch', 'goldfich'
*/

let task11 = ['startfish', 'earthworm', 'sea urchin', 'jellyfish', 'snail']
task11.splice(0, 2, 'perch', 'goldfich')
console.log(' Задание 11.')
console.log(task11)

/*
Задача 12.
Задан массив ['startfish', 'earthworm', 'sea urchin', 'jellyfish', 'snail'].
После элемента  'sea urchin', добавить следующие элементы 'discus', 'catfish'

*/
let task12 = ['startfish', 'earthworm', 'sea urchin', 'jellyfish', 'snail']
task12.splice(3, 0, 'discus', 'catfish')
console.log(' Задание 12.')
console.log(task12)
/*
Задача 13.
Задан массив let arr= ['snake', 'turtle', 'cobra', 'viper', 'boa' ]
Скопировать элементы 'turtle', 'cobra' в новый массив.
*/
let task13 = ['snake', 'turtle', 'cobra', 'viper', 'boa']
let arr2 = task13.slice(1, 3)
console.log('Задание 13.')
console.log('Первый массив:', task13)
console.log('Второй массив:', arr2)

/*
Задача 14.
Дан массив [3,4,5-7,4,0,-6]
Вывести отсортированный массив по возрастанию и убыванию.
*/

function compareNumericDate(a, b) {
  if (a > b) return 1
  if (a < b) return -1
}
function compareNumeric(a, b) {
  if (a < b) return 1
  if (a > b) return -1
}

let task14 = [3, 4, 5 - 7, 4, 0, -6]
let task141 = [3, 4, 5 - 7, 4, 0, -6]

task141.sort(compareNumericDate)
task14.sort(compareNumeric)

console.log('Задание 14.')
console.log('По возрастанию: ', task14)
console.log('По убыванию:    ', task141)

/*
Задача 15.
Задан массив let arr= ['sea urchin', 'jellyfish', 'snail']. let twoArr= ['startfish', 'earthworm']
Создать новый массив, который содержит все элементы из arr и twoArr.
*/
let ar = ['sea urchin', 'jellyfish', 'snail']
let twoArr = ['startfish', 'earthworm']
let newArr = [...ar, ...twoArr]
console.log('Задание 15.')
console.log(newArr)

/*
Задача 16. Написать функцию, которая на вход принимает массив
и удаляет из этого массива повторяющиеся элементы.
['key', 'space', 'control', 'home', 'home', lock','enter key', 'select', 'escape', 'space', 'enter key']
*/

/*
Задача 17. Написать функцию getArray(array, n), которая возвращает фрагмент массива,
содержащий первые 'n' элементов массива.
*/

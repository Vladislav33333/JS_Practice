// let num = parseInt(prompt("Пароль Оруэлла: "), 10);
// switch (num) {
//   case 1984:
//     alert('СЛАВА ПАРТИИ!');
//     break;
//   default:
//     alert("Попробуй еще раз...");
// }

// let num = 10
// for (i = 1; i <= 15; i++) {
//   // console.log(i)
//   if (i % 2 == 0) {
//     console.log(i)
//   }

// }

// let sum = 0
// for (i = 1; i <= 100; i++) {
//   sum = sum + i;
//   console.log(sum)
// }

// let num = 1;
// while (num <= 42) {
//   if (num % 2 == 0) {
//     console.log(num);

//   }
//   num++
// }

// let isRunning = true
// let answer = 'ВсеГО хорошеГО!'
// let enter = prompt('Введите "ok", для выхода из цикла.')
// while (isRunning) {
//   if (enter === 'ok') {
//     alert(answer)
//     isRunning = false;
//   }
//   else {
//     break;
//   }
// }

// let fruits = ['banana', 'apple', 'orange']
// for (i = 0; i < fruits.length; i++) {
//   console.log(i + 1 + '.', fruits[i])
// }

// let a = ''
// for (i = 0; i <= 5; i++) {
//   let i = '#'
//   console.log(a += i)
// }

// Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.
// let array = [1, 2, 3, 4, 5]
// for (i = 0; i <= array.length; i++) {
//   console.log(array[i])
// }

// Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.
// const array = [2, 5, 9, 15, 0, 4]
// for (i = 0; i <= array.length; i++) {
//   if (array[i] > 3 && array[i] < 10) {
//     console.log(array[i])
//   }
// }

// Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.

// let arr = [2, 5, 9, 15, 0, 4, -2, -5, -9, -15, -0, -4]
// let sum = 0
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     sum += arr[i]
//   }
//   console.log(sum)
// }

// Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.

// let arr = [1, 2, 5, 9, 4, 13, 4, 10]
// for (i = 0; i <= arr.length; i++) {
//   if (arr[i] == 4)
//     alert('Есть!')
// }

// // Сортировка по возрастанию.
// let arr = [1, 2, 5, 9, 7, 4, 23, 10]
// arr.sort(function (a, b) {
//   return (a - b);
// });
// console.log(arr);

// Богдан Стащук (закинуть в макбук)
// Мутация св-в объекта
// const person = {
//   nameUser: 'Bob',
//   age: 30
// }
// const person2 = person

// person2.age = 22
// person2.isAdult = true

// console.log(person.age)
// console.log(person.isAdult)

// const person = {
//   nameUser: 'Bob',
//   age: 30
// }
// const person2 = Object.assign({}, person)

// person2.age = 34

// console.log(person.age)
// console.log(person2.age)

// const person = {
//   nameUser: 'Bob',
//   age: 30
// }
// const person2 = { ...person }

// person2.nameUser = 'Alice'

// console.log(person.nameUser)
// console.log(person2.nameUser)

// Копируется без изменений оригинального объекта, с вложенными объектами:
// const person = {
//   nameUser: 'Bob',
//   age: 30
// }

// const person2 = JSON.parse(JSON.stringify(person))
// person2.nameUser = 'Alex'
// console.log(person.nameUser)
// console.log(person2.nameUser)

// Callback FN
// function anotherFunction() {
// }
// function fnWithCallback(callbackFunction) {
//   callbackFunction()
// }
// fnWithCallback(anotherFunction)

// function printMyName() {
//   console.log('My name is Vlad')
// }
// function time3() {
//   console.log('3')
// }
// function time2() {
//   console.log('2')
// }
// function time1() {
//   console.log('1')
// }

// console.log("ready?")
// setTimeout(time3, 1000)
// setTimeout(time2, 2000)
// setTimeout(time1, 3000)
// setTimeout(printMyName, 4000)

// Область видимости
// let a
// let b
// function myFn() {
//   let b
//   a = true
//   b = 10
//   console.log(b)
// }
// myFn()
// console.log(a)
// console.log(b)

// Цепочка областей видимости:
// const a = 5
// function myFn() {
//   function innerFn() {
//     console.log(a) //5
//   }
//   innerFn()
// }
// myFn()
// Необъявленная переменная! Ниже СТРОГИЙ РЕЖИМ!
// 'use strict'
// function myFn() {
//   a = 10
//   // let a = 10
//   console.log(a)
// }
// myFn()

// let a, b
// a = 10
// b = a

// let c = a + b
// console.log(c)

// let gameThings = [0, 1, 2]
// console.log(gameThings)

// Камень ножницы бумага ************
// let choices = { 1: 'Камень', 2: 'Ножницы', 3: 'Бумага' }
// let userChoice = parseInt(prompt("Выбери: 1 - Камень, 2 - Ножницы, 3 - Бумага"));
// let compChoice = Math.floor(Math.random() * 3) + 1;
// if (![1, 2, 3].includes(userChoice)) {
//   console.log('Неверный выбор, выбери: 1 - Камень, 2 - Ножницы, 3 - Бумага');
// } else {
//   console.log(`Ты выбрал - ${choices[userChoice]}`);
//   console.log(`ПК выбрал - ${choices[compChoice]}`);
// }
// function resultFn(user, comp) {
//   if (user === comp) {
//     return 'Ничья!';
//   } else if (
//     (user === 1 && comp === 2) ||
//     (user === 2 && comp === 3) ||
//     (user === 3 && comp === 1)
//   ) {
//     return 'Ты победил!';
//   } else {
//     return 'ПК победил';
//   }
// }
// console.log(resultFn(userChoice, compChoice));
// resultFn(userChoice, compChoice)

// const sumFn = (a, b) => {
//   return (a === 2 && b === 3 ? 'True' : 'False')
// }

// console.log(sumFn(2, 3));

// let b = 10
// let c
// b или c && console.log('Выполнено!')

// let arr = [32, 54, 36, 14, 2221, 67, 97, 3434, 14, 74, 91, 65];
// let i = 0;

// while (i < arr.length) {
//   // console.log('Индексу ' + i + ' соответствует число: ' + arr[i])
//   // i++;
//   if (arr[i] > maxNum) {
//     maxNum = arr[i];
//   }
//   i++;
// }
// console.log('Max number of array: ', maxNum);

// let arr = [32, 54, 36, 14, 22, 67, 97, 34, 14, 74, 91, 65];
// let maxNum = 0;
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] > maxNum) {
//     maxNum = arr[i]

//   }
// }
// console.log(maxNum);

// Квадрат числа:
// let array = [1, 2, 3, 4];
// for (i = 1; i <= array.length; i++) {
//   sumOfKvadrat = i * i;
//   console.log('квадрат числа: ' + i + 'равен: ' + sumOfKvadrat);
// }

// let a = 10;
// let b = 10;
// let c = 20;
// console.log((a === 10 && b === 10 && c === 10) ? 'true' : 'false');

// let board = Array(9).fill(null);
// console.log(board)

// const cells = document.querySelectorAll('.cell')

// const button = {
//   width: 200,
//   text: 'Buy',
//   color: 'black'
// }

// const redButton = {
//   ...button,
//   color: 'red'
// }

// const newButton = {
//   ...redButton,
//   color: 'white',
//   diff: 'easy'
// }

// console.table(newButton)

// const buttonInfo = {
//   width: '200'
// }

// const buttonStyle = {
//   color: 'black',
// }

// const button = {
//   ...buttonInfo,
//   ...buttonStyle
// }
// console.table(button)

// Шаблонные строки
// const myName = 'Vladislav'
// const myCity = 'Moscow'
// const greeting = `My name is ${myName} \nI live in ${myCity}`
// console.log(greeting)

// const myFn = function (a, b) {
//   let c
//   a = a + 1
//   c = a + b
//   return c
// }
// console.log(myFn(1, 3))

// setTimeout(function () { console.log('5 сек прошло') }, 5000);

// let psevdoFn = (a, b) => {
//   let c
//   a = a + 1
//   c = a + b
//   return c
// }
// console.log(psevdoFn(5, 5));

// function multByFactor(value, multiplier = 1) {
//   return value * multiplier
// }
// console.log(multByFactor(5, 2))
// console.log(multByFactor(5))

// const multiply = (value, multiplier = 1) => {
//   return value * multiplier
// }
// console.log(multiply(2, 4))

// const multiply = function (value, multiplier = 1) {
//   return value * multiplier
// }
// console.log(multiply(100, 2))

// const newPost = (post, addedAt = Date()) => ({
//   ...post,
//   addedAt,
// })

// const firstPost = {
//   id: 1,
//   Автор: 'Владислав Прикупенко'
// }
// console.log(newPost(firstPost))

// Каждый день улитка проползает 7 футов вверх и каждую ночь опускается вниз на 2 фута.
// Сколько дней потребуется улитке, чтобы подняться на указанную высоту ?

//   Пример вводных данных:
// 31

// Пример результата:
// 6

// Давайте определим расстояние, которое улитка преодолевает в день:
// День 1: 7 - 2=5
// День 2: 5 + 7 - 2=10
// День 3: 10 + 7 - 2=15
// День 4: 15 + 7 - 2=20
// День 5: 20 + 7 - 2=25
// День 6: 25 + 7=32
// Таким образом, на 6 день улитка проползет 32 фута и выберется из колодца днем, не опустившись на 2 фута ночью.

//   Совет: вы можете использовать цикл, чтобы вычислить расстояние, которое улитка преодолевает каждый день и завершить цикл, когда будет получено необходимое расстояние.

// let visota = parseInt(prompt('Введите высоту:'));
// let day = 0;
// let time = 0;
// while (time <= visota) {
//   day += 1;
//   time += 7;
//   if (time >= visota) {
//     break;
//   }
//   time -= 2;
// }
// console.log(day);

/*Умножение на 2

Напиши программу, которая начнет с числа 1 и будет умножать его на 2,
пока результат не станет больше 100.
В конце программа должна вывести итоговое значение и количество шагов,
которые потребовались для достижения этого результата.*/

// let num = 1;
// let numOfIterr = 0;
// while (num <= 10) {
//   num = num * 2;
//   if (++numOfIterr) {
//     if (num >= 10) {
//       break;
//     }
//     console.log('Итеррация номер:', numOfIterr, 'Число:', num);
//   }

// }

// let num = 1;
// let numOfIterr = 0;
// while (num <= 100) {
//   num = num * 2;
//   numOfIterr++;
//   console.log('Итеррация номер: ', numOfIterr, 'Число: ', num);
// }

/*Подсчет чисел от 1 до n

Пользователь вводит положительное число n.
Напиши программу, которая выведет все числа от 1 до n, а также их сумму.*/

// let num1 = 0;
// let numUser = 10;
// let sum = 0;
// while (num1 < numUser) {
//   num1++
//   sum += num1;
//   console.log('Число: ', num1);
// }
// console.log('Сумма: ', sum);

/* Минимальное количество монет:
У тебя есть копилка с текущей суммой в 0. Пользователь вводит целевую сумму target.
Напиши программу, которая считает, сколько минимальных монет (по 5 рублей) потребуется,
чтобы набрать сумму, не менее чем target.*/

// Моё решение:

// let pig = 0;
// let target = parseInt(prompt('Введите целевую сумму: '));
// let minCoin = parseInt(prompt('Введите номинал монеты: '));
// let sum = Math.ceil(target / minCoin);

// if (target > 0) {
//   while (pig < target) {
//     pig++
//   }
//   target / minCoin;
//   console.log(`Нужно ${sum} монет по ${minCoin}, для накопления ${target}`)
// }

// Chat GPT:

// let pig = 0;
// let target = parseInt(prompt('Введите целевую сумму: '));
// let minCoin = parseInt(prompt('Введите номинал монеты: '));
// let sum = Math.ceil(target / minCoin);
// if (target > 0 && minCoin > 0) {
//   pig++
//   target / minCoin;
//   console.log(`Нужны ${sum} монет по ${minCoin}, для накопления ${target}`)
// } else {
//   console.log('Введите число:')
// }

// const circleRadius = function (radius) {
//   const sum = 3.14 * radius ** 2;
//   console.log(sum)
// }
// console.log(circleRadius(15));

// function createHtmlElement(tag = 'button', text = 'отправить', id) {
//   const element = document.createElement(tag);
//   if (id) {
//     element.id = id;
//   }
//   element.innerText = text;
//   return element;
// }
// const someElement = createHtmlElement('div', '1', 'Какой-то текст...');
// document.body.append(someElement);

// function logArgsToConsole() {
//   // console.log(arguments);
//   if (!arguments.length) {
//     return
//   }
//   for (let argument of arguments) {
//     console.log(argument);

//   }
//   console.log('Аргументов больше нет')
// }
// logArgsToConsole(1, 2)

// Declaration:
// function sayHello() {
//   console.log('Hello World!');
// }
// sayHello()

// Expression:
// const sayHello = function () {
//   console.log('Hello World!');
// }
// sayHello()

// Стрелочная функция:
// const sayHello = () => {
//   console.log('Hello World!');
//   return;
// }
// sayHello()

// const brokenLinks = ['vk', 'youtube', 'facebook'];
// const repairLinks = function (tag, id, text) {
//   const element = document.createElement(tag);
//   element.id = id;
//   element.innerText = text;
//   return element;
// }
// const healhyLinkVk = repairLinks('button', '1', brokenLinks[0]);
// const healhyLinkYt = repairLinks('button', '2', brokenLinks[1]);
// const healhyLinkFb = repairLinks('button', '3', brokenLinks[2]);
// document.body.append(healhyLinkVk, healhyLinkYt, healhyLinkFb);
// repairLinks()

// Починить сломанные сслылки:

// const brokenLinks = ['vk', 'youtube', 'facebook'];
// const fixLinkArray = function (Array) {
//   const correctLinks = []
//   linkArray.forEach(function (brokenLinks) {
//     const fixedLinks = 'htpps://' + brokenLinks + '.com'
//     correctLinks.push(fixedLinks)
//   });
//   return correctLinks
// }
// console.log(fixLinkArray(brokenLinks));

// Упрощение решения:
// const brokenLinks = ['vk', 'youtube', 'facebook'];

// const fixLinkArray = (linkArray) => {
//   const correctLinks = []
//   linkArray.forEach((brokenLinks) =>
//     correctLinks.push('htpps://' + brokenLinks + '.com'));
//   return correctLinks
// }
// console.log(fixLinkArray(brokenLinks));

// const brokenLinks = ['vk', 'youtube', 'facebook']

// const fixedLinksArray = function (array) {

//   const correctLinks = [];

//   array.forEach(function (brokenLinks) {

//     const fixedLinks = 'htpps://' + brokenLinks + '.com'
//     correctLinks.push(fixedLinks);

//   });

//   return correctLinks;
// }
// console.log(fixedLinksArray(brokenLinks));

// const slomannieSsilki = ['vk', 'youtube', 'facebook']

// const fiximSsilki = function (massiv) {
//   const noviyMassiv = [];
//   massiv.forEach(slomannieSsilki => {
//     vernayaSsilka = 'htpps://' + slomannieSsilki + '.com';
//     noviyMassiv.push(vernayaSsilka);
//   });
//   return noviyMassiv;
// }
// console.log(fiximSsilki(slomannieSsilki))

// let x = 1;
// function logToConsole() {
//   console.log(x)
// }
// x = 2;
// x = 3;
// // x = 4;
// logToConsole()

// let brokenLinks = ['vk', 'youtube', 'facebook'];

// const fixLinks = function (array) {
//   let emptyArr = [];
//   array.forEach(link => {
//     let correctLink = '//htpps:' + link + '.com';
//     emptyArr.push(correctLink)
//   });
//   return emptyArr;
// }
// console.log(fixLinks(brokenLinks));

// let brokenLinks = ['vk', 'youtube', 'facebook',]

// let fixLinks = function (array) {
//   let emptyArr = []
//   array.forEach(link => {
//     goodLink = '//htpps:' + link + '.com'
//     emptyArr.push(goodLink);
//   });
//   return emptyArr;
// }
// console.log(fixLinks(brokenLinks));

// let city = 'New-York';

// function describeCity() {

//   let description = 'City of dreams';
//   console.log(city + ' - ' + description);
//   return;

// }
// city = 'Los-Angeles'
// describeCity();

// В первом случае: New-York - City of dreams
// После добавления city = 'Los-Angeles', перед вызовом describeCity() результат: Los-Angeles - City of dreams

// const greetUser = (name) => {
//   // Твой код
//   return () => {
//     console.log(`Привет, ${name}`);
//   };
// }
// const greeting = greetUser("Alex");
// greeting(); // Привет, Alex!

// const greetUser = (name) => {
//   return () => {
//     console.log(`Привет, ${name}`)
//   }
// }
// let greeting = greetUser('Alex')
// greeting()

// const circleAreaCalc = (radius) => {
//   let sumOfcircleArea = 3.14 * radius ** 2;
//   return sumOfcircleArea;
// }
// console.log(circleAreaCalc(30));

// const yearOfBirth = 1948
// let monthOfBirth = parseInt(prompt('Введите месяц рождения цифрой:')) //1
// let currentMonth = parseInt(prompt('Введите текущий месяц цифрой:'))//11
// const realYearCalc = (currentYear) => {
//   if (monthOfBirth <= currentMonth) {
//     console.log(currentYear -= yearOfBirth)

//   } else {
//     console.log(currentYear - yearOfBirth - 1)
//   }
//   return
// }
// realYearCalc(2024)

// let dateOfBirthBa = new Date('1948-11-08');
// let currentDate = new Date();
// let yearInMs = currentDate - dateOfBirthBa;
// let currentYear = Math.floor(yearInMs / (1000 * 60 * 60 * 24 * 365.25))
// console.log(currentYear + " or: " + yearInMs / (1000 * 60 * 60 * 24 * 365.25));

// Возраст бабули
// const yearOfBirth = 1948;

// const validMonth = (message) => {

//   while (true) {
//     let month = parseInt(prompt(message));

//     if (month >= 1 && month <= 12) return month;
//     alert('Некорректный ввод. Попробуйте ещё раз.');
//   }
// };

// let monthOfBirth = validMonth('Введите месяц рождения цифрой 1-12:')
// let currentMonth = validMonth('Введите текущий месяц цифрой 1-12:')

// let currentDate = new Date();
// let currentYear = currentDate.getFullYear();
// const YearCalc = (currentYear) => {
//   console.log((monthOfBirth <= currentMonth)
//     ? currentYear - yearOfBirth
//     : currentYear - yearOfBirth - 1);
// }
// YearCalc(currentYear);

// const people = [
//   { name: 'Владислав', age: 30, budget: 50300 },
//   { name: 'Юлия', age: 26, budget: 33000 },
//   { name: 'Татьяна', age: 76, budget: 20500 },
//   { name: 'Елена', age: 15, budget: 25000 },
//   { name: 'Анна', age: 17, budget: 1200 },
//   { name: 'Михаил', age: 18, budget: 1800 },
// ]
/*
// for:
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  // break
}

// for of:
for (let person of people) {
  console.log(person);
}

// forEach:
people.forEach(person => console.log(person));

// map
const newPeople = people.map(person => console.log((`${person.name} (${person.age})`)));

const newPeople = people.map(person => person.age * 3);
console.log(newPeople);


// filter

// Через цикл for:

// const isAdult = []
// for (i = 0; i < people.length; i++) {
//   if (people[i].age >= 18) {
//     isAdult.push(people[i])
//   }
// }
// console.log(isAdult)

// Через метод filter:
// const isAdult = people.filter(person => person.age >= 18)
// console.log(isAdult)


//Reduce:
// let amount = 0
// for (let i = 0; i < people.length; i++) {
//   amount += people[i].budget
// }
// console.log(amount);


// long:
// let amount = people.reduce((total, person) => {
//   return total + person.budget;
// }, 0)
// console.log(amount);

// short:
// let amount = people.reduce((total, person) => total + person.budget, 0)
// console.log(amount);


// Find:
// const UserJulia = people.find(person => person.name === 'Юлия')
// console.log(UserJulia);

// FindIndex:
// const UserJuliaIndex = people.findIndex(person => person.name === 'Юлия')
// console.log(UserJuliaIndex);



// =====================================
// Задача:
// const amount = people.filter(person => person.budget > 3000)
//   .map(person => {
//     return {
//       info: `${person.name}(${person.age})`,
//       budget: person.budget
//     }
//   })
//   .reduce((total, person) => total += person.budget, 0)
// console.log(amount);

// ВСЁ :)
*/
// Дальше идём:

// const NameAge = people.forEach(person => console.log(`${person.name} -  ${person.age}`))
// +

// let fruits = ['banana', 'orange', 'peach']
// const newLength = fruits.push('WATERMELON', 'TOMATO')
// console.log(fruits);
// console.log(newLength);

// const amount = (newLength) => console.log(fruits)
// amount()

// let bigBookCase = []
// userBook = prompt('Введите книгу')
// bigBookCase.push('Питер Пен');
// console.log(bigBookCase);
// bigBookCase.push('Пираты Рипаты')
// console.log(bigBookCase);
// bigBookCase.push(userBook)

// alert(`Ваши книги: ${bigBookCase.join(', ')}`);

// let deletedBook = bigBookCase.pop()
// alert(deletedBook + '(Удалена)')
// alert('Ваша книга удалена');
// alert(bigBookCase)

// let nums = [2, 5, 76, 2, 7, 81, 23]
// nums.splice(0, 1, 777)
// console.log(nums);

// let nums1 = [2, 5, 76, 2, 7, 81, 23]
// let nums2 = [21, 52, 76, 23, 27, 841, 2243]
// let nums3 = ['Banana']
// let concatNums = nums1.concat(nums3, nums2, 1000, 9999)
// console.log(concatNums);
// console.log(nums1);
// console.log(nums2);
// console.log(nums3);

// let fruits = ['Apple', 'Banana', 'Orange', 'Apple']
// console.log(fruits.indexOf('Apple'));
// console.log(fruits.indexOf('Banana'));
// console.log(fruits.indexOf('Orange'));
// console.log(fruits.indexOf('Apple'));
// console.log(fruits.indexOf('Grape'));
// console.log(fruits[3]);
// console.log(fruits.lastIndexOf('Apple'));

// let fruits = ['Apple', 'Banana', 'Orange']
// console.log(fruits.includes('Apple'));
// console.log(fruits.includes('Apple', 1));

// let num = [2, 3, 4, 5, 6, 8]
// let foundNum = num.find(n => n > 1)
// console.log(foundNum);

// let num = [2, 3, 4, 5, 6, 8]
// let found = num.findIndex(n => n > 6)
// console.log(found);

// let num = [2, 3, 4, 5, 6, 8]
// let found = num.some(n => n > 2)
// console.log(found);

// let num = [2, 3, 4, 5, 6, 8]
// let found = num.every(n => n > 10)
// console.log(found);

// let num = [2, 3, 4, 5, 6, 8]
// num.forEach(n => console.log(`${n} * 2 = ${n * 2}`));

// let fruits = [
//   { frName: 'banana', cost: 20 },
//   { frName: 'apple', cost: 40 },
//   { frName: 'orange', cost: 30 }
// ]
// let costFruits = fruits.reduce((total, fruit) => {
//   return total + fruit.cost;
// }, 0)
// console.log(costFruits);

// const sayHello = () => alert('Hello, function!');
// let userPass = parseInt(prompt('secret pass'), 10)

// switch (userPass) {
//   case 111:
//     sayHello();
//     break;
//   default:
//     alert('error');
//     break;
// }

// if (userPass != '111') {
//   alert('error')
// } else {
//   sayHello()
// }

// let userName = prompt("Введите свое имя:");
// function greetUser(name) {
//   return userName;
// }
// alert("Привет, " + greetUser(userName) + "!");

// let describePerson = function (name, age) {
//   let description = `Имя: ${name} Возраст: ${age}`;
//   return description;
// };

// let personView = describePerson("Vlad", 30);
// console.log(personView);

// let numArr = [2, 7, 3, 8, 0, 1, 4];
// let newNum = numArr.splice(3, 6);
// console.log(newNum);
// console.log(numArr);

// let numArr = [23, 73, 31, 83, 301, 11, 43];
// const even = (el) => el % 2 === 0;
// console.log(numArr.some(even));

// let numArr = [23, 73, 31, 83, 301, 11, 43];
// let newNum = numArr.reverse();
// console.log(newNum);
// console.log(numArr);

// Камень ножницы бумага NEW *********
// let choises = { 1: "Камень", 2: "Ножницы", 3: "Бумага" };
// let userChoice = parseInt(prompt("Введите 1-2-3?"));
// let compChoice = Math.floor(Math.random() * 3) + 1;

// console.log(
//   ![1, 2, 3].includes(userChoice)
//     ? "Неверный выбор, выбери 1-2-3"
//     : `Ты выбрал - ${choises[userChoice]},\nпк выбрал - ${choises[compChoice]} `
// );

// function resultFn(user, comp) {
//   console.log(
//     user === comp
//       ? "Ничья!"
//       : (user === 1 && comp === 2) ||
//         (user === 2 && comp === 3) ||
//         (user === 3 && comp === 1)
//       ? "Ты победил!"
//       : "ПК победил..."
//   );
// }
// resultFn(userChoice, compChoice);

//********************************************************** ОБЪЕКТЫ **********************************************************

// let person1 = {
//   userName: "Vlad",
//   age: 30,
//   sity: "Moscow",
//   profession: "Programmer",
// };
// let prop = "age";
// let key = "profession";

// person1.country = "Russia";

// console.log(person1["userName"]);
// console.log(person1[prop]);
// console.log(person1);
// console.log(person1[key]);

// console.log("salary" in person1);

// for (let key in person1) {
//   console.log(`${key}: ${person1[key]}`);
// }

// let keys1 = Object.keys(person1);
// console.log(keys1);

// let values1 = Object.values(person1);
// console.log(values1);

// let pairOfPerson1 = Object.entries(person1);
// console.log(pairOfPerson1);

// let car = {
//   brand: "Toyota",
//   country: "Japan",
//   year: 2022,
// };
// // console.log(car);
// delete car.year;
// car.model = "Camry";
// console.log(car);

// let keysCar = Object.keys(car);
// console.log(keysCar);

// let valuesCar = Object.values(car);
// console.log(valuesCar);

// let pairOfKeysCar = Object.entries(car);
// console.log(`Пара: ${pairOfKeysCar[0]}`);

// car.price = 20000;

// for (let keys in car) {
//   console.log(`${keys}: ${car[keys]}`);
// }

//User1

//Мой код:
// let person = {
//   name: "Владик",
//   age: 30,
//   hobbies: ["читать", " кодить"],
// };

// let greet = function (name, age) {
//   console.log(
//     `Привет, меня зовут ${person.name} и мне ${person.age} лет. Мои хобби это - ${person.hobbies}`
//   );
// };
// let addHobby = person.hobbies.push(" играть");
// greet(person);

// let hobby = person.hobbies;

// for (let keys in person.hobbies) {
//   console.log(hobby[keys]);
// }

// delete person.age;
// person.isActive = true;
// console.log(person);

// //GPT code:
// let person = {
//   name: "Владик",
//   age: 30,
//   hobbies: ["читать", "кодить"],

//   // Метод приветствия
//   greet() {
//     console.log(
//       `Привет, меня зовут ${this.name} и мне ${
//         this.age
//       } лет. Мои хобби это - ${this.hobbies.join(", ")}.`
//     );
//   },

//   // Метод для добавления хобби
//   addHobby(newHobby) {
//     this.hobbies.push(newHobby);
//   },
// };

// // Вызов метода greet
// person.greet();

// // Добавляем новое хобби
// person.addHobby("играть");

// // Вывод всех хобби
// console.log("Список хобби:");
// for (let hobby of person.hobbies) {
//   console.log(hobby);
// }

// // Удаляем возраст, добавляем статус
// delete person.age;
// person.isActive = true;

// // Выводим итоговый объект
// console.log(person);

// let user = {
//   name: "Владик",
//   hobbies: ["чтение"],

//   // Метод для добавления хобби
//   addHobby(newHobby) {
//     this.hobbies.push(newHobby);
//   },

//   // Метод для вывода всех хобби
//   listHobbies() {
//     console.log(
//       `Меня зовут: ${this.name}. Мои хобби: ${this.hobbies.join(", ")}`
//     );
//   },
// };

//Вывод без лишних сущностей:

// let newUser = {
//   name: user.name,
//   hobbies: user.hobbies,
// };

//деструктуризация
// let { name, hobbies } = user;
// let simplifiedUser = { name, hobbies };

//добавление новых хобби
// user.addHobby("рисование");
// user.addHobby("плавание");
// user.addHobby("играть в игры");
// user.listHobbies();

// console.log(user); // выводит всё, включая функции

//console.log(newUser); // выводит без лишних сущностей, с помощью созданного выше нового объекта (newUser)

//или:
// console.log(JSON.stringify(user, ["name", "hobbies"], 2));

//console.log(simplifiedUser); // вывод с помощью деструктуризации

//User2

let user = {
  name: "Vlad",
  adress: {
    city: "Moscccow",
    street: "Lenina",
  },
  greet() {
    console.log(
      `Меня зовут ${this.name}. Мой адрес: ${this.adress.city}, улица ${this.adress.street}, дом №${this.adress.house}`
    );
  },
};

// console.log(user.name);
// console.log(user.adress.city);
user.adress.city = "Moscow";
user.adress.house = 5;
user.adress.postcode = 100020;
user.isActive = true;
user.other = false;
// console.log(user.adress);

let { name, adress, isActive, other } = user;
let updUser = { name, adress, isActive, other };
// console.log(updUser);

for (const key in user.adress) {
  console.log(`${key}: ${user.adress[key]}`);
}
user.greet();

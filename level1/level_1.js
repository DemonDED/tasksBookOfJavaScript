"use strict";

// Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
let randomNum = getRandomInt(-100, 100);
console.log('Дано число ' + randomNum);

if (randomNum > 0) {
  console.log('Число положительное');
} else if (getRandomInt < 0) {
  console.log('Число отрицательное');
}

//  Дана строка. Выведите в консоль длину этой строки. 

let userString = prompt('Введите любую строку');
console.log(userString.length);

//  Дана строка. Выведите в консоль последний символ строки. 

console.log(userString[userString.length - 1]);

//  Дано число. Проверьте, четное оно или нет. 

if (randomNum % 2 == 0) {
  console.log('Число четное');
} else {
  console.log('Число не четное');
}

//  Даны два слова. Проверьте, что первые буквы этих слов совпадают.

let userString1 = 'word1';
let userString2 = 'word2';

if (userString1[0] == userString2[0]) {
  console.log(true);
} else {
  console.log(false);
}

//  Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.

if (userString[userString.length - 1] != 'ь' || userString[userString.length - 1] != 'Ь') {
  console.log(userString[userString.length - 1]);
} else {
  console.log(userString[userString.length - 2]);
}

//  Дано число. Выведите в консоль первую цифру этого числа.

if (randomNum > 0) {
  console.log(String(randomNum)[0]);
} else {
  console.log(String(randomNum)[1]);
}

//  Дано число. Выведите в консоль последнюю цифру этого числа. 

console.log(String(randomNum)[String(randomNum).length - 1]);

//  Дано число. Выведите в консоль сумму первой и последней цифры этого числа. 

let firstFigureOfRandomNumber = String(Math.abs(randomNum))[0];
let lastFigureOfRandomNumber = String(randomNum)[String(randomNum).length - 1];
console.log(firstFigureOfRandomNumber + lastFigureOfRandomNumber);

// Дано число. Выведите количество цифр в этом числе. 
console.log(String(randomNum).length + 1);

//  Даны два числа. Проверьте, что первые цифры этих чисел совпадают. 
let randomNum2 = getRandomInt(-100, 100);
if (String(randomNum)[0] == String(randomNum2)[0]) {
  console.log(true);
} else {
  console.log(false);
}



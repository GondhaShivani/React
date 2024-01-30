// 1. ----------------------Destructuring Objects and Arrays

//Destructuring Arrays:
const numbers = [1, 2, 3];

/* 
const [first, second, third] = numbers;

console.log(first); // 1
console.log(second); // 2
console.log(third); // 3
 */

const [first, second, third, forth = 4] = numbers;

console.log(first); // 1
console.log(second); // 2
console.log(third); // 3
console.log(forth); // 4

//Destructuring Objects:

/* 
const person = { name: "John", age: 25 };

const { name, age } = person;

console.log(name); // John
console.log(age); // 25
 */

const person = { name: "John", age: 25 };

const { name, age } = person;

console.log(name); // John
console.log(age); // 25

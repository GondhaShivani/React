//The filter() method is another built-in method in JavaScript that is used to create a new array containing only the elements of the original array that satisfy a specified condition. Like map(), filter() does not modify the original array; it returns a new array.

//Here's an example of using the filter() method:

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using filter to get only even numbers
const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]
console.log(numbers); // Original array is unchanged: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//In this example:

//The filter() method is called on the numbers array.
//The arrow function (num) => num % 2 === 0 is used as the filtering condition. This function returns true for even numbers and false for odd numbers.
//The result is a new array evenNumbers containing only the even numbers from the original array.
//The filter() method is handy when you want to selectively include or exclude elements from an array based on a certain condition. It provides a clean and concise way to create a new array that meets specific criteria.

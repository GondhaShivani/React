//The map() method is a built-in method in JavaScript that is used to iterate over each element of an array and apply a provided function to each element, creating a new array with the results of the function calls. It doesn't modify the original array; instead, it returns a new array.

//Here's a simple example of using the map() method:

const numbers = [1, 2, 3, 4, 5];

// Using map to square each element of the array
const squaredNumbers = numbers.map((num) => num * num);

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
console.log(numbers); // Original array is unchanged: [1, 2, 3, 4, 5]

/* 

In this example:

The map() method is called on the numbers array.
The arrow function (num) => num * num is applied to each element of the array.
The result is a new array squaredNumbers where each element is the square of the corresponding element in the original array.
The map() method is versatile and can be used to transform array elements in various ways. It's a convenient tool for applying a function to every element of an array and creating a new array based on the results. 

*/

//Working with immutable arrays involves creating new arrays without modifying the original array. This is important in situations where you want to avoid unintended side effects and maintain the integrity of your data. Here are some common techniques for working with immutable arrays in JavaScript:

/* 
// 1- ---------------------Using concat() or Spread Operator:

const originalArray = [1, 2, 3];

// Using concat()
const newArrayConcat = originalArray.concat(4);
console.log(newArrayConcat); // Output: [1, 2, 3, 4]
console.log(originalArray); // Original array is unchanged: [1, 2, 3]

// Using spread operator
const newArraySpread = [...originalArray, 4];
console.log(newArraySpread); // Output: [1, 2, 3, 4]
console.log(originalArray); // Original array is unchanged: [1, 2, 3]
 */
/* 
// 2 -----------------------------Using map():

const originalArray = [1, 2, 3];

// Using map to create a new array with modified elements
const newArray = originalArray.map((element) => element * 2);
console.log(newArray); // Output: [2, 4, 6]
console.log(originalArray); // Original array is unchanged: [1, 2, 3]

 */

/* 
// 3 -------------------------------Using filter():

const originalArray = [1, 2, 3, 4, 5];

// Using filter to create a new array with specific elements
const newArray = originalArray.filter((element) => element % 2 === 0);
console.log(newArray); // Output: [2, 4]
console.log(originalArray); // Original array is unchanged: [1, 2, 3, 4, 5]
 */
/* 
// 4 ---------------------------Using slice():

const originalArray = [1, 2, 3, 4, 5];

// Using slice to create a shallow copy of the array
const newArray = originalArray.slice();
console.log(newArray); // Output: [1, 2, 3, 4, 5]
console.log(originalArray); // Original array is unchanged: [1, 2, 3, 4, 5]
 */

// 5 ---------------Using Object.assign() (for arrays of objects):

const originalArray = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

// Using Object.assign() to create a shallow copy of the array of objects
const newArray = Object.assign([], originalArray);
console.log(newArray); // Output: [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]
console.log(originalArray); // Original array is unchanged: [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]

//Choose the method that best fits your needs based on the specific requirements of your application. It's important to note that these methods create shallow copies, so if your array contains nested objects, you might need to use deep cloning techniques to ensure complete immutability.

//   practice from video
//1) Add book object to array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
};

const booksAfterAdd = [...books, newBook];
booksAfterAdd;

// 2) Delete book object from array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
booksAfterDelete;

// 3) Update book object in the array
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1210 } : book
);
booksAfterUpdate;

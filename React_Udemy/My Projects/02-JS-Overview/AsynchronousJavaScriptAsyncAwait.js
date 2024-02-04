/* 

//async/await is a feature introduced in ECMAScript 2017 (ES8) that simplifies asynchronous code in JavaScript. It allows you to write asynchronous code in a more synchronous-like manner, making it easier to read and maintain.

//Here's a basic overview of async/await:

// 1 ---------------------------async Function:
//The async keyword is used to define a function as asynchronous. An asynchronous function always returns a promise.

async function myAsyncFunction() {
  return "Hello, Async World!";
}

// 2 ----------------------------await Keyword:
//The await keyword is used inside an async function to wait for the completion of a promise. It can only be used inside an async function.

async function example() {
  const result = await myAsyncFunction();
  console.log(result); // Output: Hello, Async World!
}

example();

// ---------------------------------Handling Errors:
//You can use try/catch blocks to handle errors when working with async/await.

async function exampleWithErrorHandling() {
  try {
    const result = await someAsyncOperation();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

//------------------------------Sequential Execution:
//async/await makes it easy to write asynchronous code in a more sequential manner, avoiding callback hell.

async function sequentialExample() {
  const result1 = await asyncOperation1();
  const result2 = await asyncOperation2(result1);
  const result3 = await asyncOperation3(result2);
  console.log(result3);
}

// --------------------------------Parallel Execution:
//If you don't need to wait for the previous operation to complete before starting the next one, you can use Promise.all().

async function parallelExample() {
  const [result1, result2, result3] = await Promise.all([
    asyncOperation1(),
    asyncOperation2(),
    asyncOperation3(),
  ]);
  console.log(result1, result2, result3);
}

//async/await is particularly useful when dealing with Promises, making the code more readable and maintaining the benefits of asynchronous programming. It's important to note that async/await is syntactic sugar over promises and does not replace them; rather, it provides a more convenient syntax for working with asynchronous operations.


 */
//from video
/* 
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));

console.log("shivani");
 */
async function getToDo() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log("hellooooo");
  const data = await res.json();
  console.log(data);

  return data;
}

const todo = getToDo();
console.log(todo);
console.log("hello");

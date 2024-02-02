//Promises are a way to handle asynchronous operations in JavaScript, providing a cleaner and more readable alternative to callback functions. A Promise represents the eventual completion or failure of an asynchronous operation and its resulting value.

//Here's a basic overview of how Promises work:

// -------------------------Creating a Promise:
//You can create a Promise using the Promise constructor. It takes a function as an argument, which, in turn, takes two parameters: resolve and reject. Inside this function, you perform your asynchronous operation.

const myPromise = new Promise((resolve, reject) => {
  // Perform asynchronous operation
  setTimeout(() => {
    const success = true; // Simulating a successful operation
    if (success) {
      resolve("Operation succeeded");
    } else {
      reject("Operation failed");
    }
  }, 2000); // Simulating a 2-second delay
});

//--------------------------------Handling the Promise:
//You can use the .then() and .catch() methods to handle the resolved value and the rejected reason, respectively.

myPromise
  .then((result) => {
    console.log(result); // Output: Operation succeeded
  })
  .catch((error) => {
    console.error(error); // Output: Operation failed
  });

// -------------------------------Chaining Promises:
//You can chain multiple .then() calls to handle multiple asynchronous operations sequentially.

myPromise
  .then((result) => {
    console.log(result); // Output: Operation succeeded
    return "Another operation";
  })
  .then((result) => {
    console.log(result); // Output: Another operation
  })
  .catch((error) => {
    console.error(error); // Will be called if any operation fails
  });

// ----------------------------------Async/Await:
//With ES6 and later, you can use async functions and the await keyword to work with Promises in a more synchronous-looking fashion.

async function performAsyncOperation() {
  try {
    const result = await myPromise;
    console.log(result); // Output: Operation succeeded
  } catch (error) {
    console.error(error); // Output: Operation failed
  }
}

performAsyncOperation();

//Promises provide a structured and more readable way to work with asynchronous code, making it easier to reason about and avoiding the pitfalls of callback-based code.

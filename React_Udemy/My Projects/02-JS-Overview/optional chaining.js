//Optional Chaining is a feature in JavaScript that allows you to access properties of an object without explicitly checking if each level of the property chain exists. It helps to avoid errors caused by trying to access properties on null or undefined values.

//Here's an example of Optional Chaining:

const user = {
  id: 1,
  name: "John",
  address: {
    street: "123 Main St",
    city: "Cityville",
    zipcode: "12345",
  },
  // Uncomment the line below to test with undefined property
  // address: null,
};

// Accessing nested properties without optional chaining
// This can result in an error if any intermediate property is null or undefined
// const city = user.address.city; // Error if address is null or undefined

// Accessing nested properties with optional chaining
const city = user?.address?.city;
console.log(city); // Output: Cityville

// Optional chaining can be used for methods as well
const lengthOfStreet = user?.address?.street?.length;
console.log(lengthOfStreet); // Output: 11

// If any intermediate property is null or undefined, the result will be undefined
const invalidProperty = user?.invalidProperty?.nestedProperty;
console.log(invalidProperty); // Output: undefined

//Optional Chaining uses the ?. syntax. It allows you to access properties or call methods on nested objects without explicitly checking each level for existence. If any part of the chain is null or undefined, the result is undefined rather than causing an error.

//This is particularly useful when dealing with API responses or data where the structure might not be guaranteed, and you want to gracefully handle cases where certain properties are missing.

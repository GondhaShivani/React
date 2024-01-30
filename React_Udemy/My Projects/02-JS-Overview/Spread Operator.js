//Spread Operator:
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArray = [...arr1, ...arr2];

console.log(combinedArray); // [1, 2, 3, 4, 5, 6]

//Rest Operator:

const displayNumbers = (first, second, ...rest) => {
  console.log(first); // 1
  console.log(second); // 2
  console.log(rest); // [3, 4, 5]
};

displayNumbers(1, 2, 3, 4, 5);

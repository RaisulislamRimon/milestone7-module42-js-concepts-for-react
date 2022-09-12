const numbers = [89, 35, 98, 12];
const student = {
  name: "Shakib Khan",
  age: 32,
  movies: ["king khan", "Dhakar Mastan"],
};

// 1 template string
const about = `My name is ${student.name}, age of ${student.age}, has number ${numbers[2]}`;
console.log(about);

// 2 arrow function
const getFiftyFive = () => 55;
const addSixtyFive = (num) => num + 65;
const isEven = (x) => (x % 2 === 0 ? "even" : "odd");
console.log(isEven(6));
console.log(isEven(5));
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
  const sum = num1 + num2;
  return sum;
};

// 3 spread operator ...
const newNumbers = numbers;
console.log(newNumbers);

const newNumbers2 = [...numbers];
console.log(newNumbers2);

newNumbers2.push(55);
console.log(newNumbers2);
console.log(numbers);

// create a new array from an older array and add an element
const currentNumbers = [...numbers, 55];

console.log(numbers);
console.log(newNumbers2);
console.log(currentNumbers);

const newNums = [...numbers];
console.log(newNums);

numbers.push(99);
numbers.push(99);
numbers.push(99);
console.log(numbers);

const currentNums = [...numbers, 55];
console.log(currentNums);

// const numbers = [89, 35, 98, 12];
// const student = {
//     name: 'Salib Khan',
//     age: 32,
//     movies: ['king khan', 'Dhakar Mastan']
// };

// // 1. template string
// const about = `My Name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies[0]}`;
// console.log(about)

// // 2. arrow function
// const getFiftyFive = () => 55;
// const addSixtyFive = num => num + 65;
// const isEven = x => x % 2 == 0;
// const addThree = (x, y, z) => x + y + z;
// const doMath = (num1, num2) => {
//     const sum = num1 + num2;
//     return sum;
// }

// // spread operator
// const newNumbers = [...numbers];
// // create a new array from an older array and add an element
// const currentNumbers = [...numbers, 55];

// numbers.push(99);
// numbers.push(99);
// numbers.push(99);

// console.log(numbers);
// console.log(newNumbers);
// console.log(currentNumbers);

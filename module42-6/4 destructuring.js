// 1 Array destructuring
// const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];
// console.log(x, y);

// const numbers = [42, 65];

// // const [x, y] = [42, 65];
// const [x, y] = numbers;

// console.log(x, y);

function boxify(num1, num2) {
  const nums = [num1, num2];
  return nums;
}

console.log(boxify(90, 34));

const [first, second] = boxify(90, 34);
console.log([first, second]);

const student = {
  name: "Shakib Khan",
  age: 32,
  movies: ["king khan", "Dhakar Mastan"],
};

const [firstMovie, secondMovie] = student.movies;
console.log(firstMovie, secondMovie);

// Object destructuring

const { name, age, ...all } = {
  id: 12,
  money: 34,
  name: "smart dude",
  age: 17,
};
console.log(name, age, all);

const employee = {
  ide: "VS Code",
  designation: "developer",
  machine: "mac",
  languages: ["html", "css", "js"],
  specification: {
    height: 66,
    weight: 60,
    address: "chandpur",
    drink: "water",
    watch: {
      color: "black",
      price: 500,
      brand: "garmin",
    },
  },
};

// const { machine, ide } = employee;
const { machine, ide, ...rest } = employee;
console.log(machine, ide);
console.log(rest);

const { weight, address } = employee.specification;
console.log(weight, address);

const { brand } = employee.specification.watch;
console.log(brand);

// optional chaining
// optional chaining
// optional chaining

// if property does not exist then it will not give error

const { color } = employee?.specification?.watch;
console.log(color);

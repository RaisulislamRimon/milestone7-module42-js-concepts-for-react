// truthy => "rimon", 5, true, {}, []
// falsy => 0, "", undefined, null, NaN, false
// falsy => '', 0, false, null, undefined

// check truthy
// check any truthy
let myVar = 5;
if (myVar) {
  console.log("myVar has something");
} else {
  console.log("myVar is empty");
}

let myMoney = 50;

// you check negative or falsy anything

if (!myMoney) {
  console.log("you have no money");
} else {
  console.log("you have money");
}

const money = 180;
// const money = 80;

if (money > 100) {
  console.log("biriyani khabo");
} else {
  console.log("alu vorta khabo");
}

// ternary operator

// const allMoney = 100;
// let food1 = allMoney > 80 ? "biriyani" : "alu vorta";
// console.log(food1);

const allMoney = 100;

// ternary operator

allMoney > 80
  ? console.log("biriyani khabo")
  : console.log("Potato chips khabo");

let drink = allMoney > 80 ? "coke" : "water";
console.log(drink);

// number to string conversion

const num1 = 52;
console.log(num1);

const numStr = num1 + "";
console.log(numStr);

// string to number conversion

const num2 = "365";
console.log(+num2);
console.log(parseInt(num2));
console.log(num2);

//
const isActive = true;
// const isActive = false;

const showUser = () => console.log("display user");
const hideUser = () => console.log("hide user");

// if (isActive) {
//   showUser();
// } else {
//   hideUser();
// }

isActive ? showUser() : hideUser();

const isActive2 = false;

// use && operator if the left side is true then the right side will be executed
isActive2 && showUser();

// use || operator if the left side is false then the right side will be executed
isActive2 || hideUser();

const isActive3 = true;

isActive3 && showUser();

let isActive4 = true;

// toggle bolean

isActive4 = !isActive4;

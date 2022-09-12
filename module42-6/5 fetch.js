// 1 JSON

const student = {
  name: "Sakib Khan",
  age: 32,
  movies: ["king khan", "Dhakar Mastan"],
};

const studentJSON = JSON.stringify(student); // {"name":"Sakib Khan","age":32,"movies":["king khan","Dhakar Mastan"]}

console.log(studentJSON);

const studentObject = JSON.parse(studentJSON); // { name: 'Sakib Khan', age: 32, movies: [ 'king khan', 'Dhakar Mastan' ] }
console.log(studentObject);

// 2 fetch

// fetch(`https://jsonplaceholder.typicode.com/users`)
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

//   keys,values

const keys = Object.keys(student);
const values = Object.values(student);

console.log(keys);
console.log(values);

// for

const numbers = [23, 45, 67, 89, 12, 34, 56, 78, 90];

numbers.forEach((num) => {
  console.log(num);
});

numbers.map((num) => {
  num * 2;
});

// for of on array like Object
// loop on an Object using for in

// add or remove from an array

const products = [
  { name: "laptop", price: 32000, brand: "lenovo", color: "silver" },
  { name: "phone", price: 12000, brand: "apple", color: "black" },
  { name: "watch", price: 8000, brand: "casio", color: "gold" },
  { name: "sunglass", price: 3000, brand: "rayban", color: "black" },
  { name: "camera", price: 5000, brand: "canon", color: "black" },
];

const newProduct = {
  name: "webcam",
  price: 700,
  brand: "lalala",
  color: "pink",
};

// add newProduct to products
// copy products array and then add newProduct to it

const newProducts = [...products, newProduct];

console.log(newProducts);

// create a new array without one specific item

// remove phone means create a new array without the phone

const remaining = products.filter((pd) => pd.name !== "phone");
console.log(remaining);

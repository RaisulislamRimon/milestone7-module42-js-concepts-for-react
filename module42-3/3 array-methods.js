const products = [
  { name: "Laptop", price: 32000, brand: "dell", color: "black" },
  { name: "phone", price: 7000, brand: "iphone", color: "golden" },
  { name: "watch", price: 3000, brand: "casio", color: "yellow" },
  { name: "sunglass", price: 300, brand: "ribon", color: "black" },
  { name: "camera", price: 9000, brand: "canon", color: "gray" },
];

const brand = products.map((pd) => pd.brand);
console.log(brand);

const prices = products.map((pd) => pd.price);
console.log(prices);

products.forEach((pd) => {
  console.log(pd);
});

products.forEach((pd) => {
  console.log(pd.brand);
});

products.forEach((pd) => {
  console.log(pd.name);
});

products.forEach((pd) => console.log(pd.color));

// 3 filter
const cheap = products.filter((pd) => pd.price <= 5000);
console.log(cheap);

const specificName = products.filter((pd) => pd.name.includes("n"));
console.log(specificName);

// 4 find
const special = products.find((pd) => pd.name.includes("n"));
console.log(special);

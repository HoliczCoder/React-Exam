var arrOfObj = [
  {
    name: "eve",
    number: 5,
  },
  {
    name: "john",
    number: 2,
  },
  {
    name: "jane",
    number: 3,
  },
  {
    name: "jane",
    number: 100,
  },
];

const a = arrOfObj.sort((a, b) => a.number - b.number);

console.log(a);

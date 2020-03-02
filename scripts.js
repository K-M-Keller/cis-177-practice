// const myArray = ["String", 23, "Another String", true, false];

// // The length of an ARRAY is always 1 more than the highest index.

// console.log(myArray[1]); // 23
// console.log(myArray.length); // 5

// console.log(myArray[99]); // undefined
// myArray[1] = 177;
// myArray[1000] = "JJ";
// console.log(myArray[1000]); // JJ
// console.log(myArray.length); // 1001
// console.log(myArray[888]); // undefined

const data = [
  { name: "Katy", dislikes: ["bell peppers", "stupid people", "snow"] },
  { name: "Blue" },
  { name: "Purple" }
];

console.log(data[0].hobbies[2]);

// Iterate over data and log every name.
for (let i = 0; i <= data.length - 1; i++) {
  console.log(data[i].name);
}

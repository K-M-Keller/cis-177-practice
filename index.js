// Dot notation
// const me = {
//   name: "Katy",
//   age: 36,
//   pets: {
//     pet1: "Ellie",
//     pet2: "Demon"
//   },
//   shows: "Sabrina"
// };

// const keyThatINeed = "pets";
// console.log(me[keyThatINeed]);

// Bracket notation
// Use BRACKET NOTATION to access a key that is REFERENCED by a VARIABLE.
//console.log(me["pets"]);

//console.log("Bracket notation with variable: ", me.pets[keyThatINeed]);

// Relational or COMPARISON OPERATORS always yields BOOLEANS.
// console.log(2 === 2);

// To check if 2 things are considered to equal...
// '===' is STRICT EQUALITY
// It checks the value and TYPE.
// console.log(2 === "2"); //false
// console.log(2 === 3);
// console.log(2 !== 3); //true

// const x = 3;

// EXPRESSION is anything that evaluates a value
// STATEMENTS combine EXPRESSIONS with keyboards and other syntax
// {}s establish the scope of the code
// if (x === 3) {
//   console.log("x is 3!");
// } else {
//   console.log("x is not 3!");
// }
// const age = 20;

// if (age >= 25) {
//   console.log("Renting a car is affordable");
// } else if (age >= 18) {
//   console.log("Renting a car is expensive");
// } else {
//   console.log("You cannot rent");
// }

// JS is a DYNAMICALLY TYPED language
const name = "";
// We can quickly check to see if  value is "truthy" or "falsey"
// For examples, if I left the 'name' blank on a form
if (name) {
  console.log("the user filled out the name");
} else {
  console.error("user left name blank");
}

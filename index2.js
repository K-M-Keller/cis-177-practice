const name = "katy";
let num = 1;

// console.log(
//   "my name is " + name + " and I have been coding for " + num + " years."
// );

// // Template Literals and Interpolation

// console.log(`My name is ${name}`);

// // Create a variable 'timeOfDay' and assign it to a string

// const timeOfDay = "Morning";

// console.log(`Good ${timeOfDay}`);
// console.log(typeof timeOfDay); //show what type of data it is

// // JS will COERCE your data types into whatever it feels appropriate.
// // IMPLICIT
// console.log("22" + 22);
// console.log(22 + 22);
// console.log(22 + true);
// console.log(22 + false);

// EXPLICIT COERCION you tell JS what/how you want it done
console.log(Number(false));

console.log(parseInt("123.45")); //Shows before the decimal.
console.log(parseFloat("123.45")); //Shows the entire number.

console.log(Boolean(222));
console.log("3" * 3);

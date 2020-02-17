// Pass by VALUE
let x = 3;

x = 4;

let y = x;

console.log(y);

// Pass by REFERENCE
const a = {
  name: "katy"
};

// b will point to the same memory address
// What happens to 1 will affect the other
const b = a;

a.name = "keller";

console.log(b.name);

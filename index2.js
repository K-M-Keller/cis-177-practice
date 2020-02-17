const a = 49;
const b = 49;

console.log(a === b);

const x = {
  name: "Katy"
};

const y = {
  name: "Katy"
};

// false b/c OBJECTS are COMPARED BY REFERENCE
console.log(x === y);

console.log({ a: 42 } === { a: 42 });

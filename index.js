// Underfinded is a PRIMITIVE TYPE.
// It signifies the absence of ANY value.
let x;

x = 23;
x = 0;
// NULL is a PRIMITIVE.
// NULL represents a deliberate assignment of 'nothing'
console.log(x);

// This is an OBJECT.
const me = {
  name: "Katy",
  age: 36,
  pets: {
    cat: "Demon",
    dog: "Ellie"
  }
};

// Create an new key value pair with age = 23.
me.age = 23;
me.name = "Keller";

console.log(me.pets.cat);

let age = prompt("What is your age?");

age = Number(age);

// TODO: If the user enters something that EXPLICITLY CONVERTS to 'NaN' alert them
if (!age) {
  alert("This is not a number!");
}
console.log(age);

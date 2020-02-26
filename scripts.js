const user = {};

// The result of CONFIRM (T or F)is assigned to the value associated with user
// We will mutate the object based on confirm.
user.isHappy = confirm("Are you happy?");

console.log(user);

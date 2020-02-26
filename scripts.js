// IMPLICIT CONVERSATION
// || means OR
// If first expression is "truthy" then we do not EVALUATE the right hand-side.
// If prompt RETURNS an empty STRING - b/c of the '||' this will be IMPLICITLY CONVERTED to 'false'

// 'name will be a STRING, but it might be blank.
let name = prompt("What is your name?");

// If 'name' is blank, then '!' will convert to a Boolean (NOT FALSE)
// If the name is not blank, then '!' will convert it to a Boolean (NOT TRUE)
while (!name) {
  name = prompt("What is your name?");
}
console.log(name);

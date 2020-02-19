// TODO: FIzz Buzz
// Log the numbers from 1 to 100.
// However if the number is divisible by 3, log fizz.
// However if the number is divisible by 5, log buzz.
// However if the number is divisible by both, log fizz buzz.

let i = 1;

while (i <= 100) {
  if (!(i % 3) && !(i % 5)) {
    console.log("FizzBuzz");
  } else if (!(i % 3)) {
    console.log("Fizz!");
  } else if (!(i % 5)) {
    console.log("Buzz!");
  } else {
    console.log(i);
  }
  i += 1;
}

// Log the numbers from 1 to 10.
// in parentheses, specify 3 things - start - stop - increment
//  'for' limits the use of GLOBAL VARIBLE for 'i'
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// Add the numbers from 1 to 10.
let total = 0;

for (let i = 1; i <= 10; i++) {
  console.log("total is", total);
  console.log("i is", i);

  total += i;
}

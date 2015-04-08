// FizzBuzz 
for (var i = 1; i <= 100; i += 1) {
  if (i % 15 == 0) {
    console.log("FizzBuzz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}

// Book:
// for (var n = 1; n <= 100; n++) {
//   var output = "";
//   if (n % 3 == 0)
//     output += "Fizz";
//   if (n % 5 == 0)
//     output += "Buzz";
//   console.log(output || n);
// }
// FizzBuzz version2
for (var i = 1; i <= 100; i += 1) {
  var fizz = "", buzz = "";
  if (i % 3 == 0) {
    fizz = "Fizz";
  }
  if (i % 5 == 0) {
    buzz = "Buzz";
  }
  if (fizz+buzz == "") {
    console.log(i);
  } else {
    console.log(fizz+buzz);
  }
}

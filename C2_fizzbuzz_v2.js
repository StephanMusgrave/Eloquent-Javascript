// FizzBuzz version2
for (var i = 1; i <= 100; i += 1) {
  var fizz = "", buzz = "", fizzbuzz = "";
  if (i % 3 == 0) fizz = "Fizz";
  if (i % 5 == 0) buzz = "Buzz";
  fizzbuzz = fizz + buzz
  if (fizzbuzz.length == 0) console.log(i);
  else console.log(fizzbuzz);
}

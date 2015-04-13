function countBs(string) {
  count = 0;
  for (var i = 0; i <= string.length; i++) {
    if (string.charAt(i) == "B") {
      count = count + 1;
    }
  }
  return count;
}

function countChar(string, char) {
  count = 0;
  for (var i = 0; i <= string.length; i++) {
    if (string.charAt(i) == char) {
      count = count + 1;
    }
  }
  return count;
}


console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));

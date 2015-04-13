function isEven(number) {
  if (number == 0) 
    return true;
  else if (number == 1)
    return false;
  else 
    return isEven(number-2);
};

console.log("0 ", isEven(0));
console.log("1 ", isEven(1));
console.log("50 ", isEven(50));
console.log("75 ", isEven(75));
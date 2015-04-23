
function range(start, end, step) {
  array = [];
  if (step == undefined) step = 1;
  for (var i = start; i <= end; i+=step) {
    array.push(i);
  }
  return array;
}

function sum(array) {
  total = 0
  for (var i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

array = range(1, 10, 2);
console.log(array);

console.log(sum(range(1,10)));

// Book: 
function findSolution(target) {
  function find(start, history) {
    if (start == target)
      return history;
    else if (start > target)
      return null;
    else
      return find(start + 5, "(" + history + " + 5)") ||
             find(start * 3, "(" + history + " * 3)");
      // "||" returns the first value that evaluates to
      // true or the rightmost value, if neither of the
      // values are true instead of returning true itself. 
      // If the first call returns something that is not null, 
      // it is returned. Otherwise, the second call is returned 
      // — regardless of whether it produces a string or null
  }
  return find(1, "1");
}
for (var i = 1; i < 20; i ++) {
  console.log(i + ": " + findSolution(i));
}
// → (((1 * 3) + 5) * 3)
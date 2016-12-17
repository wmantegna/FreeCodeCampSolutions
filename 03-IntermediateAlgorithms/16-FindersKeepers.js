/*
  Create a function that looks through an array (first argument)...
  ...and returns the first element in the array that passes a truth test (second argument).

  hints: Array.prototype.filter()
*/

function findElement(arr, func) {
  return arr.filter(func)[0];
}

var values = [1,2,3,4];
var func = function(num){ return num % 2 === 0; }

var ans = findElement(values, func);
console.log(ans);


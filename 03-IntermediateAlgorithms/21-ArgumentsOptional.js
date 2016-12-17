/*

  Create a function that sums two arguments together. 
  If only one argument is provided, then return a function that expects one argument and returns the sum.

  For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

  Calling this returned function with a single argument will then return the sum:

    var sumTwoAnd = addTogether(2);
    sumTwoAnd(3) // returns 5.

  If either argument isn't a valid number, return undefined.

  Hints:
    Closures
    Arguments Object
*/


function isNumber(val){
  return typeof(val) === "number";
}

function makeAdder(x) {
  return function(y) {
    
    if (isNumber(y)) {
      return x + y;
    }
    
    return undefined;
  };
}

function addTogether() {
  var x = arguments[0];
  var y = arguments[1];

  if (isNumber(x)) {
    var calc = makeAdder(x);
    
    if (y !== undefined){
      return calc(y);
    } else {
     return calc;
    }
  }

  return undefined;
}

// var ans = addTogether(2, 3); // returns 5
// var ans = addTogether(2)(3); // returns 5
// var ans = addTogether("http://bit.ly/IqT6zt");  // returns undefined
// var ans = addTogether(2)([3]); // returns undefined
var ans = addTogether(2)("3"); // returns undefined

console.log(ans);
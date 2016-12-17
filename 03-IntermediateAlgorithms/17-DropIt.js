/*
  Drop the elements of an array (first argument), starting from the front, 
  until the predicate (second argument) returns true.

  The second argument, func, is a function you'll use to test the first elements of the array 
  to decide if you should drop it or not.

  Return the rest of the array, otherwise return an empty array.

  Hints:
    Arguments object
    Array.prototype.shift()
    Array.prototype.slice()
*/

function dropElements(arr, func) {

  var temp = arr.slice();
  for (var i = 0; i < arr.length; i++){
    
    var val = temp.shift();
    if (func(val)){
      return arr.slice(i);
    }
  }
  
  return [];
}

// returns [3,4]
// var values = [1,2,3,4];
// var func = function(n) {return n >= 3; }

// returns [1, 0, 1]
var values = [0, 1, 0, 1];
var func = function(n) {return n === 1;}

var ans = dropElements(values, func);
console.log(ans);

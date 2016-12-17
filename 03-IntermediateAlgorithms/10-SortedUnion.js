/*
  Write a function that takes two or more arrays and returns a new array of unique values 
  in the order of the original provided arrays.

  In other words, all values present from all arrays should be included in their original order, 
  but with no duplicates in the final array.

  The unique numbers should be sorted by their original order, 
  but the final array should not be sorted in numerical order.

  Hints:
    Arguments object (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)
    Array.prototype.reduce()
 */


function uniteUnique(arrUseless) {
  var arr = Array.from(arguments);
  arr = arr.reduce(function(a,b){
    if (Array.isArray(b)){
      
      for(var i = 0; i < b.length; i++){
        if (a.indexOf(b[i]) === -1){
          a.push(b[i]);
        }
      }
      
    }
    return a;
  });
  
  return arr;
}

var ans = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
console.log(ans);

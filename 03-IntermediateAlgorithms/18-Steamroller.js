/*
  Flatten a nested array.
  You must account for varying levels of nesting.

  Hints: Array.isArray()
*/


function steamrollArray(arr) {
  while (containsArray(arr) === true){
    arr = [].concat.apply([],arr);
  }
  
  return arr;
}

var containsArray = function(arr){
  if (Array.isArray(arr) === false){
    return false;
  }
  
  var hasArray = false;
  for (var i = 0; i < arr.length; i++){
    if (Array.isArray(arr[i])){
      hasArray = true;
      break;
    } 
  }
  
  return hasArray;
}

// var values = [1, [2]];
var values = [1, [2], [3, [[4]]]];

var ans = steamrollArray(values);
console.log(ans);
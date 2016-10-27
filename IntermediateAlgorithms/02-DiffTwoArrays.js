/*
  Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
  In other words, return the symmetric difference of the two arrays.
*/

function diffArray(arr1, arr2) {
  
  var result1 = arr1.filter(function(val){
    return arr2.indexOf(val) == -1;
  });
  var result2 = arr2.filter(function(val){
    return arr1.indexOf(val) == -1;
  });
  
  return result1.concat(result2);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
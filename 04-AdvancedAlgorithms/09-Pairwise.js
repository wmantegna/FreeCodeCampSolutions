/*
  Given an array arr, find element pairs whose sum equal 
  the second argument arg and return the sum of their indices.

  If multiple pairs are possible that have the same numeric elements but different indices, 
  return the smallest sum of indices. 
  Once an element has been used, it cannot be reused to pair with another.

  For example pairwise([7, 9, 11, 13, 15], 20) returns 6. 
  The pairs that sum to 20 are [7, 13] and [9, 11]. 
  We can then write out the array with their indices and values.

  Index 0  1   2   3   4
  Value 7  9  11  13  15
  Below we'll take their corresponding indices and add them.

  7 + 13 = 20 → Indices 0 + 3 = 3
  9 + 11 = 20 → Indices 1 + 2 = 3
  3 + 3 = 6 → Return 6

  hints:
    Array.prototype.reduce()

*/


function pairwise(arr, arg) {
  var sumsOfIndices = [];
  var used = [];

  var hasBeenUsed = function(num){
    return used.indexOf(num) > -1;
  };
  
  for (var i = 0; i < (arr.length - 1); i ++){
    var num1 = arr[i];
    if (hasBeenUsed(i)){
      continue;
    }

    for (var j = (i + 1); j < arr.length; j++){
      var num2 = arr[j];
      if (hasBeenUsed(j) || hasBeenUsed(i)){
        continue;
      }
      
      if (arg === (num1 + num2)){
        used.push(i);
        used.push(j);

        sumsOfIndices.push(i + j);
      }
    }
  }

  return sumsOfIndices.reduce(function(a,b){
    return a + b;
  }, 0);
}

var items = [
{arr: [1,4,2,3,0,5], arg: 7},     // 11
{arr: [1, 3, 2, 4], arg: 4},      // 1
{arr: [1, 1, 1], arg: 2},         // 1
{arr: [0, 0, 0, 0, 1, 1], arg: 1} // 10
];

for (var i = 0; i < items.length; i++){
  var item = items[i];
  var ans = pairwise(item.arr, item.arg);  
  console.log(ans);
}
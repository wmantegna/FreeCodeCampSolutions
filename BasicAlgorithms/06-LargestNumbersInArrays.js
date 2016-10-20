/*
  Return an array consisting of the largest number from each provided sub-array.
  For simplicity, the provided array will contain exactly 4 sub-arrays.
*/


function largestOfFour(arr) {
  var finalArr = [];
  arr.map(function(innerArr){
    var maxVal = innerArr.reduce(function(max,num){
      return max > num ? max : num;
    });
    
    //console.log(maxVal);
    finalArr.push(maxVal);
  });
  return finalArr;
}

var ans = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
console.log(ans);

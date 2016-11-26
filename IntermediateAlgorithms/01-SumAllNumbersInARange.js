//We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
//The lowest number will not always come first.

function sumAll(arr) {
  if (arr.length != 2){
    throw Error('arr must have a length of 2');
  }
  // determine min & max
  var min, max;
  if (arr[0] < arr[1]){
    min = arr[0];
    max = arr[1];
  } else {
    min = arr[1];
    max = arr[0];
  }

  var count = 0;
  for (var i = min; i <= max; i++){
    count += i;
  }
  return count;
}

sumAll([1, 4]);

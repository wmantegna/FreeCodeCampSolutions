/*
  Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
  The first two numbers in the Fibonacci sequence are 1 and 1. 
  Every additional number in the sequence is the sum of the two previous numbers. 
  The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

  For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.
*/



/*
  Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
  The first two numbers in the Fibonacci sequence are 1 and 1. 
  Every additional number in the sequence is the sum of the two previous numbers. 
  The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

  For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.
*/

function sumFibs(num){
  // generate array of fibonacci values
  var arr = [];
  arr[0] = 0;
  arr[1] = 1;
  var i = 2;    
  var latestFib = arr[1];
  while(latestFib <= num)
  {
    arr[i] = arr[i-2] + arr[i-1];
    
    latestFib = arr[i];
    i++;
  }
  
  // sum all odd fibonacci values
  return arr.reduce(function(a,b) {
    if (b <= num && b%2 !== 0){
      a += b;
    }
    return a;
  });
}

sumFibs(75025);

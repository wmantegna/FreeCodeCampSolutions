/*
  Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
  as well as by all sequential numbers in the range between these parameters.

  The range will be an array of two numbers that will not necessarily be in numerical order.

  e.g. for 1 and 3
    find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

  Hint:
    https://www.mathsisfun.com/least-common-multiple.html
*/

//------------------------------------------------------------------
// program code
//------------------------------------------------------------------
// var arr = [28];
// arr.forEach(function(val){
//   var ans = factorize(val);
//   console.log(ans);
  
//   var result = ans.reduce(function(a,b){return a*b;});
//   console.log('val='+val + 'result='+result);
// });

var ans = smallestCommons([1,5]);
console.log(ans);
//------------------------------------------------------------------


// Calculation functions
//------------------------------------------------------------------
function smallestCommons(input) {
  var min = Math.min(input[0], input[1]);
  var max = Math.max(input[0], input[1]);

  // get factors every number from min to max
  var arrOfArrs = [];
  for (var i = min; i <= max; i++){
    var result = factorize(i);
    arrOfArrs.push(result);
  }
  
  // map the highest number of occurrences of each factor for any number
  var dic = {};
  arrOfArrs.forEach(function(arr){
    for (var j = 0; j < arr.length; j++){
      var val = arr[j];
      var occurrences = arr.filter(function(value){
        return value === val;
      }).length;
      console.log('occurrences=' + occurrences + ' | val='+val + ' |arr='+arr);
      if (dic.hasOwnProperty(val)){
        occurrences = Math.max(dic[val], occurrences);
      }
      dic[val] = occurrences;
    }
  });
  
  var result = 1;
  Object.keys(dic).forEach(function(key){
    result *= Math.pow(key, dic[key]);
  });
  return result;
}
function factorize(num){
  if (num < 2){
    //console.log('returning 0');
    return [];
  }
  
  var primes = getPrimes(num);
  if (primes.indexOf(num) !== -1){
    //console.log('returning ' + num);
    return [num];
  }

  
  var arr = [];
  for (var i = 0; i < primes.length; i++){
    var prime = primes[i];
    if (num % prime === 0){
      arr.push(prime);
      
      var quotient = num/prime;
      //console.log(num + ' is divisible by '+ prime + '. Seeking '+quotient);
      var factors = factorize(quotient);
      arr = arr.concat(factors);
      break;
    }
  }

  return arr;
}
function getPrimes(num) {
  
  // validate input is worth looping over
  if (num <= 1)
    return 1;  
  
  var primes = [];
  primes.push(2);
  for (var i = primes[0]+1; i <= num; i++){
    var isPrime = true;
    for (var j = 0; j < primes.length; j++){
      if (i % primes[j] === 0){
        isPrime = false;
        break;
      }
    }
    
    if (isPrime)
      primes.push(i);
  }
  return primes;
}
//------------------------------------------------------------------
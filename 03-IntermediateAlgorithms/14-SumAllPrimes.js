/*
  Sum all the prime numbers up to and including the provided number.

  A prime number is defined as a number greater than one and having only two divisors, 
  one and itself. For example, 2 is a prime number because it's only divisible by one and two.

  The provided number may not be a prime.

  Hints:
    For Loops
    Array.prototype.push()
*/


function sumPrimes(num) {
  
  // validate input is worth looping over
  if (num < 1)
    return 0;
  else if (num === 1)
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
  
  return primes.reduce(function(a,b){
    return a + b;
  });
}

var ans = sumPrimes(2);
console.log(ans);

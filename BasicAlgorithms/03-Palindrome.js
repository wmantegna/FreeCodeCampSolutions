/*
  You'll need to remove all non-alphanumeric characters 
  (punctuation, spaces and symbols) and 
  turn everything lower case in order to check for palindromes.
  
  palindrome("eye") should return true.
  palindrome("_eye") should return true.
  palindrome("race car") should return true.
  palindrome("not a palindrome") should return false.
  palindrome("A man, a plan, a canal. Panama") should return true.
  palindrome("never odd or even") should return true.
  palindrome("nope") should return false.
  palindrome("almostomla") should return false.
  palindrome("My age is 0, 0 si ega ym.") should return true.
  palindrome("1 eye for of 1 eye.") should return false.
  palindrome("0_0 (: /-\ :) 0-0") should return true.
  palindrome("five|\_/|four") should return false.
*/

function palindrome(str) {
  var pattern = /\w/g;
  
  var forward = str.toLowerCase().match(pattern).join('').replace('_','');
  var reverse = forward.split('').reverse().join('');
  
  //console.log(forward);
  //console.log(reverse);
  
  return forward === reverse;
}

//var ans = palindrome("eye");
//var ans = palindrome("not a palindrome");
var ans = palindrome("A man, a plan, a canal. Panama");
console.log(ans);
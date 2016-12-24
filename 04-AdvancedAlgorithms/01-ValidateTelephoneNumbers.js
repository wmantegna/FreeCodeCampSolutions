/*
  Return true if the passed string is a valid US phone number.
  The user may fill out the form field any way they choose as long as it is a valid US number.

  The following are examples of valid formats for US numbers (refer to the tests below for other variants):
    555-555-5555
    (555)555-5555
    (555) 555-5555
    555 555 5555
    5555555555
    1 555 555 5555

  Hints:
    RegExp
*/


function telephoneCheck(str) {
  var tenDigits = /^\d{10}$/;
  var tenDigitsWithCountryCode = /^\d{11}$/;
  var tenDigitsWithParantheses = /^\(\d{3}\)\d{7}$/;
  var tenDigitsWithParanthesesAndCountryCode = /^\d{1}\(\d{3}\)\d{7}$/;
  
  // filter out items whose first char is not a digit or '('
  var char = str.charAt(0);
  if ((char === '(' || char.match(/\d/) !== null) === false){
    return false;
  }  
  
  // filter out ' ' & '-'
  str = str.replace(/[ \-]/g, '');
  console.log(str);

  // count # of parentheses
  var patternForAllParentheses = /[\(\)]/g;
  var parenthesesArr = str.match(patternForAllParentheses);
  var numParentheses = parenthesesArr !== null ? parenthesesArr.length : 0;
  
  // filter for country code
  if (str.length === (11 + numParentheses)){
    
    if (str.charAt(0) === "1"){
      str = str.substring(1);
    } else {
      return false;
    }
  }
  
  if (str.match(tenDigits) !== null || 
      str.match(tenDigitsWithCountryCode) !== null ||
      str.match(tenDigitsWithParantheses) !== null ||
      str.match(tenDigitsWithParanthesesAndCountryCode) !== null
     ){
    return true;
  } else {
    return false;    
  }
}

var vals = [
  '555-555-5555',
  '(555)555-5555',
  '(555) 555-5555',
  '555 555 5555',
  '5555555555',
  '1 555 555 5555', 
  
  '55555555',
  '1 555)555-5555',
  '(6505552368)',
  '-1 (757) 622-7382'
];

vals.forEach(function(val){
  var ans = telephoneCheck(val);
  console.log(ans);
});
// Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
  if (num < 1)
    return '';
  
  var result = [];
  for(var i=0;i<num;i++){
    result.push(str);
  }

  return result.join('');
}

repeatStringNumTimes("abc", 3);

/*
  Find the missing letter in the passed letter range and return it.
  If all letters are present in the range, return undefined.
  
  Hints:
    String.prototype.charCodeAt()
    String.fromCharCode()
 */


function fearNotLetter(str) {
  var arr = [];
  
  // (str.length - 1) because the last character has nothing to match with
  for(var i = 0; i < str.length - 1; i++){

    var charCode = str.charCodeAt(i);
    if (charCode+1 === str.charCodeAt(i+1)){
      continue;
    } else {
      arr.push(String.fromCharCode(charCode + 1));
    }
  }
  return arr.length > 0 ? arr.join('') : undefined;
}

var ans = fearNotLetter("abce");
console.log(ans);

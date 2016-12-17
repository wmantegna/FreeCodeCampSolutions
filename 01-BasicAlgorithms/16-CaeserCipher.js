/*
  One of the simplest and most widely known ciphers is a Caesar cipher, also known as a 
  shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

  A common modern use is the ROT13 cipher, where the values of the letters 
  are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

  Write a function which takes a ROT13 encoded string as input and returns a decoded string.

  All letters will be uppercase. Do not transform any non-alphabetic 
  character (i.e. spaces, punctuation), but do pass them on.
  
  hints:
  String.prototype.charCodeAt()
  String.fromCharCode()
*/

function rot13(str) { // LBH QVQ VG!
  var result = [];
  
  var min = 64;
  var max = 90;
  
  for(var i = 0; i < str.length; i++){
    
    var val = str[i];
    if (val.match(/[A-Z]/)){
      var decodedCharCode = str.charCodeAt(i) - 13;
      
      // wrap 'A' & 'Z' for continuous loop
      if (decodedCharCode <= min)
        decodedCharCode = max - (min - decodedCharCode);
      
      val = String.fromCharCode(decodedCharCode);
    }
    
    result.push(val);
  }

  //console.log(result);
  return result.join('');
}

//var ans = rot13("SERR PBQR PNZC");
var ans = rot13("SERR CVMMN!")
console.log(ans);

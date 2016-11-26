/*
  The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

  Base pairs are a pair of AT and CG. Match the missing element to the provided character.
  Return the provided character as the first element in each array.
  For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
  The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

  Hints:
    Array.prototype.push()
    String.prototype.split()
 */


function pairElement(str) {
  var arrOfArrs = [];
  
  for(var i = 0; i < str.length; i++){
    var firstChar = str[i].toUpperCase();
    
    // get match
    var matchingChar;
    switch(firstChar){
      case 'A': matchingChar = 'T';  break;
      case 'T': matchingChar = 'A';  break;
      case 'G': matchingChar = 'C';  break;
      case 'C': matchingChar = 'G';  break;
    }
    
    arrOfArrs.push([firstChar, matchingChar]);
  }

  return arrOfArrs;
}

var ans = pairElement("GCG");
console.log(ans);

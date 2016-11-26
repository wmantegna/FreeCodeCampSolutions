/*
  Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

  Hints:
    RegExp
    String.prototype.replace()
*/

// "This Is"    /[ ][A-Z]/
// "thisIs"     /[a-z][A-Z]/
// "The_Andy"   /[_][A-Z]/
// "say Eh-oh"  /[ ][A-Z]/

function spinalCase(str) {

  // add spaces between words
  str = str.replace(/([A-Z])/g, ' $1').trim();

  // replace spacers
  str = str.replace(/[_ ]{1,}/g, '-');
  
  return str.toLowerCase();
}

var strings = ["This Is", "thisIs", "The_Andy"];
strings.forEach(function(val){
  var ans = spinalCase(val);
  console.log(ans);
});
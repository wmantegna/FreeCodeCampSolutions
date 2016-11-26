/*
  Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
  in a string to their corresponding HTML entities.

  Hints:
    RegExp
    HTML Entities
    String.prototype.replace()
*/

function convertHTML(str) {
  str = str.replace(/&/g,'&amp;');
  str = str.replace(/</g,'&lt;');
  str = str.replace(/>/g,'&gt;');
  str = str.replace(/"/g,'&quot;');
  str = str.replace(/'/g,'&apos;');
  
  return str;
}

//var ans = convertHTML("Dolce & Gabbana");
var ans = convertHTML("Hamburgers < Pizza < Tacos")
console.log(ans);

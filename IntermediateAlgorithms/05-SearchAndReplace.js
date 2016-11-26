/* 
  Perform a search and replace on the sentence using the arguments provided and return the new sentence.
  
  function myReplace(str, before, after) {}
    First argument is the sentence to perform the search and replace on.
    Second argument is the word that you will be replacing (before).
    Third argument is what you will be replacing the second argument with (after).

  NOTE: Preserve the case of the original word when you are replacing it. 
  For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

  Hints:
    Array.prototype.splice()
    String.prototype.replace()
    Array.prototype.join()
*/


/* 
  Perform a search and replace on the sentence using the arguments provided and return the new sentence.
  
  function myReplace(str, before, after) {}
    First argument is the sentence to perform the search and replace on.
    Second argument is the word that you will be replacing (before).
    Third argument is what you will be replacing the second argument with (after).

  NOTE: Preserve the case of the original word when you are replacing it. 
  For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
*/

function myReplace(str, before, after) {
  // if necessary, uppercase first character
  if (before.charAt(0).toUpperCase() === before[0]){
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }

  return str.replace(before, after);
}

//var ans = myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
var ans = myReplace("Let us get back to more Coding", "Coding", "algorithms");
console.log(ans);

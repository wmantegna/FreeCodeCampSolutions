/*
  Check if a value is classified as a boolean primitive. Return true or false.
  Boolean primitives are true and false.

  Hints:
    Boolean Objects
 */


function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  return bool === true || bool === false;
}

var ans = booWho(null);
console.log(ans);
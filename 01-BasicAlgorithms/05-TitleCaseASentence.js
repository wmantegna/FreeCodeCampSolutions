//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
//For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".


function titleCase(str) {
  var result = str.split(' ').map(function(val){
    return  val.charAt(0).toUpperCase() + val.substring(1).toLowerCase();
  });
  return result.join(' ');
}

var ans = titleCase("I'm a little tea pot");
console.log(ans);

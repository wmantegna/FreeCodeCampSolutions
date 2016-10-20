// Return the length of the longest word in the provided sentence.

function findLongestWord(str) {
  var max = 0;
  var words = str.split(' ');
  
  for (var i=1;i<words.length;i++){
    var length = words[i].length;
    max = length > max ? length : max;
  }
  return max;
}

var ans = findLongestWord("The quick brown fox jumped over the lazy dog");
console.log(ans);

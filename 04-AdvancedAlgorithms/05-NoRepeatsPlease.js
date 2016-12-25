/*
  Return the number of total permutations of the provided string that don't have repeated consecutive letters. 
  Assume that all characters in the provided string are each unique.

  For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), 
  but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

  Hints:
    Permutations
    RegExp
*/

function buildPermutations(str) {
  var input = str.split('');
  var permutationArray = [];
  var usedChars = [];
  
  return function permute() {
    
    var i, ch;
    for (i = 0; i < input.length; i++) {
      ch = input.splice(i, 1)[0];
      usedChars.push(ch);
      if (input.length === 0) {
        permutationArray.push(usedChars.slice().join(''));
      }
      permute(input);
      input.splice(i, 0, ch);
      usedChars.pop();
    }
    return permutationArray;
  };
}

function noRepeats(val){
  for (var i = 0; i < chars.length; i++){
    if (val.indexOf(chars[i]) !== -1){
      return false;          
    }
  }
  return true;
}

function getRepeatStrings(str){
  var arr = [];
  
  for(var i = 0; i < str.length; i++){
    var repeat = str[i] + str[i];
    if (arr.indexOf(repeat) === -1){
      arr.push(repeat);
    }
  }

  return arr;
}


function permAlone(str){
  var permutations = buildPermutations(str)();
  var chars = getRepeatStrings(str);

  // filter out permutations that have repeats
  permutations = permutations.filter(function(val){
    for (var i = 0; i < chars.length; i++){
      if (val.indexOf(chars[i]) !== -1){
        return false;          
      }
    }
    return true;
  });

  return permutations.length;
}

var arr = ['aaa',     //  0
           'aab',     //  2
           'abc',     //  6
           'aabb',    //  8
           'aaabb'];  // 12

for (var i = 0; i < arr.length; i++){
  var ans = permAlone(arr[i]);
  console.log(ans);
}
//Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
//Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".


function mutation(arr) {
  var word = arr[0].toLowerCase();
  var pattern = arr[1].toLowerCase();

  for(var i = 0; i < pattern.length; i++){
    //console.log(pattern[i]+"="+word.indexOf(pattern[i]));
    if (word.indexOf(pattern[i]) === -1){
      return false;
    }
  }

  return true;
}

//var ans = mutation(["hello", "hey"]);
var ans = mutation(["Alien", "line"]);
console.log(ans);
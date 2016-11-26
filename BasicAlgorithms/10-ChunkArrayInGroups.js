//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  var result = [];
  var limit = arr.length / size;

  while(arr.length > 0){
    var fragment = arr.splice(0,size);
    result.push(fragment);
  }
  
  return result;
}

var ans = chunkArrayInGroups(["a", "b", "c", "d"], 2);
console.log(ans);
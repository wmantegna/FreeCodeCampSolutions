/*
  Create a function that takes two or more arrays and 
  returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

  Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), 
  the mathematical term "symmetric difference" of two sets is the set of elements 
  which are in either of the two sets, but not in both (A △ B = C = {1, 4}). 

  For every additional symmetric difference you take (say on a set D = {2, 3}), 
  you should get the set with elements which are in either of the two the sets 
  but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).
*/


function reduceToUniqueValues(array) { 
  var temp = [];
  for(var i = 0; i < array.length; i++){
    var val = array[i];
    if (temp.indexOf(val) === -1){
      temp.push(val);
    }
  }
  
  return temp;
}

function sym() {
  var ans = [];

  for (var i = 0; i < arguments.length; i++){

    var arr = arguments[i];
    var arrUnique = reduceToUniqueValues(arr);
    
    // add values only if they don't exist yet
    for (var j = 0; j < arrUnique.length; j++){
      var val = arrUnique[j];
      var index = ans.indexOf(val);

      if (index === -1){
        ans.push(val);
      } else {
        ans.splice(index, 1);
      }
    }  
  }
  return ans;
}




// returns [3,4,5]
// var arr1 = [1,2,3];
// var arr2 = [5,2,1,4];

// return [1, 4, 5]
// var arr1 = [1, 2, 5];
// var arr2 = [2, 3, 5];
// var arr3 = [3, 4, 5];

// return [1, 4, 5]
var arr1 = [1, 1, 2, 5];
var arr2 = [2, 2, 3, 5];
var arr3 = [3, 4, 5, 5];

// var ans = sym(arr1, arr2);
var ans = sym(arr1, arr2, arr3);
console.log(ans);

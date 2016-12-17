/*
  Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

  Remember, you can access object properties through either dot notation or [] notation.
*/

function truthCheck(collection, pre) {
  // Is everyone being true?
  for (var i = 0; i < collection.length; i++){
    var item = collection[i];
    
    if (item.hasOwnProperty(pre)){
      if (!item[pre]){
        return false;
      }
    } else {
      return false;
    }
  }
  
  return true;
}

// returns true
var objects =  [
  {"user": "Tinky-Winky", "sex": "male"}, 
  {"user": "Dipsy", "sex": "male"}, 
  {"user": "Laa-Laa", "sex": "female"}, 
  {"user": "Po", "sex": "female"}];
var attribute = "sex";

// returns false
// var objects = [
//   {"user": "Tinky-Winky", "sex": "male", "age": 0}, 
//   {"user": "Dipsy", "sex": "male", "age": 3}, 
//   {"user": "Laa-Laa", "sex": "female", "age": 5}, 
//   {"user": "Po", "sex": "female", "age": 4}];
// var attribute = "age";

// returns false
// var objects = [
//   {"user": "Tinky-Winky", "sex": "male", "age": 0}, 
//   {"user": "Dipsy", "sex": "male", "age": 3}, 
//   {"user": "Laa-Laa", "sex": "female", "age": 5}, 
//   {"user": "Po", "sex": "female", "age": 4}];
// var attribute = "age";

// returns false
// var objects = [
//   {"name": "Pete", "onBoat": true}, 
//   {"name": "Repeat", "onBoat": true}, 
//   {"name": "FastFoward", "onBoat": null}];
// var attribute = "onBoat";


var ans = truthCheck(objects, attribute);
console.log(ans);
/*
  Make a function that looks through an array of objects (first argument) and 
  returns an array of all objects that have matching property and value pairs (second argument). 
  
  Each property and value pair of the source object has to be present in the object from 
  the collection if it is to be included in the returned array.

  hints:
    Global Object
    Object.prototype.hasOwnProperty()
    Object.keys()
 */

function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  
  var sourceKeys = Object.keys(source);
  for (var i = 0; i < collection.length; i++){
    
    var matchesSource = true;
    for(var j = 0; j < sourceKeys.length; j++){

      if (collection[i][sourceKeys[j]] !== source[sourceKeys[j]]) {
        matchesSource = false;
        break;
      }
    }

    if (matchesSource){
      arr.push(collection[i]);
    }
  }
  
  // Only change code above this line
  return arr;
}

var ans = whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
console.log(ans);

/*
  var obj = new Object({"id":1});
  console.log(obj);
  console.log(Object.keys(obj));
  console.log('prototype=' + Object.getPrototypeOf(obj));
  console.log("obj.hasOwnProperty('id')="+obj.hasOwnProperty('id'));
*/  
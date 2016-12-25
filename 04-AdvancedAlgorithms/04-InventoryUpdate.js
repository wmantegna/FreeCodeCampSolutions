/*
  Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. 
  Update the current existing inventory item quantities (in arr1). 
  If an item cannot be found, add the new item and quantity into the inventory array. 
  The returned inventory array should be in alphabetical order by item.

  Hints: Global Array Object
*/

function arrToObj(arr){
  var obj = {};

  // translate to object
  for(var i = 0; i < arr.length; i++){
    var item = arr[i];
    var key = item[1];
    var val = item[0];
    obj[key] = val;
  }
  
  return obj;
}

function mergeValuesIntoObj(obj, arr){

  for(var i = 0; i < arr.length; i++){
    var item = arr[i];
    var key = item[1];
    var val = item[0];

    if (obj.hasOwnProperty(key)){
      obj[key] += val;
    } else {
      obj[key] = val;
    }
  }

  return obj;
}

function parseToSortedArray(obj) {

  var orderedKeys = Object.keys(obj).sort();
  var arr = [];
  
  for (var i = 0; i < orderedKeys.length; i++){

    var key = orderedKeys[i];
    var val = obj[key];

    arr.push([val, key]);
  }
  
  return arr;
}

function updateInventory(arr1, arr2) {
  var obj1 = arrToObj(arr1);
  obj1 = mergeValuesIntoObj(obj1, arr2);

  var arr = parseToSortedArray(obj1);
  return arr;
}

// Example inventory lists
// var curInv = [
//     [21, "Bowling Ball"],
//     [2, "Dirty Sock"],
//     [1, "Hair Pin"],
//     [5, "Microphone"]
// ];

// var newInv = [
//     [2, "Hair Pin"],
//     [3, "Half-Eaten Apple"],
//     [67, "Bowling Ball"],
//     [7, "Toothpaste"]
// ];

/*
  [[88, "Bowling Ball"], 
  [2, "Dirty Sock"], 
  [3, "Hair Pin"], 
  [3, "Half-Eaten Apple"], 
  [5, "Microphone"], 
  [7, "Toothpaste"]]
*/
var curInv = [[21, "Bowling Ball"], 
              [2, "Dirty Sock"], 
              [1, "Hair Pin"], 
              [5, "Microphone"]];
var newInv = [[2, "Hair Pin"], 
              [3, "Half-Eaten Apple"], 
              [67, "Bowling Ball"], 
              [7, "Toothpaste"]];

var ans = updateInventory(curInv, newInv);
console.log(ans);

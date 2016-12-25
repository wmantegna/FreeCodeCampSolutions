/*
  Return a new array that transforms the element's average altitude into their orbital periods.

  The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

  You can read about orbital periods on wikipedia.

  The values should be rounded to the nearest whole number. The body being orbited is Earth.

  The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

  hints:
    https://en.wikipedia.org/wiki/Orbital_period
    Math.pow()
*/


function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  
  var alt = 'avgAlt';
  var a = 2 * Math.PI;
  var newArr = [];
  
  var getOrbitalPeriod = function(item) {
    var numToRoot = Math.pow(earthRadius + item[alt], 3);
    var orbitalPeriod = a * Math.sqrt(numToRoot / GM);
    
    orbitalPeriod = Math.round(orbitalPeriod);
    
    delete item[alt];
    item.orbitalPeriod = orbitalPeriod;
    return item;
  };

  for (var item in arr) {
    newArr.push(getOrbitalPeriod(arr[item]));
  }

  return newArr;
}


var arr = [{name : "sputnik", avgAlt : 35873.5553}]; // [{name: "sputnik", orbitalPeriod: 86400}]

var ans = orbitalPeriod(arr);
console.log(ans);
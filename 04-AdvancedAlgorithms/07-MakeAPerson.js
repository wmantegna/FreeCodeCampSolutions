/*
  Fill in the object constructor with the following methods below:

    getFirstName()
    getLastName()
    getFullName()
    setFirstName(first)
    setLastName(last)
    setFullName(firstAndLast)

  Run the tests to see the expected output for each method.
  The methods that take an argument must accept only one argument and it has to be a string.
  These methods must be the only available means of interacting with the object.
  
  Hints:
    Closures
    Details of the Object Model
*/


var Person = function(firstAndLast) {
  var firstName;
  var lastName;

  this.getFirstName = function() {
    return firstName;
  };

  this.getLastName = function() {
    return lastName;
  };

  this.getFullName = function() {
    return firstName + ' ' + lastName;
  };

  this.setFirstName = function(name) {
    firstName = name;
  };

  this.setLastName = function(name) {
    lastName = name;
  };

  this.setFullName = function(name) {
    var arr = name.split(' ');
    firstName = arr[0];
    lastName = arr[1];
  };
  
  this.setFullName(firstAndLast);
};


var bob = new Person('Bob Ross');

// bob.setFirstName("Haskell");
// bob.setLastName("Curry");
// bob.setFullName("Haskell Curry");

console.log(bob instanceof Person);    // true
console.log(Object.keys(bob).length);  // 6
console.log(bob.getFirstName());       // Haskel
console.log(bob.getLastName());        // Curry
console.log(bob.getFullName());        // Haskell Curry


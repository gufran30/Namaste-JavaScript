// Function Statement also known as Function Declaration
function a() {
  console.log("a called");
}

// ===========================================================

// Function Expression
var b = function () {
  console.log("b called");
};

// ===========================================================

// Anonymous Function
// function () {

// }

// ===========================================================

// Named Function Expression
var b = function xyz() {
  console.log("b called");
};

xyz();

// ===========================================================

// Difference between Parameters & Arguments ?
function abc(param1, param2) {
  // accepting parameters
  console.log("a called");
}

abc(1, 2); // passing arguments

// ===========================================================

// First Class Functions - Ability to be used like values
// First Class Citizens = First Class Functions 
//  Both are the same thing.

// ===========================================================

// Arrow Function

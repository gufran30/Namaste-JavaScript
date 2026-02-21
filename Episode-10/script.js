// function x() {
//   var a = 7;  // a is a local variable created by function x
//   function y() {
//     // y() is the inner function, that forms a closure
//     console.log(a); // use variable declared in the parent function
//   }
//   y();
// }

// x();

// =============================================================

// // assigning function directly to the variable
// function x() {
//   var a = function y() {
//     console.log(a);
//   };

//   a();
// }

// x();

// =============================================================

// // passing function as an argument
// function x() {
//   var a = 7;

//   y();
// }

// x(function y() {
//   console.log(a);
// });

// =============================================================

// // We can return function
// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }

//   return y;
// }
// var z = x();
// console.log(z);
// z();

// =============================================================

// =============================================================

function z() {
  var b = 900;
  function x() {
    var a = 7;
    function y() {
      console.log(a, b);
    }
    y();
  }
  x();
}
z();

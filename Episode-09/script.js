// if (true)
// if (true) true;

// ===================================================

// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);

// ===================================================

// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   console.log(a); // this will print value of a i.e 10
//   console.log(b); // this will print value of b i.e 20
//   console.log(c); // this will print value of c i.e 30
// }
// console.log(a); // this will print value of a i.e 10 (because var is part of Global scope)
// console.log(b); // this will throw error -> ReferenceError i.e b is not defined
// console.log(c);

// ===================================================

// var a = 10;
// {
//   var a = 50; // <--- this will shadow the above var a = 10 into a = 50.

//   console.log(a); // now this will print 50
// }
// console.log(a); // now this will print 50 because shadowed in above block

// ===================================================

// let b = 100;

// {
//   let b = 20;
//   console.log(b);
// }
// console.log(b);

// ===================================================

let a = 20;
{
  var a = 20;
}
/*
function outer() {
  var a = 10;
  // This "inner" function has access to its outer environment.
  // So this "inner" function has access to variable "a".
  // So this "inner" function along with its outer lexical environment forms a closure
  function inner() {
    console.log(a);
  }
  return inner;
}

outer()(); // even it is execued outside meaning not in the lexical scope of "inner" function it still remembers the value of variable "a".


*/
/*
 
outer()(); --> this extra () is shorthand calling the returned (i.e. "inner" function) in the same line

we can also do like this if we want

var close = outer();
close()

*/

// ========================================================================

// This code is same as above, this also forms a "closure".
// it doesn't matter whether the variable a declared at top or bottom, it just have to be in the lexical environment of "inner" function
/*

function outer() {
  function inner() {
    console.log(a);
  }

  var a = 10;
  return inner;
}

*/

// ========================================================================

// What if we use "let" instead of "var" ? Will it still forms a "Closure".
/*
function outer() {
  function inner() {
    console.log(a); // 10
  }

  let a = 10;
  return inner;
}
*/

// The answer is = YES
// "let" variable has a "blocked scope". So here we cannot access variable "a" outside but still it forms a "Closure" for "inner" function.

// ========================================================================

/*
function outer(b) {
  function inner() {
    console.log(a, b);  // 10 'hello world'
  }

  let a = 10;
  return inner;
}

var close = outer("hello world");
close();
*/

// ========================================================================

// This will also forms a "Closure", if we nested in another function.
/*
function outest() {
  var c = 20;
  function outer(b) {
    function inner() {
      console.log(a, b, c); // 10 'hello world' 20
    }

    let a = 10;
    return inner;
  }
  return outer;
}

var close = outest()("hello world");
close();
*/

// ========================================================================

/*
function outest() {
  var c = 20;
  function outer(b) {
    function inner() {
      console.log(a, b, c); // 10 'hello world' 20
    }

    let a = 10;
    return inner;
  }
  return outer;
}

let a = 100;
// here we are declaring variable "a" in global space.
// here we are using the same variable name as in "inner" function. Will it conflict with the results => NO, "a", in "inner" function reference to "line 108" variable, it searches in near place first, and if it is not find there then it goes deep down in the hierarchy for searching variable "a". And if we comment out the "line 108" we will see value of "a" in console will be "100", meaning it fetches the value of a from global scope.
var close = outest()("hello world");
close();
*/

// ========================================================================

/*
Advantages of Closures :
- Closures uses in :
    - Module Design Pattern
    - Currying
    - Functions like once
    - memoize
    - maintaining state in async world
    - setTimeouts
    - Iterators
    - and many more...

- One more important advantages of Closure is it helps in data hiding & encapsulation
*/

// ========================================================================

/*
Data hiding & Encapsulation ?
- When we want a variable to make it private means other functions can not get direct access to it.
*/

// Suppose we have this code :
/*
var count = 0; // this is declared globally, anyone can access it directly

function incrementCounter() {
  count++;
  console.log(counter);
}
*/

//  in order to make "count" enacapsulate or hide it, we can do this
/*
function counter() {
  var count = 0; // we can't access this variable directly from outside this funciton, this is what abstraction (or data hiding or encapsulation) is.
  function incrementCounter() {
    count++;
    console.log(count);
  }
}

console.log(count); // Uncaught ReferenceError: count is not defined
*/

//  in order to access that count variable we can return the "incrementCounter" function like this :

/*
function counter() {
  var count = 0;
  // returning the incrementCounter in order to access "count" from outside (not directly)
  return function incrementCounter() {
    count++;
    console.log(count);
  };
}

var counter1 = counter();
counter1(); // it will print 1, here we are accessing the count variable via "counter" function, and we are not accesing "count" variable directly. This is the good way to access it

counter1(); // it will print 2

var counter2 = counter(); // this is fresh counter in itself, it won't touch above counter
counter2(); // it will print 1
counter2(); // it will print 2
counter2(); // it will print 3
*/

// Is this above code is scalable if we have decrementCounter also ?? => NO, in order to make it scalabale we can use constructor or classes concepts.

// like, here we are using constructor concept :

function Counter() {
  var count = 0;

  // this incrementCounter forms a "closure" with "count" variable
  this.incrementCounter = function () {
    count++;
    console.log(count);
  };

  // this decrementCounter forms a "closure" with "count" variable
  this.decrementCounter = function () {
    count--;
    console.log(count);
  };
}

var counter1 = new Counter(); // when we use contructor we use "new" keyword
counter1.incrementCounter(); // 1
counter1.incrementCounter(); // 2
counter1.incrementCounter(); // 3

counter1.decrementCounter(); // 2
counter1.decrementCounter(); // 1
counter1.decrementCounter(); // 0

// ========================================================================

/*
Disadvantages of Closures :
=====================================
- Memory Consumption & Leaks: 
    - Closures keep outer-scope variables in memory even after the outer function has finished executing. If not managed properly, this can lead to memory leaks, where unused, large objects are never freed, potentially crashing applications.

- Performance Issues: 
    - Because variables are retained in memory, excessive use of closures can lead to higher memory usage, slowing down the application.

- Debugging Difficulty: 
    - Tracing variable scopes and understanding which variables are captured by which closures can become difficult in complex applications, making debugging harder.

- Scope Complications: 
    - Closures can lead to confusion regarding variable scopes, particularly when dealing with nested functions or loops.

How to Mitigate Disadvantages:
=====================================
Avoid Overuse: 
  - Do not create closures within tight loops or unnecessarily.

Nullify Variables: 
  - Explicitly set large variables to null if they are no longer needed, allowing the garbage collector to free up memory.

Be Mindful of Scope: 
  - Keep track of the scope chain to avoid unintentional variable retention.
*/

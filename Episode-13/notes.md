### Episode 13

# FIRST CLASS FUNCTIONS 🔥ft. Anonymous Functions

#### What is an Anonymous Function ?

- A function without a name is known as Anonymous function.
- mainly used for specific or short-term tasks,
- and is often assigned to variables or passed as arguments where reusaboloty of that function is not required.

#### We are going to see :

- What are First Class Functions ?

- Function `Statement` vs Function `Expression` vs Function `Declaration` ?

##### Functions = is the heart of JavaScript. It works very beautifully in JS.

### Function Statement

```js
function a() {
  console.log("a called");
}
```

This above code is **Function Statement**.

### Function Expression

```js
var b = function () {
  console.log("b called");
};
```

This above code is **Function Expression**.

- function act like a value here in above code
- putting function in variable
- you can't do this in other languages, but in JS it is a valid code.

### Difference b/w Function Statement & Function Expression

The major difference b/w these two is **HOISTING**.

consider this code :

```js
a();
b();

// Function Statement
function a() {
  console.log("a called");
}

// Function Expression
var b = function () {
  console.log("b called");
};
```

if you run this code you will see this :

```
a called
Uncaught TypeError: b is not a function
```

Why `b()` throwing `TypeError: b is not a function` ?

- During the memory creation phase `a` is created a memory and `function a` is assigned to `a` but in case of a **Function Expression** variable `b` is treated like any other variable, it is asigned `undefined` initially untill the code hits the line in which `var b = function() {...}` is declared.

- So when the JS Engine executes this line by line and reaches this line then only this function is assigned to variable `b` untill then it is `undefined`

### Function Declaration

Function declaration is nothing, this in another jargon.
**Function Statement is also known as Function declaration**.

- Function Declaration = Function Statement
- they both are the same thing.

### Anonymous Function

Anonymous Function = Function without name.

- It does not have their own identity
- means if you create an anonymous function like this :

```js
function () {

}
```

- this will result out to be a **syntax error**.
- Anonymous function is exactly look like **Function Statement** but it has **no name**
- But according to ECMAScript specification a function statement should have a name, so this is a invalid syntax.
- if you run this above code, you will see :

  ```
  Uncaught SyntaxError: Function statements require a function name
  ```

So if we can't create like this then what is the use of Anonymous function ?

- So anonymous functions are used in a place where functions are used as values.
  - Functions are used as values means you can assign it to some variable.

- Functions are like very beautiful in JavaScript. Akshay love function, he says, functions are like heart of JavaScript.

### Named Function Expression

When we assigned a named to a function Expression it becomes a Function Expression

```js
var b = function xyz() {
  console.log("b called");
};
```

This above code looks very weird, but it a pervfectly valid code. You can assign name to the function which are already assign to a variable.

```js
var b = function xyz() {
  console.log("b called");
};

xyz();
```

But here is corner case :
if we call xyz() function, what will happen ?

```
Uncaught ReferenceError: xyz is not defined
```

We get the above **error** in console.

But we can access that function like this :

```js
var b = function xyz() {
  console.log(xyz);
};

b();
```

Output will be :

```
ƒ xyz() {
  console.log(xyz);
}
```

### Difference between Parameters & Arguments ?

Many programmers use Parameters & Arguments interchangeably terms but no, they are very different.

```js
1.  function a(param1, param2) {
2.    console.log("a called");
3.  }
4.
5.  a(1, 2);
```

In above code, in `line 1` (i.e `function a`), we have two parameters named as `param1` and `param2` this are called **Parameters**, and this a **local variable** in the `function a` scope, means you cannot access these `param1` & `param2` outside the `function a`.

In `line 5` we are calling `function a`, in which we are passing **Arguments** i.e `a(1, 2);` 1 & 2 are the argument for `function a`

### First Class Functions

The ability to use a function as a value and pass it as an argument to another functions and can be returned from the functions.

In short, the ability to use functions as values is known as **First Class Functions**.

**So an Interviewer asked a question What is First Class Function.**

- Explain like this, **When Function treated as a value, pass into another functions or returned from another functions so this is known as a first class function**.

### What are First Class Citizens ?

Firs Class Citizens = First Class Functions.

- Both are the same thing. In some Blogs or Book both terms are used interchangeably.

### Arrow Function

Arrow Function was introduced in ES6 (ECMAScript 2015).

We will cover this in detail in later episodes, don't worry.

**Side note** :

- `let` & `const` introduced in ES6, before it we only have `var` to declare variables.

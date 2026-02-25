### Episode 06

# undefined vs not defined in JS 🤔

**undefined** is a very special keyword in JavaScript & it is not in other programming language. It has a lot to do with how JS code is executed.

We have studied in the previous episodes also that JS code is executed in a different way.

It creates a **Global Execution Context** and allocates memory to all the **variables** & **functions** even if before a single line of code is executed. So **undefined** comes in a picture here only

Suppose we have this code

```js
var a = 7;
```

Even before this line is get executed, JS is trying to allocate memory to this variable `a` in Memory space even before this line of code is run. You can see this with the help of debugger in your browser.

#### Why JS engine use undefined ??

- JS engine use undefined as a placeholder.

Remember whenever you run a JS program, JS engine create two component/phase, one is Memory Creation Phase & other one is Code execution phase.

In Memory creation phase i.e before Code execution phase, JS engine assign values to **variables** & **functions**, for variables it assign **undefined** as a placeholder, and for the functions it literally assign the whole code of that funtion.

#### What is not defined ?

- not defined means something which has not been allocated.

  see this code

```js
1.  console.log(a);
2.  var a = 10;
3.  console.log(x)
```

**output**

```
undefined
Uncaught ReferenceError: x is not defined
```

- in above code, `line 1` we are accessing `a` before initialising it so it will print **undefined**.

- but when we try to print `x` in `line 3` we got `Uncaught ReferenceError: x is not defined` this error which is saying **not defined** because variable `x` is not created anywhere in the whole program.

- so this is the difference between **undefined** & **not defined**

### Note:

- Some people think undefined means empty because it is not taking up any memory space or something. But this is wrong, undefined is a special keyword.

- It takes up its own memory. But you can assume it to be like a placeholder which is kept for the time being untill the variable is assigned some other variable. Till that time it will store this placeholder

### Now see this code

```js
var a;
console.log(a);
```

- this will also print **undefined** because we created variable a but not assigned value to it.

### Let's talk little about JS & variables in it

> JavaScript is a Loosely Typed Langauge.

- **Loosely typed** means it does not attaches its variables to any specific data type.

- So suppose if I created variable `a` and put in string in it, so later on in the program I can also put numbers in it, I can also put boolean in it. JavaScript is very flexible in this case.

- you can code like this in JS because its Loosely typed nature

  ```js
  var a = 10;
  console.log(a); // 10

  a = "hello";
  console.log(a); // hello
  ```

- this above code is perfectly valid JS code.

- Unlike other languages like Java, C, C++, etc in which varaibles are **Strongly Typed** means you have to specify the type of data you are going to put in that variable

- like if you want to store integer you have to specify its data type & you can't change its value integer to any other data type.

- JS is **Loosely Typed** Language also known as "Weakly Typed" Language.

- One thing which you should not do it, or we can se a bad thing to do in JS is assigning **undefined** to variable. like this
  ```js
  var a = undefined;
  ```

  - it is valid but bad thing to do, you should avoid it.
  - **undefined** is a special keyword in JS, it is a placeholder which automatically assigned to variable when you create variable but not assigned any value to it.

### Episode 05

# Shortes JS Program 🔥 window & this keyword

#### Q: Do you know the what's the shortest JavaScript program ?

Ans: The Empty File

```js

```

- Even this file is empty, there is nothing to execute, still **JavaScript engine** doing alot of things behind the scene

#### When you run the the shortest js program that is the empty file

The JavaScript engine still creates the Global Execuion Context and also sets up the Memory space. Though there is nothing to setup but still JS engine does it job.

Try to run a empty JS file

- open your browser console
- type **window** & press enter
- you will got something like this in your console

  ```js
  Window {window: Window, self: Window, document: document, name: '', location: Location, …}
  ```

  - click on this object

- this is like a big object with a lot of **functions** & **variables**

- You can access all these vaiables & functions anywhere in your JS program

- These functionalities is given by **JS Engine**

- Just like this window object, JS engine also creates **this** keyword
  - Type **this** in your browser console & press enter
  - you will get something
  - and at the Global level this **this** keyword points to the **window** object

### What is window ?

- Window is a global object which is created along with the Global Execution Context.

- So whenever any JS program runs a global object is created, a global execution context is created and along with that Execution Context a **this** keyword is created.

- we will learn about **this** keyword in separate video.

### let's talk about this global object that is created

This global object in case of browser, it is known as **window**.

JavaScript not just runs on browser , it also runs on server & a lot of other devices & places.

And where JS is running there must be a **JS Engine**. Just like in Chrome it is **V8 Engine**. Also browsers like Mozilla firefox, Safari, etc has its own enigne.

So all these JS Engines has a responsiblity to create this global object.

- In case of browsers, it is known as **window**.
- In case of node it is known as something else, and wherever you run the JS program it is different. But there is always a Global Object created.

And even though our file is empty, JS engine will create this global object.

At the Base level (Global level) in the Global Execution Context **this === window**

> Type **this === window** in browser console & press enter

```js
this === window;
```

you will get `true` as output

### In summary:

Whenever you run any JS program even if it is empty or not the Global Execution Context is created and along with **this** is created even for the funtional execution context.

And at global level **this** points to global object that is the is **window** in case of browser.

### What is Global space ?

Global space is nothing but any code you write inside JS which is not inside a function

```js
var a = 10;
function b() {}
```

- above variable **a** and function **b** is in global space
- but when we will create variable or function inside this **b** function.

  ```js
  var a = 10;
  function b() {
    var x = 100;
    function doSomething() {}
  }
  ```

  - here variable **a**, function **b** is in global space
  - but variable **x**, function **doSomething** is in local space not in global space

- in short, anything which is not in a function is the global space

### Now do this

- Now try to run the following code

  ```js
  var a = 10;
  function b() {
    var x = 100;
    function doSomething() {}
  }
  ```

- type `window` & press enter in your console
- you will see an object, expand it you will find variable **a** and functon **b** but not variable **x** & function **doSomething** in it.
- To access variable **a** :
  - you can do this `console.log(window.a)`
  - also you can do this `console.log(a)`
    - here we log variable **a** directly because it is in global space

- If you write `console.log(x)`
  - you will get `Uncaught ReferenceError: x is not defined`
    - because it is not in the global space

- As we know at global level **this** === **window**
  - if you type `console.log(this.a)`
    - it will print the same thing as `console.log(window.a)`
    - it again logs 10

- here we can say `window.a` or `this.a` is the same thing, all are reffering to the same thing in memory space

### Episode 14

# Callback Functions in JS ft. Event Listeners 🔥

### What is Callback Function in JavaScript?

- remember, functions are `first class citizen` in JS.
- That means, you can take a function and pass it into another function.
- And this function which you passed into another function is known as a `Callback`
- This Callbacks are very powerful in JS, it gives us access to whole `asynchronous` world in a `synchronous single threaded language`
- Due to Callbacks we can do async things inside JS.

- **Callback:** A callback function is a function passed as an argument to another function, which is then invoked inside that outer function at a certain point in time.

```js
1.  function x(y) {
2.
3.  }
4.
5.  x(function y() {
6.
7.  })
```

- in `line 5` we are passing function `y` as an argument, in function `x`
- now upto function `x` when to call function `y`. That is like this function `y` is called by function `x` some time later in your code, that is why it is known as `Callback function` .

#### Now let see how Callback is used in asynchronous tasks:

see this code :

```js
setTimeout(function () {
  console.log("timer");
}, 5000);
```

- the function defined inside setTimout is a `Callback` function. which is the first argument and the second argument is a **Timer** of 5000ms (i.e. 5 sec).

now see this code :

```js
1.  setTimeout(function () {
2.    console.log("timer");
3.  }, 5000); // run the callback function after 5sec.
4.
5.  function x(y) {
6.    console.log("x");
7.    y(); // calling the callback function
8.  }
9.
10. x(function y() {
11.   console.log("y");
12. });
```

- First thing here, when JS run this code from `line 1` setTimeout() - So JS store it in a separate space and attach a timer of 5sec.

- setTimeout will run after 5 seconds so JS not wait for this to finished (or done executing) as we know `JS is sycnhronous single-threaded language`.

- this is why Akshay say, Callback functions gives us the power of asynchronity, it does not wait over here for 5 sec to expire.

- And whatever needs to be done after 5 sec, we are passing that feature or those line of code as a Callback function to setTimeout.

- So JS not wait for setTimeout to finish and moves to next line it it will reach `line 10`, here we are calling function `x` in which passing a function `y` as an argument.

- So now, function x will start executing and it first it will run the `console.log("x")` which will print `x` in console and calling the function which came in as a parameter from `line 10` and run that function, in which we have `console.log("y");` this will print `y` in console.

- While the time being these things happening `setTimeout` is not expired because we have timer of `5sec`, after 5 sec JS run the function which is present inside the setTimeout as a Callback and print `timer` in the console.

- So output will be :

```
x
y
timer
```

- `timer` will be printed after 5 second

So JS has just one `Call Stack`. So if you run any of these (above code) functions `x`, `y`, or the `callback` inside setTimeout, everything will be executed through `Call Stack`

- So any operation block this `Call Stack`, that is **Blocking the main thread**.
- So suppose we have a function `x` has a very heavy operation which takes around 20-30 seconds to executing so by that time because JS has just one Call Stack (it has one main thread) it won't be able to execute any other function in the code. That means everything will be blocked on the code. That is why we say that _"we should never block main thread"_.

- We should always use async operation for things which takes time just like we did in setTimeout() here in above code.

In summary,

- if JS did not had this `first class` function or `Callback` function and we could not have pass this function into another functions - we could not have been able to do `async` operation.

- so using this web api (setTimeout) and the Callback function we can achieve this `async` operations.

Now, see this :

- Add a button in html and give id `clickMe`

  ```html
  <button id="clickMe">Click Me</button>
  ```

- in script do this:

  ```js
  document.getElementById("clickMe").addEventListener("click", function xyz() {
    console.log("Button Clicked!");
  });
  ```

- now if you put a debugger in browser on `console.log("Button Clicked!");` and clicked on `Click Me` button you will see the `xyz()` function in the `Call Stack`


### Garbage Collection & removeEventListeners
This thing asks a lot in interviews

Interviewer can ask **Why we need to remove event listeners ?**

- Event listeners are heavy, means it takes memory.
- So whenever we attach event listeners it kind of forms a `Closures`. see just like we did here :

```js
function attachedEventListeners() {
  let count = 0;

  // it formed a closure with count
  document.getElementById("clickMe").addEventListener("click", function xyz() {
    console.log("Button Clicked!", ++count);
  });
}
attachedEventListeners();
```
- And even when the Call Stack is empty, we are not executing any of the code, but still this program is not freeing up this memory it cannot just free up this `count`. Because we never know when somebody on the page can click on this `button` and we need this Closure to count.

- So in this case we cannot free up this extra memory. That is why event listeners are heavy. 

- So that is the main reason why we move event listeners when we are not using them.

- And suppose our page has thousands of event liteners attached (onClick, onHover, onScroll, etc), then our page go a lot of slow because these so many Closures like sitting in our memory consuming a lot of memory of all their scopes and all these callback function will hold on those scopes.

- A good practice is generally to free up. So when you remove this(above code - `attachedEventListeners`) event listener then all these variables which was held by this Closure will be **garbage collected**.


#### So let's see what we covered till now :
- How the Call Stack works
- The scope
- Closures
- First Class Function
- Event Listeners
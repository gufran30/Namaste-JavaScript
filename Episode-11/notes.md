### Episode 11

# setTimeout + Closures Interview Question 🔥

#### now we are going to cover very important interview questions related to Closures which is asked a lot in interviews.

consider this code :

```js
function x() {
  var i = 1;
  setTimeout(function () {
    console.log(i);
  }, 3000);
  console.log("Namaste JavaScript");
}

x();
```

when you run this code, what do you think will happen in output ?

- When we call/invoke `function x`, function x start executing, as we know JS is single threaded it runs line by line (sequentially), So we expect here, `1` will print first after `3 seconds` (i.e 3000ms), and then `Namaste JavaScript`

- But if we see in out put, we will see `Namaste JavaScript` print first and then after `3 seconds` print `1`.

**Output**:

```
Namaste JavaScript
1
```

- the `function` inside `setTimeout` forms a `Closure`, meaning this function remembers the reference to variable `i`. So wherever this function goes, it takes the refernece of variable `i` along with it.

- #### What this setTimeout() do is :
  - It takes this `callback function` (the function inside the setTimeout in above code), and stores it somewhere and attach a timer (here in our code we set time `3000` means 3000ms = 3 sec)

  - and the JS proceed it does not wait for anything it goes to the next line and print `Namaste JavaScript`. And when the timer expires or done, it takes the callback function put it agin in the `Call Stack` and runs it.

  - That's how setTimeout works.

#### Now we going to tackle a problem, which confused many developers;

- now suppose we want to print in console `1` then `2` then `3` , then `4` then `5` after each and every `second` interval.
  - `1` after `1 second`
  - `2` after `2 second`
  - `3` after `3 second`
  - `4` after `4 second`
  - `5` after `5 second`

- How would you do this problem ??

- Most cool developers will do this :

  ```js
  function x() {
    for (var i = 1; i <= 5; i++) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }
    console.log("Namaste JavaScript");
  }

  x();
  ```

  - when you run this code & see in console for output, you will see first `Namaste JavaScirpt` print, then after 1 second duration `6` will print for `5 times`

    ```
    Namaste JavaScript
    6
    6
    6
    6
    6
    ```

  - After seeing this output, many developers want to scratch their screen, they confused why this is behaving in this way.

### Lets see why this is behaving this way

- This is behaving in this way because of the **Closures**
- Remember what is **Closure**
  - Closure is like a function along with its lexical environment.
- So even when function is taken out from its original scope, if it is executed in some others scope, still it remembers its lexical environment, it can access to those variables of its lexical scope.

- So what will happend is, when `setTimeout` takes this `function` and stores it in somewhere and attach a timer to it, So that `function` remembers the reference to that variable `i`.

- Let me make it clear to you, it remembers the reference to variable `i` not the value of variable `i`. We discusse this in previous episode (i.e Closure in JS).

- So when the loop runs the first time, so it kind of makes the copy of this function and attaches a `timer` and also remember the reference of variable `i`. Similarly these **5 copy** of this function all of them pointing to the same reference of variable `i`.

- They are pointing to same reference of variable `i` because the environment for all of these functions are same. And the JS will not wait for anything, it will run the loop again and again, it will not wait for those `timers` to expire. So when those `timer` will expire **it is too late** and the value of variable `i` because the loop was constantly running it was 1,2,3,4,5,6, so the variable `i` value became `6` and when the **callback function** (inside setTimout) runs by that time the value of variable of `i` is `6` on the memory location.

- So that is why, it prints `6` every time in the console. Because all of these copy of all of theses **5 functions** are reffering this `i` is referring to the same spot in memory.

### How we can fix this ??

- A very quick & easy way to fix this is to use `let` instead of `var` like this :

  ```js
  function x() {
    for (let i = 1; i <= 5; i++) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }
    console.log("Namaste JavaScript");
  }

  x();
  ```

- `let` has a block scope.
- So when we say `let` has a block scope that means for each and every loop iteration, whenever every time loop runs this `i` is a new variable all together, it is a new copy of varable `i` all together.
- And each time `setTimeout` is run, this `callback funciton` has a new copy of `i` with it, it's own identity of `i` with it.
- each and every time this `setTImeout` method is called, this function forms a **Closure** with a new variable itself. That means this copy in each iteration is new, so that means if we do `i++` so `i = 2` is a new copy of variable which forms a **closure** with the `setTimout` callback function. **setTimout** will take this function now this function has a new copy of variable `i=2` and save it.

- And similarly when `i++` goes to `i=3` it forms a **closure** with `i=3` which is a fresh variable itself, and so on. Like this it makes 5 copies of this variable `i` and forms a **Closure** with each and every function.

#### Why was it not working with `var` and working with `let` ?

- The only difference is `let` = blocked scope, and it creates a new copy every time this loop (which is blocked scope {}) is executed.

- While var is function-scoped (or globally-scoped if declared outside a function).

### What if interviewer say, you can't use `let` here ?

- now we are confused, what you will do ?
- Now again **Closures** will help you. You can without writing `let` perform the same thing because you already know why this is happening.
- So it is no working with `var` because variable `i` refers to the same memory location,so somehow we need to give a new copy of variable `i` every time to the `setTimeout` and forms a **closure** with it.
- If we want to fix it with using `var`, we can form a **closure** we can add a function inside the loop and let's named it `close` and put the `setTimeout` code inside it, and call the `close` function in the loop with passing variable `i` as an argument, Like this :

  ```js
  function x() {
    for (var i = 1; i <= 5; i++) {
      function close(x) {
        setTimeout(function () {
          console.log(x);
        }, x * 1000);
      }

      close(i);
    }
    console.log("Namaste JavaScript");
  }

  x();
  ```

- Now this will work fine. **Output**:

  ```
  Namaste JavaScript
  1
  2
  3
  4
  5
  ```

- Now using this `close` function we kind of created a new copy of `x` every time this `setTimeout` was called. So every time the `setTimeout` callback function is like stored in a separate memory and attach the `timer`, so it remembers a new copy of `x` , every time this `close` function is called, like it has a new copy of `i` in it.

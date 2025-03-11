# Title: "Understanding Callback Functions in JavaScript"

## Why they matter & how to use them effectively

## What is a Callback Function?

-   A callback function is a function passed as an argument to another function.
-   The receiving function decides when to execute the callback.

## Quick Example

### Code example01.js

```
function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Alice", sayGoodbye);

```

### Why Use Callbacks?

-   ### Key Use Cases:
-   Asynchronous execution (e.g. non-blocking queries, API calls, setTimeout)
-   Event handling (e.g., button clicks)
-   Functional programming

### Code example02.js

```
console.log('Start');

let data;

setTimeout(() => {
    console.log('Data fetched');
    data = { name: 'Bill Yengo' };
}, 2000);

if (data) {
    console.log('Data: ', data);
}

console.log('End');
```

## Callbacks in Event Listeners

📌 Example(example03.js): Handling Button Clicks

```
document.getElementById("btn").addEventListener("click", function () {
    console.log("Button clicked!");
});
```

## Callbacks in Asynchronous JavaScript

### Example:(example04.js) Simulating an API Call

```
function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched from server");
        callback();
    }, 3000);
}

function processData() {
    console.log("Processing data...");
}

fetchData(processData);
```

## Callback Hell (The Problem)

### Issue: Deeply nested callbacks make code hard to read

```
step1(() => {
    step2(() => {
        step3(() => {
            console.log("All steps completed!");
        });
    });
});
```

## Use Promises or Async/Await

### Code example (example06.js)

```
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Data fetched from server");
            resolve();
        }, 3000);
    });
}

fetchData().then(() => {
    console.log("Processing data...");
});

```

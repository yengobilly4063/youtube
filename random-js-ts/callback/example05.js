// Callback Hell (The Problem)
// Deeply nested callbacks make code hard to read
// Use Promises or Async/Await

function step1(callback) {
    console.log('Step 1');
    callback();
}

function step2(callback) {
    console.log('Step 2');
    callback();
}

function step3(callback) {
    console.log('Step 3');
    callback();
}

step1(() => {
    step2(() => {
        step3(() => {
            console.log('All steps completed!');
        });
    });
});

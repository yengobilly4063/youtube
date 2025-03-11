// Quick Example
function greet(name, callback) {
    console.log('Hello, ', name);
    callback(name);
}

function goodBye(name) {
    console.log('Goodbye, ', name);
}

greet('Bill', goodBye);

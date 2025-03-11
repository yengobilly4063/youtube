// Callbacks in Asynchronous JavaScript
//  Simulating an API Call

let data;

function fetchData(callback) {
    setTimeout(() => {
        if (data) {
            callback(data);
        }
    }, 1000);

    setTimeout(() => {
        console.log('Fetching data...');
        data = { name: 'Bill Yengo' };
    }, 500);

    if (!data) {
        console.log('Requesting data...');
    }
}

function processData(data) {
    console.log('Processing data...');
    console.log(data);
}

fetchData(processData);

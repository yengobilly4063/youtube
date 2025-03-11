// Non-Blocking

console.log('Start');

let data = 'Bill';

setTimeout(() => {
    console.log('Data fetched');
    // data = 'Bill';
}, 2000);

if (data) {
    console.log(data);
}

console.log('End');

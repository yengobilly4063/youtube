// Solution brief - Promises
// Cleaner Code with Promises
function fetchData() {
    let data;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data = { name: 'Bill Yengo' };
            data ? resolve(data) : reject('Something went wrong');
        }, 1000);
    });
}

fetchData()
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

// Using callback functions in Events as event handlers
const button = document.getElementById('btn');

button.addEventListener('click', handleButtonClick.bind(null, 'Bill'));

function handleButtonClick(data, event) {
    console.log(event);
    console.log(data);
    console.log('button clicked');
}

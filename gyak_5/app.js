let inputField = document.getElementById('newTask');
let button = document.getElementById('add');
let list = document.getElementById('tasks');

inputField.addEventListener('keydown', (event) =>{
    if (event.key === 'Enter') {
        createElement();
    }
});

button.addEventListener('click', () => {
    createElement();
});

function createElement() {
    let newTask = document.createElement('li');
    newTask.innerText = inputField.value;
    newTask.addEventListener('click', () => {
        newTask.classList.toggle('done');
    });
    list.appendChild(newTask);
    inputField.value = '';
}
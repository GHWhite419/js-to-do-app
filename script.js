const form = document.querySelector('form');
const input = document.querySelector('input');
const list = document.querySelector('ul');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputText = input.value.trim();
    if (inputText !== "") {
        const li = document.createElement('li')
        const toDoText = document.createTextNode(inputText);
        li.innerHTML = '<i class="fa-regular fa-square"></i>'
        li.appendChild(toDoText);
        list.appendChild(li);
        input.value = "";
    }
    else {
        alert ('Please do not ever do that again. Enter a valid input or I will blow up your house.');
        input.value = "";
    }
})
// 3) KENZIE'S STEP: how do we track when the task is done?

list.addEventListener('click', (event) => {
    if (event.target.tagName === 'I') {
        const check = event.target;
        check.classList.toggle('fa-square');
        check.classList.toggle('fa-square-check');
    }
})
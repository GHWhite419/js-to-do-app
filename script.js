// Pseudo code for our To Do App:

const form = document.querySelector('form');
const input = document.querySelector('input');
const list = document.querySelector('ul');
// 2) Attach a submit event listener to the form element
// pass in 2 arguments to the event listener method:
// a) the event you are listening for
// b) the callback function which will hold the logic we wish run ONCE the event "is heard" (AKA occurs on the page)
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputText = input.value;
    // IF the user submits a todo (check whether the value of the input is NOT empty) then:
    // create a li element
    // add a FA icon to the li
    // add the text from the todo that the user entered to the li
    // Strech Goal - Error handle for multiple spaces
    if (inputText !== "") {
        const li = document.createElement('li')
        console.log(li)
        li.innerHTML = '<i class="fa-regular fa-square"></i>'
        const toDoText = document.createTextNode(inputText);
        li.appendChild(toDoText);
        list.appendChild(li);
        input.value = "";
    }
    // append the li element to the ul element
    // ELSE alert the user to please submit a valid to do
    else {
        console.log ('Please do not ever do that again. Enter a valid input or I will blow up your house.')
    }
})
// 3) KENZIE'S STEP: how do we track when the task is done?
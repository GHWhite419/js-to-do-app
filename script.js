// Pseudo code for our To Do App:

// 1) Save the values / DOM elements we will need to interact with
    
    // let's query the DOM for the form element and save it within a variable

    // let's query the DOM for the input element and save it within a variable


// 2) Attach a submit event listener to the form element
    // pass in 2 arguments to the event listener method:
        // a) the event you are listening for
        // b) the callback function which will hold the logic we wish run ONCE the event "is heard" (AKA occurs on the page)

    // save the text value from the input within a variable
    
    // IF the user submits a todo (check whether the value of the input is NOT empty) then:
        // create a li element
            // add a FA icon to the li
            // add the text from the todo that the user entered to the li

        // append the li element to the ul element
    // ELSE alert the user to please submit a valid to do


// 3) KENZIE'S STEP: how do we track when the task is done?

const input = document.querySelector('input');
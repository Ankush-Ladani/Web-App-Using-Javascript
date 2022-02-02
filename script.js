// For Output We use alert Function

// alert("Alert Function is Working!");

// For Input We use prompt Function

// let userName = prompt("What's Your Name? ");
// alert("Welcome " + userName);

// Selecting Button Using querySelector
let button = document.querySelector(".btn");

// Checking Button Is Selected Or Not?
// console.log(button);

// Selecting Textarea
let textInput = document.querySelector("textarea");

// Checking That It's Selecting Right Element Or Not?
// console.log(textInput);



// Added EventListener to Button
button.addEventListener('click', () => {
    let output = "";
    output += textInput.value;
    console.log(output);
});



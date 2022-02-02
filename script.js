// For Output We use alert Function

// alert("Alert Function is Working!");

// For Input We use prompt Function

// let userName = prompt("What's Your Name? ");
// alert("Welcome " + userName);

// Selecting Button Using querySelector
let button = document.querySelector(".btn");

// Checking Button Is Selected Or Not?
// console.log(button);

// Added EventListener to Button
button.addEventListener('click', () => {
    console.log("Clicked");
});
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

// Selecting Div
let Output = document.querySelector("#output");

// For Checking
// console.log(Output);


// Added EventListener to Button
// button.addEventListener('click', () => {
//     let output = "";
//     output += textInput.value;
//     // console.log(output);
//     Output.innerHTML = output;
// });


let serverURL = "https://api.funtranslations.com/translate/minion.json"



function getTranslatedURL(text){
    return serverURL + '?' + "text=" + text;
}

function errorHandler(error){
    console.log("Error Occured",error);
    alert("Try After SomeTime");
}

function clickHandler(){
    var inputText = textInput.value;
    fetch(getTranslatedURL(inputText))
        .then(response => response.json())
        .then(json => {
            Output.innerText = json.contents.translated
        })
        .catch(errorHandler)
}


button.addEventListener('click',clickHandler);



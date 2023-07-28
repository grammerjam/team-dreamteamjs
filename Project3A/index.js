const form = document.getElementById("form");
const cardHolderName = document.getElementById("cname");
const creditCardNumber = document.getElementById("cnum");
const expMonth = document.getElementById("expmonth");
const expYear = document.getElementById("expyear");
const cvc = document.getElementById("cvc");

// this is suppose to be the code for real time work but it's not working for some reason
//in full tranparency not my code but i understand how it work so i didnt right it over
//const duplicateField = document.getElementById("duplicateField");
//cardHolderName.addEventListener('keyup',() => {
//    duplicateField.value = input.value;
//});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
    //if all required fields are filled out
    // display the confirmation
    // else
    // do nothing & show the form
    // if(allRequiredFieldsAreFilledOut() === true){
    //     //display the confirmation
    //     document.getElementById("confirmation").style.display = "block";
    //     //hide the form
    //     document.getElementById("form").style.display = "none";
    // }
});

// function allRequiredFieldsAreFilledOut(){
//
// }

function checkInputs() {
    //get values from inputs
    const cardHolderValue = cardHolderName.value.trim();
    const creditCardValue = creditCardNumber.value.trim();
    const expMonthValue = expMonth.value.trim();
    const expYearValue = expYear.value.trim();
    const cvcValue = cvc.value.trim();

    //check for valid cardholder name
    checkForValidCardholderName(cardHolderValue, 'Cardholder name cannot be blank');

    //check for valid credit card format
    checksIfValidFormatFor(creditCardValue, creditCardNumber, "Credit Card cannot be blank", "Invalid Format. Numbers only");

    //check for valid expiration dates for month
    checksIfValidFormatFor(expMonthValue, expYear, "Cannot be blank", "Invalid Format. Numbers only");

    //check for valid expiration dates for year
    checksIfValidFormatFor(expYearValue, expYear, "Cannot be blank", "Invalid Format. Numbers only");

    //check for valid CVC
    checksIfValidFormatFor(cvcValue, cvc, "Cannot be blank", "Invalid Format. Numbers only");
}

function checkForValidCardholderName(cardholderValue, errorMessage){
    //check for valid cardholder name
    if (cardholderValue === "") {
        //show error
        //add error class
        setErrorFor(cardHolderName, errorMessage);
        return false;
    } else {
        //add success class
        setSuccessFor(cardHolderName);
        return true;
    }
}

function checksIfValidFormatFor(inputFieldValue, inputFieldName, errorMessage1, errorMessage2) {
    //checks for valid format
    if (inputFieldValue === "") {
        setErrorFor(inputFieldName, errorMessage1);
        return false;
    } else if (!isValidFormat(inputFieldValue)) {
        setErrorFor(inputFieldName, errorMessage2);
        return false;
    } else {
        setSuccessFor(inputFieldName);
    }
}

function setErrorFor(nameOfInputField, errorMessage) {
    const inputs = nameOfInputField.parentElement; //.inputs class
    const small = inputs.querySelector('small');

    //add error message inside <small> tag
    small.innerText = errorMessage;

    //add the error class
    inputs.className = 'inputs error';
}

function setSuccessFor(nameOfInputField) {
    const inputs = nameOfInputField.parentElement; //.input class
    inputs.className = 'inputs success';
}

function isValidFormat(nameOfInputField) {
    //check if value are all numbers
    ///^\d+$/ Regular expression pattern to match numbers only
    return /^\d+$/.test(nameOfInputField);
}

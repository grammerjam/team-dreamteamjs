const form = document.getElementById('form');
const cardHolderName = document.getElementById('cname');
const creditCardNumber = document.getElementById('cnum');
const expMonth = document.getElementById('expmonth');
const expYear = document.getElementById('expyear');
const cvc = document.getElementById('cvc');
const confirmation = document.getElementById('confirmation-thank');
const continueButton = document.getElementById('continue-button');

form.addEventListener('submit', e => {
  e.preventDefault();

  // Get values from inputs
  const cardHolderValue = cardHolderName.value.trim();
  const creditCardValue = creditCardNumber.value.trim();
  const expMonthValue = expMonth.value.trim();
  const expYearValue = expYear.value.trim();
  const cvcValue = cvc.value.trim();

  // Check for valid cardholder name
  checkForValidCardholderName(cardHolderValue, 'Cardholder name cannot be blank');

  // Check for valid credit card format
  checksIfValidFormatFor(creditCardValue, creditCardNumber, 'Credit Card cannot be blank', 'Invalid Format. Numbers only');

  // Check for valid expiration dates for month
  checksIfValidFormatFor(expMonthValue, expMonth, 'Cannot be blank', 'Invalid Format. Numbers only');

  // Check for valid expiration dates for year
  checksIfValidFormatFor(expYearValue, expYear, 'Cannot be blank', 'Invalid Format. Numbers only');

  // Check for valid CVC
  checksIfValidFormatFor(cvcValue, cvc, 'Cannot be blank', 'Invalid Format. Numbers only');

  // If all required fields are filled out, display the confirmation
  if (cardHolderValue !== '' && creditCardValue !== '' && expMonthValue !== '' && expYearValue !== '' && cvcValue !== '') {
    document.getElementById('confirmation-thank').style.display = 'flex';
    // Hide the form
    document.getElementById('form').style.display = 'none';
  }
});

function checkForValidCardholderName(cardholderValue, errorMessage) { 
  // Check for valid cardholder name
  if (cardholderValue === '') {
    // Show error
    // Add error class
    setErrorFor(cardHolderName, errorMessage);
  } else {
    // Remove error if valid
    removeErrorFor(cardHolderName);
  }
}

function checksIfValidFormatFor(inputFieldValue, inputFieldName, errorMessage1, errorMessage2) {
  // Check for valid format
  if (inputFieldValue === '') {
    setErrorFor(inputFieldName, errorMessage1);
    return false;
  } else if (!isValidFormat(inputFieldValue)) {
    setErrorFor(inputFieldName, errorMessage2);
    return false;
  } else {
    setSuccessFor(inputFieldName);
  }
}

function isValidFormat(nameOfInputField) {
  // Check if value contains only numbers
  const creditCardRegex = /^[0-9]*$/;
  return creditCardRegex.test(nameOfInputField);
}

function setErrorFor(nameOfInputField, errorMessage) {
  const inputs = nameOfInputField.parentElement; // .inputs class
  const small = inputs.querySelector('small');

  // Add error message inside <small> tag
  small.innerText = errorMessage;

  // Add the error class
  inputs.classList.add('error');
}

function removeErrorFor(nameOfInputField) {
  const inputs = nameOfInputField.parentElement; // .inputs class
  const small = inputs.querySelector('small');

  // Remove error message
  small.innerText = '';

  // Remove the error class
  inputs.classList.remove('error');
}

function setSuccessFor(nameOfInputField) {
  const inputs = nameOfInputField.parentElement; // .input class
  inputs.classList.add('success');
}

function resetForm(){
  const form = document.getElementById('form');
  form.reset();
}

function showForm() {
  document.getElementById('confirmation-thank').style.display = 'none';
  document.getElementById('form').style.display = 'block';
  resetForm();
}

const resetButton = document.getElementById('continue-button');
resetButton.addEventListener('click', () => {
  showForm();
});

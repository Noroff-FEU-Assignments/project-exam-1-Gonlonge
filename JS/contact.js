const form = document.querySelector("#contactForm");
const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const button = document.querySelector("button");

function checkIfButtonIsDisabled() {
  // if all inputs pass validation enable the button
  if (
    checkLength(firstName.value, 5) &&
    checkLength(lastName.value, 5) &&
    validateEmail(email.value) &&
    checkLength(subject.value, 5) &&
    checkLength(message.value, 5)
  ) {
    button.disabled = false;
  } else {
    // clear the message
    message.innerHTML = "";
    // disable button
    button.disabled = true;
  }
}
// call the same function for each input's keyup event
firstName.addEventListener("keyup", checkIfButtonIsDisabled);
lastName.addEventListener("keyup", checkIfButtonIsDisabled);
email.addEventListener("keyup", checkIfButtonIsDisabled);
subject.addEventListener("keyup", checkIfButtonIsDisabled);
message.addEventListener("keyup", checkIfButtonIsDisabled);

// function to check if the length of the input value is valid
function checkLength(value, len) {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}

// function for validating email
function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

function validateForm(event) {
  event.preventDefault();

  let isValid = true;

  if (checkLength(firstName.value, 5) === true) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
    isValid = false;
  }

  if (checkLength(lastName.value, 5) === true) {
    lastNameError.style.display = "none";
  } else {
    lastNameError.style.display = "block";
    isValid = false;
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
    isValid = false;
  }
  if (checkLength(subject.value, 15) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
    isValid = false;
  }
  if (checkLength(message.value, 25) === true) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
    isValid = false;
  }

  if (isValid) {
    message.innerHTML = '<div class="message">Message sent</div>';
    form.reset();
  }
}

form.addEventListener("submit", validateForm);

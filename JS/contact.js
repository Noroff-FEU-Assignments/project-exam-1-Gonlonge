const form = document.querySelector("#contactForm");
const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const messages = document.querySelector("#messages");
const messagesError = document.querySelector("#messagesError");

function checkIfButtonIsDisabled() {
  // if all inputs pass validation enable the button
  if (
    checkLength(firstName.value, 5) &&
    checkLength(lastName.value, 5) &&
    validateEmail(email.value) &&
    checkLength(subject.value, 15) &&
    checkLength(messages.value, 25)
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
messages.addEventListener("keyup", checkIfButtonIsDisabled);

// function to check if the length of the input value is valid
function checkLength(value, len) {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}

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
  if (checkLength(messages.value, 25) === true) {
    messagesError.style.display = "none";
  } else {
    messagesError.style.display = "block";
    isValid = false;
  }

  if (isValid) {
    message.innerHTML =
      '<p class="message">Thank you for the dm, you will hear from me as soon as possible.</p>';
    form.reset();
  }
}

form.addEventListener("submit", validateForm);

const allInputs = document.querySelectorAll('input');

// moving the label up when focused or when there is a text inside
allInputs.forEach((input) => {
  input.addEventListener('focus', (event) => {
    const label = event.target.previousElementSibling;
    if (!label) return;
    label.classList.add('moveup');
  });

  input.addEventListener('blur', (event) => {
    const label = event.target.previousElementSibling;
    if (!label) return;
    if (!label.value && !input.value.trim()) label.classList.remove('moveup');
  });
});

const form = document.querySelector('form');
const errorIconFirstname = document.querySelector('.errorIcon-firstname');
const firstnameInput = document.getElementById('firstname');
const firstnameErrorMsg = document.getElementById('firstname-error');

const errorIconLastname = document.querySelector('.errorIcon-lastname');
const lastnameInput = document.getElementById('lastname');
const lastnameErrorMsg = document.getElementById('lastname-error');

const errorIconEmail = document.querySelector('.errorIcon-email');
const emailInput = document.getElementById('email');
const emailErrorMsg = document.getElementById('email-error');

const errorIconPassword = document.querySelector('.errorIcon-password');
const passwordInput = document.getElementById('password');
const passwordErrorMsg = document.getElementById('password-error');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  resetErrors();

  const formData = new FormData(form);

  const firstname = formData.get('firstname');
  if (!firstname.trim()) {
    displayFirstnameError();
  }

  const lastname = formData.get('lastname');
  if (!lastname.trim()) {
    displayLastnameError();
  }

  const email = formData.get('email');
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!email.match(regex)) {
    displayEmailError();
  }

  const password = formData.get('password');
  if (!password.trim()) {
    displayPasswordError();
  }
});

function resetErrors() {
  errorIconFirstname.classList.add('hidden');
  firstnameErrorMsg.classList.add('hidden');
  firstnameInput.classList.remove('error');

  lastnameErrorMsg.classList.add('hidden');
  errorIconLastname.classList.add('hidden');
  lastnameInput.classList.remove('error');

  emailErrorMsg.classList.add('hidden');
  errorIconEmail.classList.add('hidden');
  emailInput.classList.remove('error');

  passwordErrorMsg.classList.add('hidden');
  errorIconPassword.classList.add('hidden');
  passwordInput.classList.remove('error');
}

function displayFirstnameError() {
  firstnameErrorMsg.classList.remove('hidden');
  errorIconFirstname.classList.remove('hidden');
  firstnameInput.classList.add('error');
}

function displayLastnameError() {
  lastnameErrorMsg.classList.remove('hidden');
  errorIconLastname.classList.remove('hidden');
  lastnameInput.classList.add('error');
}

function displayEmailError() {
  emailErrorMsg.classList.remove('hidden');
  errorIconEmail.classList.remove('hidden');
  emailInput.classList.add('error');
}

function displayPasswordError() {
  passwordErrorMsg.classList.remove('hidden');
  errorIconPassword.classList.remove('hidden');
  passwordInput.classList.add('error');
}

const form = document.getElementsByTagName('form')[0];

const email = document.getElementById('mail');
const emailError = document.querySelector('#mail + span.error');

// add an eventListener on email - element
email.addEventListener('input', function(event) {
    // check for each time a user type something...
    // and check if form fields are valid

    if (email.validity.valid) {
        emailError.textContent = ''; // reseting content of emailError message
        emailError.className = 'active'
        
    } else {
        // if there still exist an error
        // show the error()
        showError();
    }
});

form.addEventListener('submit', function(event) {
    // we submit form if form field is valid
    if (!email.validity.valid) {
        showError();

        // cancel the event here
        event.preventDefault();
    }
});

function showError() {
    // if form field is empty
    // show this error message
    if (email.validity.valueMissing) {
        emailError.textContent = "Please provide an email address!";
    } else if (email.validity.typeMismatch) {
        // if value entered is not a correct email address
        // show this error message
        emailError.textContent = "Value not a correct email address!";
    } else if (email.validity.tooShort) {
        // if email address value is too short
        emailError.textContent = `
            Email should be at least ${email.minLength} characters; n\ you entered
            ${email.value.length}
        `;
    }

    emailError.className = 'error active';
}

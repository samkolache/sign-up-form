const form = document.getElementById('form');
const sumbitButton = document.getElementById('button')
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phone-number');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

sumbitButton.addEventListener ('click', e => {
 e.preventDefault();
 validateInputs()
});

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase())
}

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error')
}



const validateInputs = () => {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const phoneNumberValue = phoneNumber.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    if(firstNameValue === '') {
        setError(firstName, 'First name is required')
    }else {
        setSuccess(firstName)
    }

    if(phoneNumberValue === '') {
        setError(phoneNumber, 'Phone number is required');
    }else {
        setSuccess(phoneNumber)
    }

    if(lastNameValue === '') {
        setError(lastName, 'Last name is required')
    }else {
        setSuccess(lastName)
    }

    if(emailValue === '') {
        setError(email, 'Email is required')
    }else if(!isValidEmail(emailValue)) {
        setError(email, 'Enter a valid email address')
    }else {
        setSuccess(email)
    }

    if(passwordValue === '') {
        setError(password, 'Password is required')
    }else if(passwordValue.length < 8) {
        setError(password, 'Password should be atleast 8 characters')
    }else {
        setSuccess(password)
    }
    if(confirmPasswordValue === '') {
        setError(confirmPassword, "Please confirm your password")
    }else if(passwordValue !== confirmPasswordValue) {
        setError(confirmPassword, "Passwords do not match")
    }else {
        setSuccess(confirmPassword)
    }
}
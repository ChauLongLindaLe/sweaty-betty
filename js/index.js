var email = document.getElementById("email");
var password = document.getElementById("password");
var emailError = document.getElementById('email-error');
var passwordError = document.getElementById('password-error');
var registrationForm = document.getElementById('registration-form');
var loginForm = document.getElementById('login-form');
const emailRegEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Toggle between forms
function showRegForm() {
    event.preventDefault();
    registrationForm.style.display = "block";
    loginForm.style.display = "none";
}
function showLoginForm() {
    event.preventDefault();
    registrationForm.style.display = "none";
    loginForm.style.display = "block";
}


// Login verification 

email.addEventListener('keydown', verifyEmail);
password.addEventListener('keydown', verifyPassword);
// Listen out for any input 

function verifyEmail() {
    if (emailRegEx.test(email.value)) {
        emailError.innerHTML = "";
        email.classList.add = "is-success";
        emailError.style.display = "block";
        return true;
    } else {
        emailError.innerHTML =  "Email not valid";
        email.classList.add = "is-danger";
        emailError.style.display = "block";
        return false;
    }
}
function verifyPassword() {
    if (password.value.length > 6) {
        passwordError.innerHTML = "";
        return true;
    } else {
        passwordError.innerHTML =  "Password is too short";
        return false;
    }
}


// check that its validated before submitting

function validateForm(){
    if(verifyEmail() && verifyPassword()){
        alert("Signed in!");
    } else{
        event.preventDefault();
    }
}


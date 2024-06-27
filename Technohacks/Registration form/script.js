document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    if (username.value.trim() === '') {
        isValid = false;
        usernameError.textContent = 'Username is required';
        usernameError.style.display = 'block';
    } else {
        usernameError.style.display = 'none';
    }

    if (email.value.trim() === '') {
        isValid = false;
        emailError.textContent = 'Email is required';
        emailError.style.display = 'block';
    } else if (!validateEmail(email.value)) {
        isValid = false;
        emailError.textContent = 'Invalid email format';
        emailError.style.display = 'block';
    } else {
        emailError.style.display = 'none';
    }

    if (password.value.trim() === '') {
        isValid = false;
        passwordError.textContent = 'Password is required';
        passwordError.style.display = 'block';
    } else if (password.value.length < 6) {
        isValid = false;
        passwordError.textContent = 'Password must be at least 6 characters';
        passwordError.style.display = 'block';
    } else {
        passwordError.style.display = 'none';
    }

    if (confirmPassword.value.trim() === '') {
        isValid = false;
        confirmPasswordError.textContent = 'Confirm password is required';
        confirmPasswordError.style.display = 'block';
    } else if (password.value !== confirmPassword.value) {
        isValid = false;
        confirmPasswordError.textContent = 'Passwords do not match';
        confirmPasswordError.style.display = 'block';
    } else {
        confirmPasswordError.style.display = 'none';
    }

    if (isValid) {
        alert('Registration successful!');
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

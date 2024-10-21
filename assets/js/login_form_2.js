$(document).ready(function () {
    $('#loginForm').on('submit', function (event) {
        event.preventDefault();  // Prevent form submission by default

        let isValid = true;

        // Clear previous error messages and borders
        $('.error').text('');
        $('input').css('border-bottom', '2px solid #ccc');  // Reset input borders

        // Email validation
        const email = $('#email').val().trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '') {
            $('#emailError').text('Email is required.');
            $('#email').css('border-bottom', '2px solid red');  // Apply red border to invalid input
            isValid = false;
        } else if (!emailRegex.test(email)) {
            $('#emailError').text('Invalid email format.');
            $('#email').css('border-bottom', '2px solid red');  // Apply red border to invalid input
            isValid = false;
        }

        // Password validation
        const password = $('#password').val();
        if (password === '') {
            $('#passwordError').text('Password is required.');
            $('#password').css('border-bottom', '2px solid red');  // Apply red border to invalid input
            isValid = false;
        } else if (password.length < 6) {
            $('#passwordError').text('Password must be at least 6 characters long.');
            $('#password').css('border-bottom', '2px solid red');  // Apply red border to invalid input
            isValid = false;
        }

        
    });

    // Clear errors and reset borders on input
    $('#email, #password').on('input', function () {
        $(this).css('border-bottom', '2px solid #ccc');  // Reset border on input change
        $(this).next('.error').text('');  // Clear error messages
    });

    // Toggle password visibility
    $('#showPassword').on('change', function () {
        const passwordField = $('#password');
        if ($(this).is(':checked')) {
            passwordField.attr('type', 'text');
        } else {
            passwordField.attr('type', 'password');
        }
    });
});

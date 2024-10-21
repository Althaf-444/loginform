// Signup form validation & show password toggle
$(document).ready(function () {
    $('#SignupForm').on('submit', function (event) {
        event.preventDefault();  // Prevent form submission by default

        let isValid = true;

        // Clear previous error messages and borders
        $('.error').text('');
        $('input').css('border', '');  // Remove any previous red borders

        // Full Name validation
        const fullName = $('#full_name').val().trim();
        if (fullName === '' || fullName.split(' ').length < 2) {
            $('#full_nameError').text('Please enter both first and last names.');
            $('#full_name').css({
                "border": "2px solid red",
                "border-top": "none"
            });  // Apply red border to invalid input
            isValid = false;
        }

        // Email validation
        const email = $('#email').val().trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '') {
            $('#emailError').text('Email is required.');
            $('#email').css({
                "border": "2px solid red",
                "border-top": "none"
            });  // Add border-top: none
            isValid = false;
        } else if (!emailRegex.test(email)) {
            $('#emailError').text('Invalid email format.');
            $('#email').css({
                "border": "2px solid red",
                "border-top": "none"
            });  // Add border-top: none
            isValid = false;
        }

        // Password validation
        const password = $('#password').val();
        if (password === '') {
            $('#passwordError').text('Password is required.');
            $('#password').css({
                "border": "2px solid red",
                "border-top": "none"
            });  // Add border-top: none
            isValid = false;
        } else if (password.length < 6) {
            $('#passwordError').text('Password must be at least 6 characters long.');
            $('#password').css({
                "border": "2px solid red",
                "border-top": "none"
            });  // Add border-top: none
            isValid = false;
        }

       
    });

    // Clear errors and borders on input
    $('#full_name, #email, #password').on('input', function () {
        $(this).css('border', '');  // Reset border on input change
        $(this).next('.error').text('');  // Clear error message
    });

    // Toggle password visibility
    $('#showPassword').on('change', function () {
        const passwordField = $('#password');
        passwordField.attr('type', $(this).is(':checked') ? 'text' : 'password');
    });
});

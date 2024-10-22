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


// Simulating AJAX for the Signup Page

$(document).ready(function() {
    // Handle signup form submission
    $("#SignupForm").on('submit', function(e) {
        e.preventDefault(); // Prevent default form submission

        // Simulate getting form data
        var fullName = $("#full_name").val();
        var email = $("#email").val();
        var password = $("#password").val();

        // Simulate an AJAX request (without a backend)
        setTimeout(function() {
            // Simulated response
            var response = {
                success: email !== "" && password.length >= 6,  // Dummy signup validation
                errors: {
                    full_name: fullName === "" ? "Full name is required" : '',
                    email: email === "" ? "Email is required" : '',
                    password: password.length < 6 ? "Password must be at least 6 characters" : ''
                }
            };

            if (response.success) {
                // On successful signup, simulate redirecting to a welcome page
                alert("Signup successful!");
                window.location.href = "welcome.html";  // Simulated page redirection
            } else {
                // Display simulated error messages
                $("#full_nameError").text(response.errors.full_name);
                $("#emailError").text(response.errors.email);
                $("#passwordError").text(response.errors.password);
            }
        }, 0000); // Simulate delay for AJAX request
    });
});
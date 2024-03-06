$(document).ready(function () {
    // jQuery validation
    var serviceurl = 'https://vg-crm-build-xamdgpueoq-el.a.run.app/api/rikexim/website-form-submissions';

    $('#index-form').validate({
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            },
            message: "required"
        },
        messages: {
            name: "Please enter your name.",
            email: "Please enter a valid email address.",
            message: "Please enter your message."
        },
        submitHandler: function (form) {
            // Prevent default form submission
            event.preventDefault();

            // Prepare data for AJAX request (adjust based on your service)
            const data = {
                formName: 'index-page',
                name: $('#name').val(),
                email: $('#email').val(),
                message: $('#message').val()
            };

            // AJAX call to Spring Boot POST method (commented out)
            $.ajax({
                url: serviceurl, // Replace with your actual endpoint URL
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(data),
                success: function (response) {
                    // Handle successful email sending
                    $('.feedback-message').remove(); // Remove previous feedback messages if any
                    $(form).append('<p class="feedback-message success-message">Your message has been sent!</p>');
                    $('#name').val(''); // Clear the email field
                    $('#email').val(''); // Clear the email field
                    $('#message').val(''); // Clear the email field

                    setTimeout(function() {
                        $('.success-message').remove(); // Remove temporary message after a delay
                      }, 3000); // Adjust delay as needed
                },
                error: function (xhr, status, error) {
                    // Handle failure in email sending
                    $('.feedback-message').remove(); // Remove previous feedback messages if any
                    // Append an error message. Customize it based on your needs or error response
                    $(form).append('<p class="feedback-message error-message">Failed to send the message. Please try again later.</p>');
                }
            });
        }
    });

    $('#affiliate-form').validate({
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            },
            message: "required",
            // Remove or comment out the subject rule if it's meant to be optional
            // subject: { required: false } // This line is optional and can be omitted
        },
        messages: {
            name: "Please enter your name.",
            email: "Please enter a valid email address.",
            message: "Please enter your message."
            // You can also remove any message related to 'subject' if it's optional
        },
        submitHandler: function (form) {
            // your handler

            // Prevent default form submission
            event.preventDefault();

            // Prepare data for AJAX request (adjust based on your service)
            const data = {
                formName: 'affiliate-page',
                name: $('#name').val(),
                email: $('#email').val(),
                message: $('#message').val(),
                subject: $('#subject').val()
            };

            // AJAX call to Spring Boot POST method (commented out)
            $.ajax({
                url: serviceurl, // Replace with your actual endpoint URL
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(data),
                success: function (response) {
                    // Handle successful email sending
                    $('.feedback-message').remove(); // Remove previous feedback messages if any
                    $('#name').val(''); // Clear the email field
                    $('#email').val(''); // Clear the email field
                    $('#message').val(''); // Clear the email field
                    $('#subject').val(''); // Clear the email field


                    $(form).append('<p class="feedback-message success-message">Your message has been sent!</p>');
                    setTimeout(function() {
                        $('.success-message').remove(); // Remove temporary message after a delay
                      }, 3000); // Adjust delay as needed
                },
                error: function (xhr, status, error) {
                    // Handle failure in email sending
                    $('.feedback-message').remove(); // Remove previous feedback messages if any
                    // Append an error message. Customize it based on your needs or error response
                    $(form).append('<p class="feedback-message error-message">Failed to send the message. Please try again later.</p>');
                }
            });
        }
    });

    $('#contact-form').validate({
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            },
            message: "required",
            // Remove or comment out the subject rule if it's meant to be optional
            // subject: { required: false } // This line is optional and can be omitted
        },
        messages: {
            name: "Please enter your name.",
            email: "Please enter a valid email address.",
            message: "Please enter your message."
            // You can also remove any message related to 'subject' if it's optional
        },
        submitHandler: function (form) {
            // your handler

            // Prevent default form submission
            event.preventDefault();

            // Prepare data for AJAX request (adjust based on your service)
            const data = {
                formName: 'contact-form-page',
                name: $('#name').val(),
                email: $('#email').val(),
                message: $('#message').val(),
                subject: $('#subject').val(),
                phone: $('#phone').val(),
            };

            // AJAX call to Spring Boot POST method (commented out)
            $.ajax({
                url: serviceurl, // Replace with your actual endpoint URL
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(data),
                success: function (response) {
                    // Handle successful email sending
                    $('.feedback-message').remove(); // Remove previous feedback messages if any
                    $('#name').val(''); // Clear the email field
                    $('#email').val(''); // Clear the email field
                    $('#message').val(''); // Clear the email field
                    $('#subject').val(''); // Clear the email field
                    $('#phone').val(''); // Clear the email field


                    $(form).append('<p class="feedback-message success-message">Your message has been sent!</p>');
                    setTimeout(function() {
                        $('.success-message').remove(); // Remove temporary message after a delay
                      }, 3000); // Adjust delay as needed
                },
                error: function (xhr, status, error) {
                    // Handle failure in email sending
                    $('.feedback-message').remove(); // Remove previous feedback messages if any
                    // Append an error message. Customize it based on your needs or error response
                    $(form).append('<p class="feedback-message error-message">Failed to send the message. Please try again later.</p>');
                }
            });

        }
    });
    // subscribe-news-form

    $('#subscribe-form').validate({
        rules: {
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            email: "Please enter a valid email address."
        },
        submitHandler: function (form) {
            // Prevent default form submission
            event.preventDefault();

            // Prepare data for AJAX request (adjust based on your service)
            const data = {
                formName: 'subscription',
                email: $(form).find('#email').val(), // Ensure this fetches the correct value
            };
            $(form).append('<p class="success-message">Subscribing...</p>');
            $.ajax({
              url: serviceurl, // Replace with your actual endpoint URL
              type: 'POST',
              contentType: 'application/json', // Adjust content type if necessary
              data: JSON.stringify(data),
              success: function(response) {
                // Handle successful response (e.g., show success message)
                console.log("Success:", response);
                $('.success-message').remove();
                $(form).append('<p class="success-message">Thank you for subscribing!</p>'); // Optional success message
                $(form).find('#email').val('')// Clear the email field

                setTimeout(function() {
                    $('.success-message').remove(); // Remove temporary message after a delay
                  }, 3000); // Adjust delay as needed
              },
              error: function(error) {
                // Handle error response (e.g., show error message)
                console.error("Error:", error);
                $(form).append('<p class="error-message">An error occurred. Please try again.</p>'); // Optional error message
              }
            });
           

            // Optional: Show success message temporarily while waiting for server response
           
            setTimeout(function () {
                $('.success-message').remove(); // Remove temporary message after a delay
            }, 3000); // Adjust delay as needed
        }
    });
});
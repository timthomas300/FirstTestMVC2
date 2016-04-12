//$(document).ready(function () {
//    $('.btn-success').on('click', function () {
//        if ($('#name').val() === "") {
//            $('#nameValid').val("Please enter a valid name.");
//        }
//        else if ($('#message').val() === "") {
//            $('#messageValid').val("Please enter a valid message.");
//        }
//        else if ($('#email').val() === "") {
//            $('#emailValid').val("Please enter a valid email.");
//        }
//    });
//});

$(document).ready(function () {
    $("form").submit(function (e) {
        /* put your form field(s) you want to validate here, this checks if your input field of choice is blank */
        if (!$('#name').val()) {
            e.preventDefault();
            $('#nameValid').val("Please enter a valid name.");// This will prevent the form submission
        }
        else if (!$('#message').val()) {
            e.preventDefault();
            $('#messageValid').val("Please enter a valid message.");
        }
        else if (!$('#email').val()) {
            e.preventDefault();
            $('#emailValid').val("Please enter a valid email.");
        }
        else {
            // In the event all validations pass. THEN process AJAX request.
            $.ajax({
                url: '@Url.Action("Contact", "Home")/',
                type: POST,
                cache: false
            });
        }


    });
});

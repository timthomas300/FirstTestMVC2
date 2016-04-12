$(document).ready(function () {
    $('.btn-success').on('click', function () {
        if ($('#name').val() === "") {
            $('#nameValid').val("Please enter a valid name.");
        }
        else if ($('#message').val() === "") {
            $('#messageValid').val("Please enter a valid message.")
        }
        else if ($('#email').val() === "") {
            $('#emailValid').val("Please enter a valid email.")
        }
    });
});
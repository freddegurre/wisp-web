$(document).ready(function() {

    $("#submit").on("click", function() {
        event.preventDefault();
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();
        console.log(name, email, message)
        
    });
});
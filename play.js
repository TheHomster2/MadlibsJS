function ayee() {
    confirm("Ready to play?");
    var age = prompt("How old are you?"),
        // Get a reference to the element we want to update
        el = document.getElementById('result'),
        message;

    // Check the age and set the message variable based on that
    if (age >= 18) {
        message = "Let's get started then!";
    } else {
        message = "You're under 18? Be careful out there....";
    }
    // Update the content of the element with the message
    el.innerHTML = message;
}
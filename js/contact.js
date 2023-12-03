
function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var subject = document.forms["contactForm"]["subject"].value;
    var message = document.forms["contactForm"]["message"].value;
    var isValid = true;

    document.getElementById("nameError").textContent = '';
    document.getElementById("emailError").textContent = '';
    document.getElementById("subjectError").textContent = '';
    document.getElementById("messageError").textContent = '';

    if (name.length < 5) {
        document.getElementById("nameError").textContent = "Name must be at least 5 characters long.";
        isValid = false;
    }
    if (!email.includes('@') || !email.includes('.')) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        isValid = false;
    }
    if (subject.length < 15) {
        document.getElementById("subjectError").textContent = "Subject must be at least 15 characters long.";
        isValid = false;
    }
    if (message.length < 25) {
        document.getElementById("messageError").textContent = "Message content must be at least 25 characters long.";
        isValid = false;
    }

    return isValid;
}

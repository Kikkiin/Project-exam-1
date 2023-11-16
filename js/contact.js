function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var subject = document.forms["contactForm"]["subject"].value;
    var message = document.forms["contactForm"]["message"].value;

    if (name.length < 5) {
        alert("Name must be at least 5 characters long.");
        return false;
    }
    if (!email.includes('@') || !email.includes('.')) {
        alert("Please enter a valid email address.");
        return false;
    }
    if (subject.length < 15) {
        alert("Subject must be at least 15 characters long.");
        return false;
    }
    if (message.length < 25) {
        alert("Message content must be at least 25 characters long.");
        return false;
    }
    return true;
}

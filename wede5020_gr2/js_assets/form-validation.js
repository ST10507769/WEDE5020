document.addEventListener("DOMContentLoaded", function() {
    const enquriyForm = document.getElementById("enquiry-form");

    if (enquriyForm) {
        enquriyForm.addEventListener("submit", function(event) {
            event.preventDefault();
            validateEnquiryForm(event);
        });
    }
});

function validateEnquiryForm(event) {
    if (event) event.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const interestsInput = document.getElementById("interests");

    let isValid = true;

    document.querySelectorAll(".error-message").forEach(function(el) {
        el.remove();
    });

    if (!nameInput.value.trim()) {
        showError(nameInput, "Name is required.");
        isValid = false;
    }

    if (!emailInput.value.trim()) {
        showError(emailInput, "Email is required.");
        isValid = false;
    }

    if (!messageInput.value.trim()) {
        showError(messageInput, "Message is required.");
        isValid = false;
    }

    if (!interestsInput.value.trim()) {
        showError(interestsInput, "Interests are required.");
        isValid = false;
    }

    if (isValid) {
        processEnquiryForm(interestsInput.value, messageInput.value.trim());
    }
    return isValid;
}

function processEnquiryForm(interests, message) {
    const form = document.getElementById("enquiry-form");
    let response = `Thank you for your enquiry! You have expressed interest in: ${interests}. Your message: "${message}" has been received. We will get back to you shortly.`;

    switch (interests) {
        case "volunteering":
            response = 'Thank you for your interest in volunteering! We have volunteer opportunities available. Please check your email for an application form within 24 hours.';
            break;
        case "training":
            response = 'Thank you for your interest in training! We have upcoming training sessions available. Please check your email for more information.';
            break;
        case "donation":
            response = 'Thank you for your interest in donating! We appreciate your support. Please check your email for donation options and instructions.';
            break;
        default:
            response = `Thank you for your enquiry! Our team will get back to you within 2 business days with detailed information.`;
    }

    const successDiv = document.createElement("div");
    successDiv.className = "success-message response-message";
    successDiv.innerHTML = '<i class="fas fa-check-circle"></i> <strong>' + response + '</strong>';
    form.appendChild(successDiv);

    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = "Sent!";

    setTimeout(function() {
        successDiv.remove();
        submitButton.disabled = false;
        submitButton.textContent = "Submit";
        form.reset();
    }, 8000);
}
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            validateContactForm(event);
        });
    }
});

function validateContactForm(event) {
    if (event) event.preventDefault();

    const nameInput = document.getElementById("contact-name");
    const emailInput = document.getElementById("contact-email");
    const messageInput = document.getElementById("contact-message");
    let isValid = true;

    document.querySelectorAll(".error-message").forEach(function(el) {
        el.remove();
    });

    if (!nameInput.value.trim().length < 2) {
        showError(nameInput, "Name must be at least 2 characters long.");
        isValid = false;
    }

    if (!emailInput.value.trim()) {
        showError(emailInput, "Email is required.");
        isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
        showError(emailInput, "Please enter a valid email address.");
        isValid = false;
    }

    if (!messageInput.value.trim()) {
        showError(messageInput, "Message is required.");
        isValid = false;
    }

    if (isValid) {
        const mailtoLink = `mailto:info@dgi.org.za?subject=' + encodeURIComponent(subject.value.trim()) +'&body=' + encodeURIComponent(
            'Name: ' + nameInput.value.trim() + '\n' +
            'Email: ' + emailInput.value.trim() + '\n\n' +
            'Message:\n' + messageInput.value.trim()    
        )}`;
        window.location.href = mailtoLink;

const form = document.getElementById("contact-form");
const successDiv = document.createElement("div");
successDiv.className = "success-message response-message";
successDiv.innerHTML = '<i class="fas fa-check-circle"></i> <strong>Your enquiry has been received!</strong><p style="margin-top: 10px;">Thank you for contacting us. We will get back to you within 2 business days.</p>';
form.appendChild(successDiv);

form.querySelectorAll("input, textarea").forEach(function(el) {

setTimeout(function() {
    successDiv.remove();
    form.reset();
}, 5000);

function showError(inputElement, message) {
    const errorDiv = document.createElement("div");
    errorDiv.className = "error-message";
    errorDiv.style.color = "#d32f2f";
    errorDiv.style.fontSize = "0.9em";
    errorDiv.style.marginTop = "5px";
    errorDiv.style.fontWeigth = "500";
    errorDiv.textContent = message;
    inputElement.parentNode.insertBefore(errorDiv, inputElement.nextSibling);
    inputElement.style.borderColor = "#d32f2f";
    inputElement.addEventListener("focus", function() {
        this.style.borderColor = "";
        const errorMsg = this.parentNode.querySelector(".error-message");
        if (errorMsg) errorMsg.remove();
        });

    }
    return isValid;
})}}
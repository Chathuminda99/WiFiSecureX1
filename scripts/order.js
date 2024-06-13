document.getElementById("purchaseForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const serviceID = "service_onufuxr";  // Replace with your EmailJS service ID
    const templateID = "template_53wt13c";  // Replace with your EmailJS template ID

    const formData = {
        name: document.querySelector("input[name='name']").value,
        email: document.querySelector("input[name='email']").value,
        phone: document.querySelector("input[name='phone']").value,
        subject: document.querySelector("input[name='subject']").value,
        message: document.querySelector("textarea[name='message']").value
    };

    emailjs.send(serviceID, templateID, formData)
        .then(response => {
            alert("Your message has been sent successfully!");
            document.getElementById("contactForm").reset();
        })
        .catch(error => {
            alert("There was a problem sending your message. Please try again later.");
            console.error("EmailJS Error:", error);
        });
});

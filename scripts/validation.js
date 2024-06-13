document.getElementById("contactForm").addEventListener("submit", function(event) {
    const email = document.querySelector("input[name='email']").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        event.preventDefault();
    }
});

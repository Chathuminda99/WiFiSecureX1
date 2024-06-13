document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productName = urlParams.get('product');
    const productPrice = urlParams.get('price');

    if (productName && productPrice) {
        document.getElementById('product-name').textContent = productName;
        document.getElementById('product-price').textContent = `Price: $${productPrice}`;
        document.getElementById('hiddenProductName').value = productName;
        document.getElementById('hiddenProductPrice').value = productPrice;
    }

    document.getElementById("purchaseForm").addEventListener("submit", function(event) {
        event.preventDefault();

        const serviceID = "service_onufuxr";  // Replace with your EmailJS service ID
        const templateID = "template_d4yu4y9";  // Replace with your EmailJS template ID

        const formData = {
            fullName: document.querySelector("input[name='fullName']").value,
            email: document.querySelector("input[name='email']").value,
            phone: document.querySelector("input[name='phone']").value,
            address: document.querySelector("input[name='address']").value,
            productName: document.querySelector("input[name='productName']").value,
            productPrice: document.querySelector("input[name='productPrice']").value
        };

        emailjs.send(serviceID, templateID, formData)
            .then(response => {
                alert("Your order has been placed successfully!");
                document.getElementById("purchaseForm").reset();
                window.location.href = "index.html"; // Redirect to home page
            })
            .catch(error => {
                alert("There was a problem sending your message. Please try again later.");
                console.error("EmailJS Error:", error);
            });
    });
});

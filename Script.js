document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("themeToggle");
    const body = document.body;

    // Toggle Dark Mode
    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
    });

    // Form Validation
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        const formMessage = document.getElementById("formMessage");

        if (name && email && message) {
            formMessage.textContent = "✅ Message Sent Successfully!";
            formMessage.style.color = "green";
        } else {
            formMessage.textContent = "❌ Please fill in all fields!";
            formMessage.style.color = "red";
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Toggle Password Visibility
    document.querySelector(".toggle-password").addEventListener("click", function () {
        const passwordField = document.getElementById("password");
        if (passwordField.type === "password") {
            passwordField.type = "text";
            this.classList.remove("fa-eye");
            this.classList.add("fa-eye-slash");
        } else {
            passwordField.type = "password";
            this.classList.remove("fa-eye-slash");
            this.classList.add("fa-eye");
        }
    });

    document.addEventListener("DOMContentLoaded", function () {
        const flashMessage = document.querySelector(".flash-message");
    
        // Apply shake effect if there's an error
        if (flashMessage && flashMessage.classList.contains("error")) {
            setTimeout(() => {
                flashMessage.classList.add("shake");
            }, 100);
        }
    });
    

    // Input Animations
    const inputFields = document.querySelectorAll("input");
    inputFields.forEach((field) => {
        field.addEventListener("focus", function () {
            this.style.boxShadow = "0 0 10px rgba(27, 255, 255, 0.5)";
        });
        field.addEventListener("blur", function () {
            this.style.boxShadow = "none";
        });
    });
});

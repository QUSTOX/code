document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const showRegister = document.getElementById("show-register");
    const showLogin = document.getElementById("show-login");
    const formTitle = document.getElementById("form-title");

    showRegister.addEventListener("click", function (event) {
        event.preventDefault();
        loginForm.style.display = "none";
        registerForm.style.display = "block";
        formTitle.textContent = "Register";
    });

    showLogin.addEventListener("click", function (event) {
        event.preventDefault();
        registerForm.style.display = "none";
        loginForm.style.display = "block";
        formTitle.textContent = "Login";
    });

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Login successful!");
    });

    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Registration successful!");
    });
});

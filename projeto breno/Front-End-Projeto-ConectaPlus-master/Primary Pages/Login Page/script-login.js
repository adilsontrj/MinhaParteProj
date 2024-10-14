const togglePassword = document.querySelector("#togglePassword");
const passowrd = document.querySelector("#input-email");

togglePassword.addEventListener("click", function() {
const type = passowrd.type ==="password" ? "text": "password"

passowrd.type = type


});

document.addEventListener('DOMContentLoaded', function () {
 
    const passwordInput = document.querySelector('#input-email');
    const togglePassword = document.querySelector('#togglePassword');

   
    togglePassword.addEventListener('click', function () {

        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.classList.toggle('fa-eye-slash');
    });
});

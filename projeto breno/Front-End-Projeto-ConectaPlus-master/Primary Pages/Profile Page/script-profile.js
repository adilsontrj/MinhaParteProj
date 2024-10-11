document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btnHabilitar').addEventListener('click', function() {
        const campos = document.querySelectorAll('.formulario');
        campos.forEach(campo => {
            campo.removeAttribute('disabled');
        });
    });
});

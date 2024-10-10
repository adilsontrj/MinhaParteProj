document.getElementById('btnHabilitar').addEventListener('click', function() {

    const campos = document.querySelectorAll('#formulario input');

    
    campos.forEach(campo => {
        campo.removeAttribute('disabled');
    });
});
var formulario = document.getElementById('formulario'),
    usuario = formulario.usuario,
    password = formulario.password,
    error = formulario.error;

function validarUsuario(e) {
    if (usuario.value == '' || usuario.value == null) {
        error.style.display = 'block';
        error.innerHTML += '<li>Por favor ingresa un usuario</li>';
        console.log('Por favor ingresa un usuario');

        e.preventDefault();
    } else {
        error.style.display = 'none';
    }
}

function validarContraseña(e) {
    if (password.value == '' || password.value == null) {
        error.style.display = 'block';
        error.innerHTML += '<li>Por favor ingresa tu contraseña</li>';
        console.log('Por favor ingresa tu contraseña');

        e.preventDefault();
    } else {
        error.style.display = 'none';
    }
}

function validarForm(e) {
    error.innerHTML = '';

    validarUsuario(e);
    validarContraseña(e);

}

formulario.addEventListener('submit', validarForm);
const form = document.getElementById("DNI");
const resultadoDiv = document.getElementById("resultado");

//validaciones individuales
function validarNombre() {
    const nombre = document.getElementById("nombre").value.trim();//el trim elimina los espacios en blanco al inicio y al final
    if (!nombre) {//si no hay nombre se muestra una alerta
        resultadoDiv.textContent = "El nombre es obligatorio";
        return false;
    }
    return true;
}

function validarEmail() {
    const email = document.getElementById("email").value.trim();
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;//se usa para validar el formato del email mas adelante
    if (!email) { //si no hay email se muestra una alerta
        resultadoDiv.textContent = "El email es obligatorio";
        return false;
    }
    if (!regexEmail.test(email)) {//si el email no cumple con el formato se muestra una alerta
        resultadoDiv.textContent = "Email invalido";
        return false;
    }
    return true;
}

function validarContraseña() {
    const contraseña = document.getElementById("contraseña").value;
    const regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;//se usa para establecer el formato de la contraseña.
    if (!contraseña) {
        resultadoDiv.textContent = "La contraseña es obligatoria.";
        return false;
    }
    if (!regexPass.test(contraseña)) {//si la contraseña no cumple con el formato se muestra una alerta
        resultadoDiv.textContent = "La contraseña debe tener al menos 6 caracteres, una minúscula, una mayúscula y un número.";
        return false;
    }
    return true;
}

//el evento blur se activa cuando el elemento pierde el foco, al momento de hacer click fuera del input se ejecuta la funcion correspondiente
document.getElementById("nombre").addEventListener("blur", validarNombre);
document.getElementById("email").addEventListener("blur", validarEmail);
document.getElementById("contraseña").addEventListener("blur", validarContraseña);

// Validación al enviar
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const esValido = validarNombre() && validarEmail() && validarContraseña();
    if (esValido) {
        resultadoDiv.textContent = "Formulario enviado correctamente";
    } else {
        resultadoDiv.textContent = "Formulario con errores, corrijalos";
    }
});

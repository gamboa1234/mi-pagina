// ================= MODO OSCURO =================

const cuerpo = document.querySelector("body");
const botonModo = document.querySelector("#btn-tema");

let esDeDia = false;

function alternarModo() {

    cuerpo.classList.toggle("claro");

    esDeDia = !esDeDia;

    if(esDeDia){
        botonModo.textContent = "🌙 Modo Noche";
    }else{
        botonModo.textContent = "☀️ Modo Día";
    }

}

botonModo.addEventListener("click", alternarModo);

// Seleccionamos los elementos del formulario
const formulario = document.querySelector("#formulario-contacto");
const nombre = document.querySelector("#nombre");
const correo = document.querySelector("#correo");
const mensaje = document.querySelector("#mensaje");

// Escuchamos el evento submit del formulario
formulario.addEventListener("submit", function(event) {

    // Evita que la página se recargue
    event.preventDefault();

    // Limpiamos las clases anteriores
    mensaje.classList.remove("error");
    mensaje.classList.remove("exito");

    // Revisamos si el nombre está vacío
    if (nombre.value === "") {

        mensaje.textContent = "Por favor, escribe tu nombre.";
        mensaje.classList.add("error");

    // Revisamos si el correo contiene una arroba
    } else if (!correo.value.includes("@")) {

        mensaje.textContent = "Por favor, escribe un correo válido que contenga @.";
        mensaje.classList.add("error");

    // Si todo está correcto
    } else {

        mensaje.textContent = "enviado correctamente";
        mensaje.classList.add("exito");
    }
});

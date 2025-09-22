const form = document.getElementById("EliminadorEP");
const outputDiv = document.getElementById("outputTextArea");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    const codigoHTML = document.getElementById("HTMLcodigo").value;
    if (!codigoHTML) {//si el campo HTMLcodigo esta vacio manda mensaje
        outputDiv.value = "Ingresa un código HTML";
        return;
    }
    // Expresión regular para eliminar etiquetas peligrosas
    const etiquetasPeligrosas = /<script\b[^>]*>[\s\S]*?<\/script>/gi;
    const codigoSeguro = codigoHTML.replace(etiquetasPeligrosas, '');
    outputDiv.value = codigoSeguro;
});
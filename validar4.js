const form = document.getElementById("Calculadora de calificacion final");
const resultadoDiv = document.getElementById("resultado");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const calificacion1 = parseFloat(document.getElementById("calificacion1").value);
    const calificacion2 = parseFloat(document.getElementById("calificacion2").value);
    const calificacion3 = parseFloat(document.getElementById("calificacion3").value);
    const calificacionEFinal = parseFloat(document.getElementById("calificacionEFinal").value);
    const trabajoFinal = parseFloat(document.getElementById("trabajoFinal").value);

    if (isNaN(calificacion1) || isNaN(calificacion2) || isNaN(calificacion3) || isNaN(calificacionEFinal) || isNaN(trabajoFinal) || calificacion1 < 0 || calificacion2 < 0 || calificacion3 < 0 || calificacionEFinal < 0 || trabajoFinal < 0 || calificacion1 > 10 || calificacion2 > 10 || calificacion3 > 10 || calificacionEFinal > 10 || trabajoFinal > 10) {
        resultadoDiv.textContent = "Por favor, ingresa valores válidos.";
        return;
    }
 
    const calificacionFinal = ((calificacion1 + calificacion2 + calificacion3)/3) * .55 + calificacionEFinal * .30 + trabajoFinal * .15;

    resultadoDiv.textContent = `Su calificacion final es de ${calificacionFinal.toFixed(2)}.`;
});
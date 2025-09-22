const form = document.getElementById("inversion");
const resultadoDiv = document.getElementById("resultado");
const tasa = 0.02;

form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const capital = parseFloat(document.getElementById("capital").value);

    if (isNaN(capital) || capital <= 0) {
        resultadoDiv.textContent = "Por favor, ingresa un valor válido.";
        return;
    }

    const ganancia = capital * tasa;
    const total = capital + ganancia;

    resultadoDiv.textContent = `Su ganancia en un mes será de $${ganancia.toFixed(2)} y el total de su cuenta será $${total.toFixed(2)}.`;
});
const form = document.getElementById("Descuento de compras");
const resultadoDiv = document.getElementById("resultado");
const descuento = 0.15;

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const TotalCompras = parseFloat(document.getElementById("TotalCompras").value);

    if (isNaN(TotalCompras) || TotalCompras <= 0) {
        resultadoDiv.textContent = "Por favor, ingresa un valor válido.";
        return;
    }

    const total = TotalCompras-TotalCompras*descuento;

    resultadoDiv.textContent = `Su total con el descuento incluido es de $${total.toFixed(2)}.`;
});
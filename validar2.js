const form = document.getElementById("comisiones");
const resultadoDiv = document.getElementById("resultado");
const comisiones = 0.1;

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const SueldoBase = parseFloat(document.getElementById("SueldoBase").value);
    const NumVentas = parseFloat(document.getElementById("NumVentas").value);

    if (isNaN(SueldoBase) || SueldoBase <= 0 || isNaN(NumVentas) || NumVentas < 0) {
        resultadoDiv.textContent = "Por favor, ingresa valores válidos.";
        return;
    }


    const bloques = Math.floor(NumVentas / 3);
    const comisionPorcentaje = bloques * 0.10; //cada 3 ventas se aumenta 10%del sueldo base

    const ganancia = SueldoBase * comisionPorcentaje;
    const total = SueldoBase + ganancia;

    resultadoDiv.textContent = `Su ganancia de comisiones es de $${ganancia.toFixed(2)} y el total de su sueldo es de $${total.toFixed(2)}.`;
});
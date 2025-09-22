const form = document.getElementById("CalculadoraUtilidad");
const resultadoDiv = document.getElementById("resultado");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const salario = parseFloat(document.getElementById("salario").value);
    const MesesTrabajados = parseFloat(document.getElementById("MesesTrabajados").value);

    if(isNaN(MesesTrabajados) || isNaN(salario) || MesesTrabajados<0 || salario<0){
        resultadoDiv.textContent = "Por favor ingresa valores válidos.";
        return;
    }
    let utilidad = 0;
    if (MesesTrabajados < 12) {//menos de un año
        utilidad = salario* 0.05;
    } else {
        if (MesesTrabajados >= 12 && MesesTrabajados < 24) { //un año o mas y menos de dos años
            utilidad = salario * 0.07;
        } else {
            if (MesesTrabajados >= 24 && MesesTrabajados < 60) {//dos años o mas y menos de cinco años
                utilidad = salario * 0.10;
            } else {
                if (MesesTrabajados >= 60 && MesesTrabajados < 120) {//cinco años o mas y menos de diez años
                    utilidad = salario * 0.15;
                } else if (MesesTrabajados >= 120) {//diez años o mas
                    utilidad = salario * 0.20;
                }
            }
        }
    }
    resultadoDiv.textContent = `El dinero que recibira de utilidades es: $${utilidad} `;
});

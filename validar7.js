const form = document.getElementById("calculadoraDrecibido");
const resultadoDiv = document.getElementById("resultado");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const DineroPorHora = parseFloat(document.getElementById("DineroPorHora").value);
    const HorasTrabajadas = parseFloat(document.getElementById("HorasTrabajadas").value);

    if(isNaN(HorasTrabajadas) || isNaN(DineroPorHora) || HorasTrabajadas<0 || DineroPorHora<0){
        resultadoDiv.textContent = "Por favor ingresa valores válidos.";
        return;
    }

    let totalRecibido = 0;

    if (HorasTrabajadas <= 40) {// si las horas trabajadas son menores o iguales a 40 se le pagan las horas trabajadas normales
        totalRecibido = HorasTrabajadas * DineroPorHora;
    } else {
        const HorasExtras = HorasTrabajadas - 40; //las horas extras son las horas trabajadas a partir de las 40
        if (HorasExtras <= 8) {// si las horas extras son menores o iguales a 8 se le pagan las horas extras al doble
            totalRecibido = (40 * DineroPorHora) + (HorasExtras * DineroPorHora * 2);
        } else {//si las horas extras son mayores a 8 se le pagan las primeras 8 al doble y las restantes al triple
            const HorasExtrasTriples = HorasExtras - 8;
            totalRecibido = (40 * DineroPorHora) + (8 * DineroPorHora * 2) + (HorasExtrasTriples * DineroPorHora * 3);
        }
    }

    resultadoDiv.textContent = `El dinero total recibido es: $${totalRecibido} `;
});

const form = document.getElementById("Calculadora de edad");
const resultadoDiv = document.getElementById("resultado");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    const fechaNacimiento = new Date(document.getElementById("fechaNacimiento").value); //new date convierte la fecha ingresada en el calendario a un objeto de fecha
    const fechaActual = new Date(); //new date obtiene la fecha actual del sistema
    if (isNaN(fechaNacimiento.getTime))||fechaNacimiento > fechaActual) {
        resultadoDiv.textContent = "Por favor, ingresa una fecha válida.";
        return;
    }
        
    
    const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear(); //getfullyear obtiene el año completo de la fecha actual y resta el año de la fecha de nacimiento
    const mesActual = fechaActual.getMonth();//getmonth obtiene el mes de la fecha actual
    const diaActual = fechaActual.getDate(); //getdate obtiene el dia de la fecha actual

    if (mesActual < fechaNacimiento.getMonth() || (mesActual === fechaNacimiento.getMonth() && diaActual < fechaNacimiento.getDate())) {//si el mes actual es menor que el mes de nacimiento o si es el mismo mes pero el dia actual es menor que el dia de nacimiento, significa que no ha cumplido años este año, por lo que se le resta 1 a la edad
        edad = edad - 1;
    }

    resultadoDiv.textContent = `Tu edad es ${edad} años.`;
});

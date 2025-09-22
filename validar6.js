const form = document.getElementById("traductor de numeros");
const resultadoDiv = document.getElementById("resultado");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    const palabra = document.getElementById("palabra").value.toLowerCase();

    const numeros = {
        "cero": 0,
        "uno": 1,
        "dos": 2,
        "tres": 3,
        "cuatro": 4,
        "cinco": 5,
        "seis": 6,
        "siete": 7,
        "ocho": 8,
        "nueve": 9
    };

    function palabrasANumeros(arr) {
        return arr.map(p => numeros[p.toLowerCase()] !== undefined ? numeros[p.toLowerCase()] : -1);
    }

    const numeroEnCifra = palabrasANumeros([palabra])[0]; // Busca la palabra ingresada en el objeto numeros y obtiene el número correspondiente

    if (numeroEnCifra !== undefined) { //si la palbra no esta indefinida en el arreglo numeros la muestra en el div resultado
        resultadoDiv.textContent = `El número en cifras es: ${numeroEnCifra}`;
    } else {
        resultadoDiv.textContent = "-1";
    }
});
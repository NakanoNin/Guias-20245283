// Accedemos a los elementos del DOM
const campoNumero = document.getElementById("idTxtNumero");
const botonCalcular = document.getElementById("idBtnCalcular");
const divResultado = document.getElementById("idDivResultado");

// Agregamos el evento click al botón
botonCalcular.addEventListener("click", calcular);

// Función recursiva para calcular el factorial
function calcularFactorial(numero) {
    // Caso base: factorial de 0 o 1 es 1
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        // Llamada recursiva: n * factorial(n-1)
        return numero * calcularFactorial(numero - 1);
    }
}

// Función principal
function calcular() {
    let numero = Number(campoNumero.value); // Convertimos el texto a número
    
    // Validamos que sea un número positivo
    if (isNaN(numero) || numero < 0) {
        alert("Por favor ingrese un número válido y mayor o igual a 0");
        campoNumero.focus();
        return;
    }

    // Llamamos a la función recursiva
    let resultado = calcularFactorial(numero);
    
    // Mostramos el resultado
    divResultado.innerHTML = `El factorial de ${numero} es: ${resultado}`;
}
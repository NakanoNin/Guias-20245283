const parrafo = document.querySelector("#idParrafo");

const btnSumar = document.querySelector("#btnSumar");
const btnRestar = document.querySelector("#btnRestar");
const btnMultiplicar = document.querySelector("#btnMultiplicar");
const btnDividir = document.querySelector("#btnDividir");

btnSumar.addEventListener("click", sumar);
btnRestar.addEventListener("click", restar);
btnMultiplicar.addEventListener("click", multiplicar);
btnDividir.addEventListener("click", dividir);

function sumar() {
    let a = parseFloat(prompt("Ingrese el primer número a sumar"));
    let b = parseFloat(prompt("Ingrese el segundo número a sumar"));
    parrafo.innerHTML = `${a} + ${b} = ${a + b}`;
}

function restar() {
    let a = parseFloat(prompt("Ingrese el primer número a restar"));
    let b = parseFloat(prompt("Ingrese el segundo número a restar"));
    parrafo.innerHTML = `${a} - ${b} = ${a - b}`;
}

function multiplicar() {
    let a = parseFloat(prompt("Ingrese el primer número"));
    let b = parseFloat(prompt("Ingrese el segundo número"));
    parrafo.innerHTML = `${a} × ${b} = ${a * b}`;
}

function dividir() {
    let a = parseFloat(prompt("Ingrese el primer número a dividir"));
    let b = parseFloat(prompt("Ingrese el segundo número a dividir"));

    if (b === 0) {
        parrafo.innerHTML = `El valor ${b} no se puede dividir entre 0`;
    } else {
        parrafo.innerHTML = `${a} ÷ ${b} = ${a / b}`;
    }
}

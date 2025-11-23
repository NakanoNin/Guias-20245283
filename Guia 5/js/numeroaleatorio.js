let numeroAleatorio = Math.floor(Math.random() * 25) + 1;
let intentos = 0;
let intentosMax = 3;
function generarNumeroAleatorio() {
    let p = document.querySelector("#idParrafo");
    let numero = prompt("Adivine el número (1 al 25):");
    numero = parseInt(numero);
    if (numero === numeroAleatorio) {
        p.innerHTML = "¡Adivinó! El número era " + numeroAleatorio;
        return;
    }
    intentos++;
    if (intentos < intentosMax) {

        let texto = "";
        if (numero < numeroAleatorio) {
            texto = "El número que busca es más alto.";
        } else {
            texto = "El número que busca es más bajo.";
        }
        p.innerHTML = "Incorrecto. " + texto + "<br>Intentos restantes: " + (intentosMax - intentos);
    } else {
        p.innerHTML = "Se acabaron los intentos. El número era " + numeroAleatorio;
    }
}

// agarro los inputs para cambiar colores
const fondo = document.getElementById("idFondo");
const titulos = document.getElementById("idTitulos");
const parrafos = document.getElementById("idParrafos");

// botones para tamaño
const btnAumentar = document.getElementById("idBtnAumentar");
const btnDisminuir = document.getElementById("idBtnDisminuir");

// cambiar color del fondo
fondo.oninput = () => {
    document.body.style.backgroundColor = fondo.value;
};

// cambiar color de los h1
titulos.oninput = () => {
    const listaH1 = document.getElementsByTagName("h1");

    for (const h of listaH1) {
        h.style.color = titulos.value;
    }
};

// cambiar color de p
parrafos.oninput = () => {
    const listaP = document.getElementsByTagName("p");

    for (const p of listaP) {
        p.style.color = parrafos.value;
    }
};

// tamaño de letra
let tamaño = 16;

btnAumentar.onclick = () => {
    tamaño += 2;
    document.body.style.fontSize = tamaño + "px";
};

btnDisminuir.onclick = () => {
    tamaño -= 2;
    document.body.style.fontSize = tamaño + "px";
};

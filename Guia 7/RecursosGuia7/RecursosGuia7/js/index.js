// agarro los botones del index
const buttonSpan = document.getElementById("idBtnSpan");
const buttonP = document.getElementById("idBtnP");
const buttonDiv = document.getElementById("idBtnDiv");
const buttonButton = document.getElementById("idBtnButton");

// funcion para contar etiquetas y mostrarlas en consola
const contarElementos = function (etiqueta) {

    // busco todas las etiquetas de ese tipo
    const lista = document.getElementsByTagName(etiqueta);

    console.log(lista); // muestro todo el arreglo

    // recorro y muestro cada una
    for (const e of lista) {
        console.log(e);
    }

    alert("revisar consola (f12)");
};

// eventos de los botones
buttonSpan.onclick = () => contarElementos("span");
buttonP.onclick = () => contarElementos("p");
buttonDiv.onclick = () => contarElementos("div");
buttonButton.onclick = () => contarElementos("button");

const containerArreglo = document.querySelector("#idContainerArreglo");
const containerOrdenado = document.querySelector("#idContainerOrdenado");
const btnAgregar = document.querySelector("#idBtnAgregar");
const btnOrdenar = document.querySelector("#idBtnOrdenar");

btnAgregar.addEventListener("click", agregarElemento);
btnOrdenar.addEventListener("click", ordenarElementos);

let arreglo = new Array();

function agregarElemento() {
    const numero = document.querySelector("#inputNumero").value;

    if (numero !== "") {
        // Agregamos al arreglo
        arreglo.push(numero);

        // Creamos visualmente el elemento (cajita)
        let caja = document.createElement("div");
        caja.className = "col-md-1 bg-white border p-2 text-center";
        caja.textContent = numero;

        containerArreglo.appendChild(caja);
        
        // Limpiamos el input
        document.querySelector("#inputNumero").value = "";
        document.querySelector("#inputNumero").focus();
    } else {
        alert("Debe ingresar un número");
    }
}

function ordenarElementos() {
    // Limpiamos el contenedor ordenado visualmente
    containerOrdenado.innerHTML = "";

    // Ordenamos el arreglo. Ojo: sort() por defecto ordena alfabéticamente, 
    // usamos una función de comparación para ordenar números correctamente (a - b).
    // En la guía original a veces omiten esto, pero es necesario para números.
    arreglo.sort((a, b) => a - b);

    for (let i of arreglo) {
        let caja = document.createElement("div");
        caja.className = "col-md-1 bg-white border p-2 text-center";
        caja.textContent = i;
        containerOrdenado.appendChild(caja);
    }
}
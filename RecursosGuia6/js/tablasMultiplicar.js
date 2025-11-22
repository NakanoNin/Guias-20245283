// Accedemos al contenedor y elementos
const containerResultado = document.querySelector("#idContainerResultado");
const btnCalcular = document.querySelector("#idBtnCalcular");

// Evento click
btnCalcular.addEventListener("click", calcularTabla);

function calcularTabla() {
    const inputTabla = document.querySelector("#inputTabla").value;
    
    // Validamos que sea un número válido
    let contador = 1;
    if (inputTabla > 0) {
        let tabla = `<table class="table table-striped">
                        <thead>
                            <tr>
                                <th colspan="5" class="text-center">Tabla de multiplicar del ${inputTabla}</th>
                            </tr>
                        </thead>
                        <tbody>`;
        
        // Ciclo DO-WHILE según la guía (aunque también funcionaría con FOR)
        do {
            let resultado = contador * inputTabla;
            tabla += `<tr>
                        <td class="text-center">${contador}</td>
                        <td class="text-center">x</td>
                        <td class="text-center">${inputTabla}</td>
                        <td class="text-center">=</td>
                        <td class="text-center">${resultado}</td>
                      </tr>`;
            contador++;
        } while (contador <= 10);

        tabla += "</tbody></table>";
        containerResultado.innerHTML = tabla;
    } else {
        alert("No se ha ingresado un número válido");
    }
}
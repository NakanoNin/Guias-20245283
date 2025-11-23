// Función para generar el HTML de una fila
const generarFila = (tipo, fila, columnas) => {
    let tr = `<tr>`;
    for (let c = 0; c < columnas; c++) {
        // Si es encabezado usamos 'th', si es cuerpo usamos 'td'
        if (tipo === "th") {
            tr += `<th scope="col">Titulo ${c + 1}</th>`;
        } else {
            tr += `<td>Celda ${fila},${c + 1}</td>`;
        }
    }
    tr += `</tr>`;
    return tr;
};

// Función para generar toda la tabla
const generarTabla = (filas, columnas) => {
    let tabla = `<div class="table-responsive">
                    <table class="table table-striped table-hover table-bordered">`;
    
    // Generamos encabezados
    tabla += `<thead>${generarFila("th", 0, columnas)}</thead>`;
    
    // Generamos el cuerpo
    tabla += `<tbody>`;
    for (let f = 1; f <= filas; f++) {
        tabla += generarFila("td", f, columnas);
    }
    tabla += `</tbody></table></div>`;
    
    return tabla;
};

// Función del botón Crear
const crearTabla = () => {
    // Obtenemos valores de los inputs
    const filas = document.getElementById("idNumFilas").value;
    const columnas = document.getElementById("idNumColumnas").value;
    
    // Validamos que no estén vacíos
    if (filas != "" && columnas != "") {
        const contenedor = document.getElementById("idDivResultado");
        contenedor.innerHTML = generarTabla(filas, columnas);
    } else {
        alert("Por favor ingrese el número de filas y columnas");
    }
};

// Asignamos el evento al botón
document.getElementById("idBtnCrear").addEventListener("click", crearTabla);
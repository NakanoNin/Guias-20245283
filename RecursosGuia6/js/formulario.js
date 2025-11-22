// Arreglo global para guardar los pacientes
let arrayPacientes = [];

// Variables para controlar la edición
let editando = false;      // Bandera: false = guardando nuevo, true = editando
let idPacienteEditar = -1; // Índice del paciente que se está editando

// Referencias a los inputs del formulario
const inputNombre = document.getElementById("nombre");
const inputApellido = document.getElementById("apellido");
const inputFecha = document.getElementById("fechaNacimiento");
const inputPais = document.getElementById("pais");
const inputDireccion = document.getElementById("direccion");

// Función principal: Agregar o Actualizar Paciente
function agregarPaciente() {
    // Validación simple
    if (inputNombre.value === "" || inputApellido.value === "") {
        alert("Por favor llena los campos obligatorios (Nombre y Apellido)");
        return;
    }

    // Obtenemos el sexo seleccionado (radio button)
    let sexoSeleccionado = document.querySelector('input[name="sexo"]:checked').value;

    // Creamos el objeto paciente
    let paciente = {
        nombre: inputNombre.value,
        apellido: inputApellido.value,
        fecha: inputFecha.value,
        sexo: sexoSeleccionado,
        pais: inputPais.value,
        direccion: inputDireccion.value
    };

    // Verificamos si estamos editando o agregando uno nuevo
    if (editando === true) {
        // --- MODO EDICIÓN ---
        arrayPacientes[idPacienteEditar] = paciente; // Reemplazamos en la posición guardada
        alert("Paciente actualizado exitosamente");
        
        // Reseteamos las variables de control
        editando = false;
        idPacienteEditar = -1;
        
        // Restauramos el botón a su estado original
        let btn = document.getElementById("btnAgregar");
        btn.innerText = "Agregar Paciente";
        btn.classList.remove("btn-warning");
        btn.classList.add("btn-primary");

    } else {
        // --- MODO AGREGAR ---
        arrayPacientes.push(paciente); // Agregamos al final del arreglo
        alert("Paciente registrado");
    }

    // Limpiamos el formulario y actualizamos la tabla
    document.getElementById("formulario").reset();
    imprimirPacientes(); 
}

// Función para mostrar los pacientes en la tabla
function imprimirPacientes() {
    let tabla = document.getElementById("cuerpoTabla");
    let html = "";

    // Recorremos el arreglo. 'i' es el índice (0, 1, 2...)
    arrayPacientes.forEach((elemento, i) => {
        html += `
            <tr>
                <td>${i + 1}</td>
                <td>${elemento.nombre}</td>
                <td>${elemento.apellido}</td>
                <td>${elemento.fecha}</td>
                <td>${elemento.sexo}</td>
                <td>${elemento.pais}</td>
                <td>${elemento.direccion}</td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="cargarDatosEdicion(${i})">
                        <i class="bi bi-pencil-square"></i> Editar
                    </button>
                    <button class="btn btn-danger btn-sm" onclick="eliminarPaciente(${i})">
                        <i class="bi bi-trash3-fill"></i> Eliminar
                    </button>
                </td>
            </tr>
        `;
    });

    tabla.innerHTML = html;
}

// --- FUNCIONES DEL EJERCICIO COMPLEMENTARIO ---

// Función para Eliminar
function eliminarPaciente(indice) {
    let confirmar = confirm("¿Seguro que quiere eliminar este paciente?");
    if (confirmar) {
        arrayPacientes.splice(indice, 1); // Elimina 1 elemento en la posición 'indice'
        imprimirPacientes(); // Redibujamos la tabla
        alert("Paciente eliminado");
    }
}

// Función para Cargar datos al formulario (Editar)
function cargarDatosEdicion(indice) {
    // Obtenemos el paciente del arreglo
    let paciente = arrayPacientes[indice];

    // Llenamos los inputs con sus datos
    inputNombre.value = paciente.nombre;
    inputApellido.value = paciente.apellido;
    inputFecha.value = paciente.fecha;
    inputPais.value = paciente.pais;
    inputDireccion.value = paciente.direccion;
    
    // Para los radio buttons de sexo
    if (paciente.sexo === "Hombre") {
        document.getElementById("sexoM").checked = true;
    } else {
        document.getElementById("sexoF").checked = true;
    }

    // Activamos el modo edición
    editando = true;
    idPacienteEditar = indice;

    // Cambiamos el botón visualmente para indicar que vamos a actualizar
    let btn = document.getElementById("btnAgregar");
    btn.innerText = "Guardar Cambios";
    btn.classList.remove("btn-primary");
    btn.classList.add("btn-warning");
}
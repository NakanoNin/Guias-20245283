document.addEventListener("DOMContentLoaded", function () {
    // Accedemos al contenedor donde se mostrarán los estudiantes
    const containerEstudiantes = document.querySelector("#idContainerEstudiantes");
    
    // Accedemos a cada botón por medio de la API DOM
    const btnAddEstudiante = document.querySelector("#idBtnAgregarEstudiante");
    const btnViewEstudiantes = document.querySelector("#idBtnMostrarEstudiantes");

    // Agregamos el evento click a los botones
    btnAddEstudiante.addEventListener("click", addEstudiantes);
    btnViewEstudiantes.addEventListener("click", viewEstudiantes);

    // Arreglo de forma global
    let arrayEstudiantes = new Array();

    function addEstudiantes() {
        const inputCarnet = document.querySelector("#inputCarnet").value.toString().toUpperCase();
        const inputNombre = document.querySelector("#inputNombre").value.toString().toUpperCase();
        const inputApellidos = document.querySelector("#inputApellidos").value.toString().toUpperCase();

        if (inputCarnet != "" && inputNombre != "" && inputApellidos != "") {
            // Agregamos los datos al arreglo
            arrayEstudiantes.push(new Array(inputCarnet, inputNombre, inputApellidos));
            alert("Se registró el nuevo estudiante");
            
            // Limpiando campos
            document.querySelector("#inputCarnet").value = "";
            document.querySelector("#inputNombre").value = "";
            document.querySelector("#inputApellidos").value = "";
            document.querySelector("#inputCarnet").focus();
        } else {
            alert("Faltan campos que completar");
        }
    }

    function viewEstudiantes() {
        // Validando que existan estudiantes
        let totalEstudiantes = arrayEstudiantes.length;
        if (totalEstudiantes > 0) {
            let tableHtml = "";
            // Recorremos el arreglo para llenar la tabla
            for (let i = 0; i < totalEstudiantes; i++) {
                tableHtml += "<tr>";
                tableHtml += `<td>${arrayEstudiantes[i][0]}</td>`; // Carnet
                tableHtml += `<td>${arrayEstudiantes[i][1]}</td>`; // Nombre
                tableHtml += `<td>${arrayEstudiantes[i][2]}</td>`; // Apellido
                tableHtml += "</tr>";
            }
            containerEstudiantes.innerHTML = tableHtml;
        } else {
            alert("No se han registrado estudiantes");
        }
    }
});
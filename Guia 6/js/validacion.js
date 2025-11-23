function validarFormulario() {
    // 1. Accesos al DOM
    let carnet = document.getElementById("inputCarnet").value;
    let nombre = document.getElementById("inputNombre").value;
    let dui = document.getElementById("inputDui").value;
    let nit = document.getElementById("inputNit").value;
    let fecha = document.getElementById("inputFecha").value;
    let correo = document.getElementById("inputCorreo").value;
    let edad = document.getElementById("inputEdad").value;

    // 2. Definición de Expresiones Regulares 
    // Carnet
    let reCarnet = /^[A-Z]{2}[0-9]{3}$/;
    
    // Nombre: Solo letras y espacios
    let reNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    
    // DUI
    let reDui = /^[0-9]{8}-[0-9]{1}$/;
    
    // NIT
    let reNit = /^[0-9]{4}-[0-9]{6}-[0-9]{3}-[0-9]{1}$/;
    
    // Fecha
    let reFecha = /^(0[1-9]|[12][0-9]|3[01])[-/](0[1-9]|1[012])[-/](19|20)\d\d$/;
    
    // Correo
    let reCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
    // Edad
    let reEdad = /^[0-9]+$/;

    // 3. Validaciones
    if (!reCarnet.test(carnet)) {
        alert("Error en Carnet: Debe tener 2 mayúsculas y 3 números (Ej: AB001)");
        return;
    }
    if (!reNombre.test(nombre)) {
        alert("Error en Nombre: Solo se permiten letras.");
        return;
    }
    if (!reDui.test(dui)) {
        alert("Error en DUI: Formato requerido ########-#");
        return;
    }
    if (!reNit.test(nit)) {
        alert("Error en NIT: Formato requerido ####-######-###-#");
        return;
    }
    if (!reFecha.test(fecha)) {
        alert("Error en Fecha: Use formato DD-MM-YYYY (Ej: 15-08-2000)");
        return;
    }
    if (!reCorreo.test(correo)) {
        alert("Error en Correo: Formato inválido.");
        return;
    }
    if (!reEdad.test(edad)) {
        alert("Error en Edad: Ingrese solo números.");
        return;
    }

    // Si pasa todas las validaciones
    alert("¡Éxito! Todos los datos son válidos.");
    document.getElementById("formValidacion").reset();
}
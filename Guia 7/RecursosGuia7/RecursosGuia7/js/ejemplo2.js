// boton para validar todo
const btnRegistro = document.getElementsByName("btnRegistro")[0]

// modal
const modal = new bootstrap.Modal(document.getElementById("idModal"), {})
const bodyModal = document.getElementById("idBodyModal")

// regex para email basico
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// cuando presiono el boton empiezo a validar el formulario
btnRegistro.onclick = () => {

    const form = document.forms.frmRegistro

    // agarro todos los campos
    const nombre = form.nombre.value.trim()
    const apellido = form.apellido.value.trim()
    const correo = form.correo.value.trim()
    const fecha = form.fecha.value
    const pass1 = form.password.value.trim()
    const pass2 = form.password2.value.trim()
    const carrera = form.carrera.value
    const pais = form.pais.value

    // reviso intereses
    const intereses = form.querySelectorAll("input[type='checkbox']")
    let algunoInteres = false

    intereses.forEach(i => {
        if (i.checked) algunoInteres = true
    })

    // validaciones basicas
    if (nombre === "" || apellido === "") {
        alert("campos vacios")
        return
    }

    if (correo === "" || !regexEmail.test(correo)) {
        alert("correo no valido")
        return
    }

    // fecha
    const hoy = new Date()
    const fechaUser = new Date(fecha)

    if (fecha === "" || fechaUser > hoy) {
        alert("fecha no valida")
        return
    }

    if (pass1 === "" || pass2 === "" || pass1 !== pass2) {
        alert("las contraseñas no coinciden")
        return
    }

    if (!algunoInteres) {
        alert("escoja un interes")
        return
    }

    if (carrera === "") {
        alert("escoja una carrera")
        return
    }

    if (pais === "") {
        alert("escoja un pais")
        return
    }

    // si llega hasta aqui es porque todo esta bien
    mostrarTabla(form)
}

// muestro los datos en una tabla
const mostrarTabla = function (form) {

    bodyModal.innerHTML = ""

    const tabla = document.createElement("table")
    tabla.className = "table table-striped table-bordered"

    const tbody = document.createElement("tbody")

    // funcion para meter filas a la tabla
    const agregarFila = (campo, valor) => {
        const tr = document.createElement("tr")

        const tdCampo = document.createElement("td")
        tdCampo.textContent = campo

        const tdValor = document.createElement("td")
        tdValor.textContent = valor

        tr.appendChild(tdCampo)
        tr.appendChild(tdValor)
        tbody.appendChild(tr)
    }

    agregarFila("nombre", form.nombre.value)
    agregarFila("apellido", form.apellido.value)
    agregarFila("correo", form.correo.value)
    agregarFila("fecha nacimiento", form.fecha.value)
    agregarFila("carrera", form.carrera.value)
    agregarFila("pais", form.pais.value)

    // intereses seleccionados
    const intereses = []
    form.querySelectorAll("input[type='checkbox']").forEach(i => {
        if (i.checked) intereses.push(i.value)
    })

    agregarFila("intereses", intereses.join(", "))

    agregarFila("contraseña", form.password.value)

    tabla.appendChild(tbody)
    bodyModal.appendChild(tabla)

    modal.show()
}

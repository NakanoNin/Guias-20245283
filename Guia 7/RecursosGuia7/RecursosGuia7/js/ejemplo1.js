// agarro el formulario donde voy a meter los controles nuevos
const newForm = document.getElementById("idNewForm")

// botones que ya trae la guia
const buttonCrear = document.getElementById("idBtnCrear")
const buttonAddElemento = document.getElementById("idBtnAddElemento")

// este es el boton nuevo que cree para validar los controles
const buttonValidar = document.getElementById("idBtnValidar")

// este es el select para elegir que tipo de control quiero
const cmbElemento = document.getElementById("idCmbElemento")

// campos del modal
const tituloElemento = document.getElementById("idTituloElemento")
const nombreElemento = document.getElementById("idNombreElemento")

// modal
const modal = new bootstrap.Modal(document.getElementById("idModal"), {})

// aqui reviso que el tipo de elemento este elegido
const verificarTipoElemento = function () {
    if (cmbElemento.value !== "") {
        modal.show()
    } else {
        alert("seleccione un tipo primero")
    }
}

buttonCrear.onclick = () => verificarTipoElemento()

// aqui valido si el id ya existe
const validarIdRepetido = function (idNuevo) {
    const existe = document.getElementById(idNuevo)

    if (existe) {
        alert("este id ya existe")
        return false
    }

    return true
}

// crear un select
const newSelect = function () {

    // creo el select
    const select = document.createElement("select")
    select.id = nombreElemento.value
    select.className = "form-select"

    // aqui meto 4 opciones nada mas
    for (let i = 1; i <= 4; i++) {
        const op = document.createElement("option")
        op.value = "op" + i
        op.textContent = "opcion " + i
        select.appendChild(op)
    }

    // el label
    const label = document.createElement("label")
    label.setAttribute("for", nombreElemento.value)
    label.textContent = tituloElemento.value

    // muestro el id abajo
    const info = document.createElement("span")
    info.textContent = "id: " + nombreElemento.value

    const div = document.createElement("div")
    div.className = "form-floating mb-3"

    div.appendChild(select)
    div.appendChild(label)

    newForm.appendChild(info)
    newForm.appendChild(div)
}

// crear radio o checkbox
const newRadioCheckbox = function (tipo) {

    const input = document.createElement("input")
    input.id = nombreElemento.value
    input.type = tipo
    input.className = "form-check-input"

    const label = document.createElement("label")
    label.className = "form-check-label"
    label.textContent = tituloElemento.value
    label.setAttribute("for", nombreElemento.value)

    const info = document.createElement("span")
    info.textContent = "id: " + nombreElemento.value

    const div = document.createElement("div")
    div.className = "form-check mb-2"

    div.appendChild(input)
    div.appendChild(label)

    newForm.appendChild(info)
    newForm.appendChild(div)
}

// crear inputs normales
const newInput = function (tipo) {

    let input

    if (tipo === "textarea") {
        input = document.createElement("textarea")
    } else {
        input = document.createElement("input")
        input.type = tipo
    }

    input.id = nombreElemento.value
    input.className = "form-control"
    input.placeholder = tituloElemento.value

    const label = document.createElement("label")
    label.setAttribute("for", nombreElemento.value)
    label.textContent = tituloElemento.value

    const info = document.createElement("span")
    info.textContent = "id: " + nombreElemento.value

    const div = document.createElement("div")
    div.className = "form-floating mb-3"

    div.appendChild(input)
    div.appendChild(label)

    newForm.appendChild(info)
    newForm.appendChild(div)
}

// aqui decido que control crear
buttonAddElemento.onclick = () => {

    if (tituloElemento.value === "" || nombreElemento.value === "") {
        alert("complete titulo y nombre")
        return
    }

    // reviso que no se repita el id
    if (!validarIdRepetido(nombreElemento.value)) {
        return
    }

    const tipo = cmbElemento.value

    if (tipo === "select") {
        newSelect()
    } else if (tipo === "radio" || tipo === "checkbox") {
        newRadioCheckbox(tipo)
    } else {
        newInput(tipo)
    }
}

// validacion de todos los controles agregados
buttonValidar.onclick = () => {

    const hijos = newForm.querySelectorAll("input, select, textarea")
    let todoBien = true

    hijos.forEach(control => {

        // si es input normal
        if (control.tagName === "INPUT" || control.tagName === "TEXTAREA") {

            if (control.type === "radio" || control.type === "checkbox") {

                const grupo = newForm.querySelectorAll(`input[name='${control.name}']`)
                let alguno = false

                grupo.forEach(g => {
                    if (g.checked) alguno = true
                })

                if (!alguno) todoBien = false

            } else {

                if (control.value.trim() === "") todoBien = false
            }

        } else if (control.tagName === "SELECT") {
            if (control.value === "") todoBien = false
        }

    })

    if (todoBien) {
        alert("todo bien")
    } else {
        alert("faltan datos")
    }
}

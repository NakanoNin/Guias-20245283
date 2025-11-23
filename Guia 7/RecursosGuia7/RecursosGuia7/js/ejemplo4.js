// aqui se agrega todo lo que va creando el usuario
const pagina = document.getElementById("idPagina");

// botones para agregar cosas
const btnPagina = document.getElementById("idAgregarPagina");
const btnMenu = document.getElementById("idAgregarMenu");
const btnTitulo = document.getElementById("idAgregarTitulo");
const btnParrafo = document.getElementById("idAgregarParrafo");

// crea un contenedor grande (como una pagina nueva)
btnPagina.onclick = () => {

    const div = document.createElement("div");
    div.className = "p-3 border mb-3";
    div.textContent = "pagina creada";

    pagina.appendChild(div);
};

// agrega un menú simple
btnMenu.onclick = () => {

    const nav = document.createElement("nav");
    nav.className = "nav nav-pills mb-3";

    nav.innerHTML = `
        <a class="nav-link active">inicio</a>
        <a class="nav-link">acerca</a>
        <a class="nav-link">contacto</a>
    `;

    pagina.appendChild(nav);
};

// agrega un título
btnTitulo.onclick = () => {

    const h1 = document.createElement("h1");
    h1.textContent = "titulo agregado";

    pagina.appendChild(h1);
};

// agrega un párrafo
btnParrafo.onclick = () => {

    const p = document.createElement("p");
    p.textContent = "parrafo agregado con js";

    pagina.appendChild(p);
};

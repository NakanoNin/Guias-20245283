const containerResultado = document.querySelector("#idContainerResultado");
const btnPromedio = document.querySelector("#idBtnPromedio");

btnPromedio.addEventListener("click", generarEstudiantes);

function generarEstudiantes() {
    // Solicitamos número de estudiantes
    let alumnos = prompt("Ingrese el número de estudiantes a registrar:");
    
    // Validamos que sea un número
    if (alumnos > 0) {
        let html = "<ul class='list-group'>";
        let calificacion = 0;
        let promedio = 0;

        // Ciclo para cada estudiante
        for (let i = 1; i <= alumnos; i++) {
            let nombre = prompt(`Ingrese el nombre del estudiante ${i}:`);
            let nota = prompt(`Ingrese la calificación de ${nombre}:`);
            
            // Sumamos la nota para el promedio general
            calificacion += parseFloat(nota);
            
            html += `<li class='list-group-item d-flex justify-content-between align-items-center'>
                        ${nombre}
                        <span class='badge bg-primary rounded-pill'>${nota}</span>
                     </li>`;
        }
        
        html += "</ul>";
        
        // Calculamos promedio
        promedio = (calificacion / alumnos).toFixed(2);
        
        html += `<div class="alert alert-info mt-3" role="alert">
                    El promedio general de calificaciones es: <strong>${promedio}</strong>
                 </div>`;
        
        containerResultado.innerHTML = html;
    } else {
        alert("Debe ingresar un número válido de estudiantes.");
    }
}
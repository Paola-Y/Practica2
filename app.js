
function mostrarSeccion(idSeccion) {
            // Ocultamos todas las secciones que tengan la clase 'seccion'
            let secciones = document.querySelectorAll('.seccion');
            secciones.forEach(seccion => {
                seccion.classList.remove('activa');
            });

            // Buscamos la sección que el usuario seleccionó y le agregamos la clase 'activa'
            let seccionSeleccionada = document.getElementById(idSeccion);
            if (seccionSeleccionada) {
                seccionSeleccionada.classList.add('activa');
            }
        }
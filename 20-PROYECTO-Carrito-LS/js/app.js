// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners() {
    // Cuando el documento cargue, buscamos en el localstorage
    document.addEventListener('DOMContentLoaded', () => {
        articulosCarrito = JSON.parse( localStorage.getItem('carrito') ) || [];
        carritoHTML();
    })

    // Cuando agregas un curso presionando "Agergar al Carrito"
    listaCursos.addEventListener('click', agregarCurso);

    // Elimina los cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    // Vaciar el carrito de compras
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}


// Funciones
function agregarCurso(e) {

    e.preventDefault();

    if ( e.target.classList.contains('agregar-carrito') ) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso( cursoSeleccionado );
    }
}

// Elimina un curso del carrito
function eliminarCurso(e) {
    if ( e.target.classList.contains('borrar-curso') ) {
        const cursoId = e.target.getAttribute('data-id');

        // Elimina del arreglo de articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId );

        carritoHTML(); // Iterar sobre el carrito y mostrar HTML
    }
}

function vaciarCarrito() {
    // reseteamos el arreglo
    articulosCarrito = [];
    // limpiamos el html
    carritoHTML();
}

// Leer el contenido del HTML al que le dimos click y extrae la informacion del curso
function leerDatosCurso( curso ) {
    // Crear objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    // Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id );

    // Agregar elementos al arreglo de carrito
    if( existe ) {
        // actualizamos la cantidad
        const cursos = articulosCarrito.map( curso => {
            if( curso.id === infoCurso.id ) {
                curso.cantidad++;
                return curso;     // retorna el objeto actualizado
            } else {
                return curso;     // retorna los objetos que no son los duplicados
            }
        });
        // reemplazamos el arreglo por nuestro nuevo arreglo que creo el .map
        articulosCarrito = [ ...cursos ];
    } else {
        articulosCarrito = [ ...articulosCarrito , infoCurso ];
    }

    carritoHTML();
};

function carritoHTML() {

    // Limpiar el HTML del carrito
    limpiarHTML()

    // Generar html de los elementos del carrito
    articulosCarrito.forEach( curso => {
        const row = document.createElement('tr');
        const { imagen, titulo, precio, cantidad, id } = curso;
        row.innerHTML = `
            <td>
                <img src="${imagen}" width="120"/>
            </td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}"> X <a/>
            </td>
        `
        contenedorCarrito.appendChild(row);
    });
    // Agregar el carrito de compras al storage
    sincronizarStorage();
}


function sincronizarStorage() {
    localStorage.setItem('carrito', JSON.stringify( articulosCarrito ));
}

// Elimina los cursos del tbody
function limpiarHTML() {
    while( contenedorCarrito.firstChild ) {
        contenedorCarrito.removeChild( contenedorCarrito.firstChild );
    }
}
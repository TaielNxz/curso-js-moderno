// Variables y Selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');


// Eventos
eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);

    formulario.addEventListener('submit', agregarGasto);
}


// Clases
class Presupuesto {

    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    nuevoGasto( gasto ){
        this.gastos = [ ...this.gastos , gasto ];
        this.calcularRestante();
    }

    calcularRestante() {
        const gastado = this.gastos.reduce( (total, gasto) => total + gasto.cantidad, 0 );
        this.restante = this.presupuesto - gastado;
    }

    eliminarGasto(id) {
        this.gastos = this.gastos.filter( gasto => gasto.id !== id );
        this.calcularRestante();
    }
}

class UI {

    insertarPresupuesto( cantidad ) {
        // extraer valores del objeto
        const { presupuesto , restante } = cantidad;

        // agregar valores en el HTML
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    imprimirAlerta( mensaje , tipo ) {

        // verificar si ya existe una alerta
        const existe = document.querySelector('.existe');
        if( existe ) {
            existe.remove();
        }

        // crear alerta
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert', 'existe');
        divMensaje.textContent = mensaje;

        // agregar estilos en base a el tipo de alerta
        if ( tipo === 'error' ) {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }

        // insertar en el HTML
        document.querySelector('.primario').insertBefore( divMensaje , formulario );   
        
        // Quitar del HTML luego de 3 segundos
        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    
    }

    mostrarGastos( gastos ) {
        
        // Elimina el HTML previo
        this.limpiarHTML();

        // Iterar sobre los gastos
        gastos.forEach( gasto => {

            const { cantidad , id , nombre } = gasto;

            // Crear un LI
            const nuevoGasto = document.createElement('li')
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
            // nuevoGasto.setAttribute('data-id', id);
            nuevoGasto.dataset.id = id;

            // Agregar el HTML del gasto
            nuevoGasto.innerHTML = `${nombre} <span class="badge badge-primary badge-pill">${cantidad}</span>`;

            // Boton apra borrar el gasto
            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
            btnBorrar.innerHTML = 'Borrar &times;'
            btnBorrar.onclick = () => {
                eliminarGasto(id);
            }
            nuevoGasto.appendChild(btnBorrar);

            // Agregar el HTML
            gastoListado.appendChild(nuevoGasto);
        })
    }

    limpiarHTML() {
        while ( gastoListado.firstChild ) {
            gastoListado.removeChild( gastoListado.firstChild );
        }
    }

    actualizarRestante( restante ) {
        document.querySelector('#restante').textContent = restante;
    }

    comprobarPresupuesto( presupuestoObj ) {
        const { restante , presupuesto } = presupuestoObj;

        const restanteDiv = document.querySelector('.restante');

        // queda el 25% del presupuesto
        if ( (presupuesto / 4) > restante ) {
            restanteDiv.classList.remove('alert-success', 'alert-warning');
            restanteDiv.classList.add('alert-danger');
        // queda el 50% del presupuesto
        } else if ( (presupuesto / 2) > restante ) {
            restanteDiv.classList.remove('alert-success');
            restanteDiv.classList.add('alert-warning');
        } else {
            restanteDiv.classList.remove('alert-danger', 'alert-warning');
            restanteDiv.classList.add('alert-success');
        }

        if ( restante <= 0 ) {
            ui.imprimirAlerta('El presupuesto se ha agotado', 'error');
            formulario.querySelector('button[type="submit"]').disabled = true;
        } else {
            formulario.querySelector('button[type="submit"]').disabled = false;
        }
    }
}


// Instanciar
const ui = new UI();
let presupuesto;


// Funciones
function preguntarPresupuesto() {
    const presupuestoUsuario = prompt('¿Cual es tu presupuesto?');

    if ( presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0 ) {
        window.location.reload();
    }

    // Presupuesto valido
    presupuesto = new Presupuesto(presupuestoUsuario);

    // crear el HTML
    ui.insertarPresupuesto( presupuesto );
}

function agregarGasto(e) {
    e.preventDefault();

    // Leer los datos del formulario
    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);

    // Validar los campos
    if ( nombre === '' || cantidad === '' ) {
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error');
        return;
    } else if ( cantidad <= 0 || isNaN(cantidad) ) {
        ui.imprimirAlerta('Cantidad no valida', 'error');
        return;
    }

    // Generar un objeto con el gasto
    const gasto = { nombre , cantidad , id: Date.now() };

    // Añade un nuevo gasto
    presupuesto.nuevoGasto( gasto );

    // Mensaje de todo bien
    ui.imprimirAlerta('Gasto agregado Correctamente');

    // Imprimir los gastos y Actualizar la cantidad restante
    const { gastos , restante } = presupuesto;
    ui.mostrarGastos( gastos );
    ui.actualizarRestante( restante );

    // Comprobar cuanto se gasto
    ui.comprobarPresupuesto( presupuesto );

    // Reinicia el formulario
    formulario.reset();
}

function eliminarGasto(id) {
    // Eliminar del objeto presupuseto
    presupuesto.eliminarGasto(id);

    // Eliminar del HTML
    const { gastos , restante } = presupuesto;
    ui.mostrarGastos( gastos );

    // Actualizar el texto y las clases del restante en el HTML
    ui.actualizarRestante( restante );
    ui.comprobarPresupuesto( gastos );
}
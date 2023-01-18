function imprimirAlerta(mensaje, tipo) {

    const alerta = document.querySelector('.alerta');

    if ( !alerta ) {
        // crear la alerta
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('px-4', 'py-3', 'rounded', 'max-2-lg', 'mx-auto', 'mt-6', 'text-center', 'border', 'alerta');

        // Agregar estilos dependiendo del tipo de alerta
        if( tipo === 'error' ) {
            divMensaje.classList.add('bg-red-100', 'border-red-400', 'text-red-700');
        } else {
            divMensaje.classList.add('bg-green-100', 'border-green-400', 'text-green-700');
        }

        // Agregar texto del mensaje
        divMensaje.textContent = mensaje;

        // Agregar al HTML
        formulario.appendChild(divMensaje);

        // Eliminar alerta luego de 3 segundos
        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }
}
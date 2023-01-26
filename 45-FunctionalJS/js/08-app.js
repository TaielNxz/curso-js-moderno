// Closures

const obtenerCliente = () => {
    const nombre = "Taiel";

    function muestraNombre() {
        console.log(nombre)
    }

    return muestraNombre;
}

const cliete = obtenerCliente();

cliete();
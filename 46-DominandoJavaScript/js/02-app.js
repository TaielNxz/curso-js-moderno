// Hoisting

obtenerCliente('Juan');
function obtenerCliente(nombre) {
    console.log(`El nombre del cliente es ${nombre}`);
}


obtenerCliente2('Pablo');
const obtenerCliente2 = function(nombre) {
    console.log(`El nombre del cliente es ${nombre}`);
}


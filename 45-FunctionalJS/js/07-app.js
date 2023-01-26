// Funciones que retornan funciones

const obtenerCliente = () => () => console.log('Taiel');

const fn = obtenerCliente();

fn();
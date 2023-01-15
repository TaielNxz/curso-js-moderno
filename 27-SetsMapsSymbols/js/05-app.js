/*
    * Symbols
    - no existen dos Symbols iguales
    - un symbol no es iterable
*/

// NO existen dos symbols iguales
const sym = Symbol();
const sym2 = Symbol();

if ( sym === sym2 ) {
    console.log('Son iguales!!!');
} else {
    console.log('Son diferentes!!!');
}


// Crear objeto que contiene symbols
const persona = {};
const nombre = Symbol();
const apellido = Symbol();

// Agregar nombre y apellido como llaves del objeto
persona[nombre] = 'Juan';
persona[apellido] = 'Juan';
persona.tipoCliente = 'Premium';
persona.saldo = 500;

// Las propiedades que utilizan un symbol no son iterables 
for (let i in persona) {
    // los Symbols no se imprimen
    console.log(i);
}


// Definir una descripcion del symbol
const nombreCliente = Symbol('Nombre del Cliente');
const cliente = {};
cliente[nombreCliente] = 'Pedro';

// Mostrar objeto con symbols
console.log(cliente);
// Acceder a un symbol 
console.log(clientep[nombreCliente])
// Descripcion de un symbol
console.log(nombreCliente);
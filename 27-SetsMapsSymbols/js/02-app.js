/*
    * WeakSet
    - solo se pueden agregar objetos
    - no existe el .size
    - no son iterables
*/

const cliente = {
    nombre: 'Juan',
    saldo: 100
}

// Crear WeakSet
const weakset = new WeakSet();

// Agregar objeto al weakset
weakset.add(cliente);

// Eliminar objeto del weakset
weakset.add(cliente);

// Retorna si existe el objeto dentro del weakset ( true o false )
console.log( weakset.has(cliente) );
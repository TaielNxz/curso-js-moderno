/*
    * Set
    - Valores del mismo tipo
    - Los sets solamente son valores, no son llave valor como los objetos
    - no tienen valores repetidos
    - son iterables
    - llave y valor son lo mismo ( ver ejemplo del forEach )
*/

// Crear un set
const carrito = new Set();

// Agregar elemento al set
carrito.add('Camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');

// Eliminar elemento del ser
carrito.delete('Disco #3');

// Eliminar todos los elementos del Set
carrito.clear('Disco #3');

// Retorna la cantidad de elementos
console.log( carrito.size );

// Revisar si el elemento se elimino ( true o false )
console.log( carrito.delete('Disco #3') );

// Revisar si el valor existe en el set ( true o false )
console.log( carrito.has('Camisa') );

// Iterar un set
carrito.forEach( (producto, index, pertenece) => {
    // retornan lo mismo
    console.log(producto);
    console.log(index);
    // retorna el set completo
    console.log(pertenece);
});

console.log(carrito);

// Del siguiente arreglo, eliminar los duplicados
const numeros = [10,20,30,40,50,60,10,20];
const noDuplicados = new Set(numeros);
console.log(noDuplicados);
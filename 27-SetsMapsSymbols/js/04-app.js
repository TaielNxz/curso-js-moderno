/*
    * WeakMap
    - no se pueden acceder a los valores con .get
    - no se pueden iterar
    - no se puede usar .size
*/

const producto = {
    idProducto : 10
}

// Crear WeakMap
const weakmap = new WeakMap();

// Agregar elemento al WeakMap
weakmap.set(producto, 'Monitor');

// Eliminar elemento al WeakMap
console.delete(producto);

// Revisar si el valor existe en el WeakMap ( true o false ) 
console.log( weakmap.has(producto) );


console.log(weakmap);
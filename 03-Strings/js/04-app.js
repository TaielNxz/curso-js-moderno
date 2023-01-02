const producto = '               Monitor 20 Pulgadas                   ';

console.log(producto);
console.log(producto.length);

// Eliminar caracteres en blanco del inicio...
console.log( producto.trimStart() );

// Eliminar caracteres en blanco del final
console.log( producto.trimEnd() );

// Eliminar caracteres en blanco de ambos lados
console.log( producto.trimStart().trimEnd() );

// Eliminar caracteres en blanco de ambos lados
console.log( producto.trim());
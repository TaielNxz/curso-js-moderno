const producto = 'Monitor 20 Pulgadas';
const precio = '30 USD';

// contactenar con una variable
console.log(producto.concat(precio));

// contactenar con un string
console.log(producto.concat('En Descuento'));

// concatenar en console.log con +
console.log( producto + " Con un precio de: " + producto);

// concatenar en console.log con ,
console.log( producto, " Con un precio de: ", producto);

// concatenar con template string
console.log(`El producto ${producto} tiene un precio de ${precio}`);
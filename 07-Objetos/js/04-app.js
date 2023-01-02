const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
}

// extraer valor del nombre
const nombre1 = producto.nombre;
console.log( nombre1 );

// extraer valor con Destructuring
const { nombre2 , precio , disponible } = producto;
console.log( nombre1 );
console.log( precio );
console.log( disponible );
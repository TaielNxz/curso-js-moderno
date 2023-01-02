// Destructuring en objetos
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
}

const { disponible } = producto;

console.log(disponible)

// Destructuring en arreglos
const numeros = [ 10 , 20 , 30 , 40 , 50 ];

const [ primero ,  , ...tercero ] = numeros;

console.log( primero );
console.log( tercero );
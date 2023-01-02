// el "use strinct" nos habilita el poder usar object metods
"use strinct";

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
}

// impide que se agregen y borren elementos
// pero si permite modificar los existentes
Object.seal( producto );

// verificar si el objeto esta sellado
console.log( Object.isSealed( producto ) );
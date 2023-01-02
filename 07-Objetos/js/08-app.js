// el "use strinct" nos habilita el poder usar object metods
"use strinct";

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
}

// impide que se modifique el objeto
Object.freeze( producto );

// verificar si el objeto esta conjelado
console.log( Object.isFrozen( producto ) );
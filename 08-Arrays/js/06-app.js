const carrito = [];

// Definir un producto
const producto = {
    nombre: "Monitor 32 Pulgadas",
    precio: 400
}

const producto2 = {
    nombre: "Celular",
    precio: 800
}

const producto3 = {
    nombre: "Teclado",    
    precio: 50
}

let resultado;

resultado = [ ...carrito , producto , producto2 , producto3 ]

resultado2 = [ producto3 , ...resultado ]


console.table(resultado);
console.table(resultado2);
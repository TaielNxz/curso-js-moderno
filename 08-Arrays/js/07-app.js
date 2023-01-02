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

// agregar al final del arreglo
carrito.push(producto2);
console.table(carrito);

// agregar al principio del arreglo
carrito.unshift(producto3);
console.table(carrito);

// Eliminar ultimo el emento del arreglo...
carrito.pop();
console.table(carrito);

// Eliminar del inicio del arreglo...
carrito.shift();
console.table(carrito);

// Eliminar x cantidad de lementos a partir de una posicion ( 1 , 4 ) --> a partir del elemento 1 elimino los 4 siguientes
carrito.splice(1, 1)
console.table(carrito);

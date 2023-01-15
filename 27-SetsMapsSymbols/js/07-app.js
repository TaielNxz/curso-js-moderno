/*
    * Generadores
*/

function *crearGenerador() {
    yield 1;
    yield 'Taiel';
    yield 3+3;
    yield true;
}

// const iterador = crearGenerador();

// console.log(iterador);
// console.log(iterador.next().value);
// console.log(iterador.next().done);
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador);


// Generador para carrito de compras
function *generadorCarrito( carrito ) {
   
    for ( let i = 0; i < carrito.length; i++ ) {
        yield carrito[i];
    }

}

const carritoArr = ['Producto 1', 'Producto 2', 'Producto 3'];

const iterador = generadorCarrito( carritoArr );

console.log( iterador.next() );
console.log( iterador.next() );
console.log( iterador.next() );
console.log( iterador.next() );
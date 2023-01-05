const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

meses.array.forEach( ( mes , i ) => {
    if( mes === 'Abril') {
        console.log(`Encontrado en el indice ${i}`);
    }
});

// Encontrar el indice de abril
// retorna -1 si no se pudo encontrar
const indice = meses.findIndex( mes => mes === 'Abril' );
console.log(indice);

// Encontrar un indice de un arreglo de objetos
// retorna el indice del primero que encuentra
const indice2 = carrito.findIndex( producto => producto.precio === 100 );
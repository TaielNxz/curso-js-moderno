// for (let i = 0; i <= 10; i += 2) {
//     if( i === 5 ) {
//         console.log('Este es el 5');
//         break;
//     }
//     console.log(`Numero:  ${i} `);
// }


const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet ', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
]

for( let i = 0; i < carrito.length; i++ ) {

    if( carrito[i].descuento ) {
        console.log(`El articulo ${ carrito[i].nombre} Tiene descuento`);
        continue;
    }
    console.log(carrito[i].nombre);
}
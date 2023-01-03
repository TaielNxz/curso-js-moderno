const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet ', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
]

for ( let producto in carrito ) {
    console.log( producto );
}



const automovil = {
    modelo: 'Camaro',
    year: 1969,
    motor: '6.0',
}

for( let propiedad in automovil ) {
    console.log(`${ automovil[propiedad] }`)
}

for( let [llave, valor] of Object.entries(automovil) ) {
    console.log(valor);
    console.log(llave)
}


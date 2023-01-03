
let efectivo = 300;
let credito = 400;
let disponible = efectivo + credito;
let totalCarrito = 600;


if( efectivo > totalCarrito || credito > totalCarrito || disponible > totalPagar ) {
    console.log('Si podemos pagar');
} else {
    console.log('Fondos Insuficientes');
}

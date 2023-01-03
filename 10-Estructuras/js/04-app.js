// Operador Mayor que y menor que

const dinero = 500;
const totalAPagar = 300;
const tarjeta = true;
const cheque = true;

if( dinero >= totalAPagar ) {
    console.log('Si podemos pagar');
} else if ( cheque ) {
    console.log('Si puedo pagar porque tengo un cheque');
} else if ( tarjeta ) {
    console.log('Si puedo pagar porque tengo una tarjeta')
} else {
    console.log('Fondos Insuficientes');
}
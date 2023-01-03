const usuario = false;
const puedePagar = true;


if (usuario && puedePagar) {
    console.log('Tu Pedido se hizo con éxito...');
} else if ( !usuario ) {
    console.log('Inicia sesión para realizar el pedido')
} else if( !puedePagar ) {
    console.log('Fondos Insuficientes')
} else {
    console.log('hubo un error con tu pago.')
}
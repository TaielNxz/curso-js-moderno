function saludar( a , b ) {
    console.log( a + b );
}


sumar( 2 , 3 ) // 2 y 3 son argumentos

// nombre y apellido son parametros
function saludar( nombre , apellido ) {
    console.log( `Hola ${ nombre }  ${ apellido } ` );
}

saludar('Taiel' , 'Nunes')
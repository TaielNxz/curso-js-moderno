// nombre y apellido son parametros
function saludar( nombre = 'Desconocido', apellido = '') {
    console.log( `Hola ${ nombre }  ${ apellido } ` );
}

saludar('Taiel')
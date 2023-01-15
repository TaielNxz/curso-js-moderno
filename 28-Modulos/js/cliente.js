/**
    El IIFE evita que se pueda acceder a los datos de este archivo desde otro
    ej no puedo hacer console.log(nombreCliente); en otro archivo
    evita que se mescle el codigo
*/
// (function() {
//     console.log('Desde un IIFE');
    
//     // agregar variable a ventana global
//     window.nombreCliente = 'Taiel';
// })();



// Exportar variables
export const nombreCliente = 'Taiel';
export const ahorro = 200;


// Exportar funciones
export function mostrarInformacion( nombre , ahorro ) {
    return `Cliente: ${nombre} - Ahorro: ${ahorro}`
}

export function tieneSaldo(ahorro) {
    if ( ahorro > 0) {
        console.log('Si tiene saldo')
    } else {
        console.log('El Cliente no tiene saldo')
    }
}


// Exportar Clase
export class Cliente {
    constructor( nombre, ahorro ) {
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`
    }
}
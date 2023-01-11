// Class declaration
class Cliente {
    constructor( nombre , saldo ) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

const taiel = new Cliente('Taiel', 400);
console.log(taiel);


// Class expretion
const Cliente2 = class {
    constructor( nombre , saldo ) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

const taiel2 = new Cliente('Taiel', 400);
console.log(taiel2);
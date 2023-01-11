// Class declaration
class Cliente {
    constructor( nombre , saldo ) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    // no requieren una instancia
    static bienvenida() {
        return `Bienvenido al cajero`;
    }
}

const taiel = new Cliente('Taiel', 400);

console.log(taiel);
console.log(taiel.mostrarInformacion());
console.log(Cliente.bienvenida());


// Class expretion
const Cliente2 = class {
    constructor( nombre , saldo ) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    // no requieren una instancia
    static bienvenida() {
        return `Bienvenido al cajero`;
    }
}

const taiel2 = new Cliente('Taiel', 400);

console.log(taiel2);
console.log(taiel2.mostrarInformacion());
console.log(Cliente2.bienvenida());
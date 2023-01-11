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

// Herencia
class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria) {
        super( nombre, saldo );
        this.telefono = telefono;
        this.categoria = categoria;   
    }

    // al nombrarlo igual... rescribimos el metodo
    static bienvenida() {
        return `Bienvenido al cajero de empresas`
    }
}

const taiel = new Cliente('Taiel', 400);
const empresa = new Empresa('Riot Games', 500, 9999999, 'juegos de mierda');

console.log(empresa);
console.log(empresa.mostrarInformacion());

console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());
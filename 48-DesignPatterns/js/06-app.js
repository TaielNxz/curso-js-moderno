class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

class Cliente {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}


const funcionesPersona = {
    mostrarInformacion() {
        console.log(`Nombre Persona: ${this.email} Email: ${this.email}`)
    },
    mostrarNombre() {
        console.log(`Mi nombre es ${this.nombre}`);
    }
}

// Añadir funcionesPersona a la clase de Persona
Object.assign(Persona.prototype, funcionesPersona);
Object.assign(Cliente.prototype, funcionesPersona);


const cliente = new Persona('Taiel', 'correo@correo.com');
cliente.mostrarInformacion();
cliente.mostrarNombre();


const cliente2 = new Cliente('Cliente', 'cliente@cliente.com');
cliente2.mostrarInformacion();
cliente2.mostrarNombre();
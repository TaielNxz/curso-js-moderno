const cliente = {
    nombre: 'Juan',
    saldo: 500
}

console.log(typeof cliente)

function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const taiel = new Cliente('Taiel', 500);

console.log(taiel);
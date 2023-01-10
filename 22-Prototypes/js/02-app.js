function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const taiel = new Cliente('Taiel', 500);

function formatearCliente( cliente ) {
    const { nombre , saldo } = cliente;
    return `El Cliente ${nombre} tiene un saldo de ${saldo}`;
}

function formatearEmpresa( empresa ) {
    const { nombre , saldo , categoria } = empresa;
    return `El Cliente ${nombre} tiene un saldo de ${saldo} y pertenece a la categoria ${categoria}`;
}

console.log( formatearCliente(taiel) );

function Empresa( nombre, saldo, categoria ) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const Empresa1 = new Empresa('Empresa 1', 4000, 'Cursos en Línea');
console.log(formatearCliente(Empresa1));
import { Cliente } from './cliente.js'


export class Empresa extends Cliente {
    constructor(nombre, ahorro, categoria) {
        super(nombre, ahorro);
        this.categoria = categoria;
    }

    mostrarInformacion() {
        return `Cliente: ${nombre} - Ahorro: ${ahorro} - Categoria: ${this.categoria}`;
    }
}

// Solo pued haber un export default por archivo
// puede ir sin nombre
export default function nuevaFuncion() {
    console.log('Este es el export default')
}
import nuevaFuncion, { nombreCliente as clienteNombre , ahorro , mostrarInformacion, tieneSaldo, Cliente } from "./cliente.js";
import { Empresa } from "./empresa.js";


// export default - puede tener otro nombre
nuevaFuncion();

// Comprobando Variables
console.log( clienteNombre );
console.log( ahorro );


// Comprobando Funciones
console.log( mostrarInformacion() );
tieneSaldo(ahorro);


// Comprobando Clase
const cliente = new Cliente( clienteNombre , ahorro );
console.log(cliente.mostrarInformacion());


// Comprobar Empresa
const empresa = new Empresa('Codigo Con Juan', 100, 'Aprendisaje en Linea');
console.log(empresa.mostrarInformacion());
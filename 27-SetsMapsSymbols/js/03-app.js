/*
    * Map
    - listas ordenadas en llave y valor
    - la llave y el valor pueden ser de cualquier tipo de dato
    - mejor preformance que un objeto
    - son iterables
*/

// Crear Map
const cliente = new Map();

// Agregar elemento al Map
cliente.set('nombre', 'Karen');
cliente.set('tipo', 'Premium');
cliente.set('saldo', 3000);
cliente.set(true, true);
cliente.set([0], true);

// Retorna la cantidad de elementos
console.log( cliente.size );

// Revisar si el valor existe en el Map ( true o false )
console.log( cliente.has('nombre') );

// Obtener valor de la llave ( llave o undefined )
console.log( cliente.get('nombre') );

// Limpiar el Map
cliente.clear();

// Agregar elementos directamente
const paciente = new Map( [ ['nombre', 'paciente'], ['cuarto', 'no definido'] ]);

// Reescribir un calor
paciente.set('nombre', 'Antonio');

// Iterar Map
paciente.forEach( (datos, index) => {
    console.log(`${index} => ${datos}`);
})

console.log(paciente);
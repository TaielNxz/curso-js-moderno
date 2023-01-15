const ciudades = ['Londres', 'New York', 'Madrid', 'Paris'];
const ordenes = new Set([123, 231, 131, 102]);
const datos = new Map();

datos.set('nombre', 'Juan');
datos.set('profesion', 'Desarrollador Web');


// Default Arreglo
for( let ciudad of ciudades ) {
    console.log(ciudad);
}

// Default Set
for( let orden of ordenes ) {
    console.log(orden);
}

// Default Map
for( let dato of datos ) {
    console.log(dato);
}


/*
    * Entries Iterator
    - imprime llave y valor
    - si no tiene llaves las crea con los datos de los valores
*/
for ( let entry of ciudades.entries() ) {
    console.log(entry);
}

for ( let entry of ordenes.entries() ) {
    console.log(entry);
}

for ( let entry of datos.entries() ) {
    console.log(entry);
}


/*
    * Values Iterator
    - imprime los valores
*/
for ( let value of ciudades.values() ) {
    console.log(value);
}

for ( let value of ordenes.values() ) {
    console.log(value);
}

for ( let value of datos.values() ) {
    console.log(value);
}


/*
    * Keys Iterator
    - imprime las llaves
    - si no tiene llaves las crea con los datos de los valores
*/
for ( let keys of ciudades.keys() ) {
    console.log(keys);
}

for ( let keys of ordenes.keys() ) {
    console.log(keys);
}

for ( let keys of datos.keys() ) {
    console.log(keys);
}
// * crear una variable
var producto = 'Monitor 23 Pulgadas'; 
console.log(producto);

// * reasignar valor de la variable
producto = 'Monitor de 19 Pulgadas';
console.log(producto);

// * se puede inicializar una variable sin valor y asignarlo después
var disponible;
disponible = true;
console.log(disponible);

// * Inicializar múltiples variables 
var categoria = 'Computadoras',
    marca = 'Marca Famosa',
    calificacion = 5;

console.log(categoria);
console.log(marca);
console.log(calificacion);


// * Reglas de las variables
// Pueden tener: letras, numeros, _
// No pueden iniciar con numero
var 99dias;
var 01_;


// * Estilos para nombrar variables con más de una palabra
var nombreProducto = 'Monitor 30 Pulgadas';   // CamelCase ( la mas comun )
var nombre_producto = 'Monitor 30 Pulgadas';  // underscore
var NombreProducto = 'Monitor 30 Pulgadas';   // pascal case

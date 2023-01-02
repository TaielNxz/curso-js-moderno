// ? CREAR STRING
const cadena = "Monitor 20 Pulgadas\"";
const cadena2 = String('Monitor de 24"');
const cadena3 = new String('Monitor de 27 Pulgadas');

// ? CONCATENAR
// ... en console.log con +
console.log( producto + " Con un precio de: " + producto);
// ... en console.log con ,
console.log( producto, " Con un precio de: ", producto);
// ... con template string
console.log(`El producto ${producto} tiene un precio de ${precio}`);

// ? METODOS
const producto = "Monitor 20 Pulgadas ";
const precio = '30 USD';


// * .length
// Conocer la cantidad de letras de la cadena de texto
console.log(producto.length);


// * .indexOf
// Posicion en donde se encuentra el contenido, si no lo encuentra retorna -1
console.log(producto.indexOf('Pulgadas'));


// * .includes
// Retorna true o false
console.log(producto.includes('Monitor'));


// * .concat
// contactenar con una variable
console.log(producto.concat(precio));
// contactenar con un string
console.log(producto.concat('En Descuento'));


// * .replace
// reemplazar texto o parte de este por uno nuevo
console.log(producto.replace(' Pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor Curvo'));


// * .slice
// cortar texto
console.log(producto.slice(0, 10));  // corta desde 0 hasta 10
console.log(producto.slice(8));      // corta a partir del 8 hasta el final
console.log(producto.slice(2, 1));   // No hace nada

// * substring
// alternativa a .slice
console.log(producto.substring(0, 10));  // igual que el .slice
console.log(producto.substring(2, 1));   // Los invierte y luego corta

// * charAt
// recuperar un caracter usando su posicion
const usuario = "Taiel";
console.log(usuario.charAt(0));


// * .repeat
// repetir una cadena de texto, si usamos un numero con coma, se redondea hacia abajo
// 2.4 --> 2
// 2.9 --> 2
const texto = ' en Promocion'.repeat(2.9);
console.log(texto);
console.log(`${producto} ${texto} !!!`);


// * .split
// dividir un string
const actividad = "Estoy aprendiendo Javascript Moderno";
console.log(actividad.split(" "))

const hibbies = 'Leer, caminar, escuchar mmusica, escribir, apreder a programar';
console.log(hobbies.split(", "));

const tweet = "Aprendiendo JavaScript #JSModernoConJuan";
console.log(tweet.split('#'));


// * .toUpperCase
// Pasar caracteres a mayusculas
console.log(producto.toUpperCase());


// * .toLowerCase
// Cambiar caracteres a minusculas
console.log(producto.toLowerCase());

const email = "CORREO@CORREO.COM";
console.log(email.toLowerCase());


// * .toString()
// Convertir a string
console.log(precio.toString());
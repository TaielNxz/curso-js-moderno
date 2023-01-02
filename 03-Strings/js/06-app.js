// .repeat : repetir una cadena de texto
/*
    si usamos un numero con coma, se redondea hacia abajo
    2.4 --> 2
    2.9 --> 2
*/
const producto = 'Monitor 20 Pulgadas';
const texto = ' en Promocion'.repeat(2.9);
console.log(texto);
console.log(`${producto} ${texto} !!!`);


// .split : dividir un string
const actividad = "Estoy aprendiendo Javascript Moderno";
console.log(actividad.split(" "))

const hibbies = 'Leer, caminar, escuchar mmusica, escribir, apreder a programar';
console.log(hobbies.split(", "));

const tweet = "Aprendiendo JavaScript #JSModernoConJuan";
console.log(tweet.split('#'));
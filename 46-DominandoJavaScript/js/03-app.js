// Coercion

const numero1 = 20;
const numero2 = "40";

// Implicita
console.log(numero1 + numero2); 


// Explicita
console.log(Number(numero2)) 

console.log( numero1.toString() ); 

const pedido = [1,2,3,4];

console.log(pedido.toString());

console.log(JSON.stringify(pedido));
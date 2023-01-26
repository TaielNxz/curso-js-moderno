const suma = (a,b,c) => a + b + c;

// * Currying
const parcial1 = (a) => (b,c) => suma(a,b,c)

// const primerNumero1 = parcial(5);
// const resultado1 = parcial(4,3);
const resultadoParcial1 = parcial1(5)(4,3);


// * Partials
const parcial2 = a => b => c => suma(a,b,c);

// const primerNumero = parcal(5);
// const segundoNumero = primerNumero(4);
// const resultado = segundoNumero(3);
const resultadoParcial2 = parcial2(5)(4)(3);


console.log(resultadoParcial1)
console.log(resultadoParcial2);

// Probar 2 Valores

function suma(a, b) {
    return a + b;
}

let resultado = suma(1, 2);
let esperado = 6;

if (resultado !== esperado) {
    console.log(`El ${resultado} es diferente a lo esperado; la prueba no paso`);
} else {
    console.log('La prueba paso correctamente');
}
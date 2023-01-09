const nombre = localStorage.getItem('nombre');
console.log(nombre);

const producutoJSON = localStorage.getItem('producto');
console.log(JSON.parse(producutoJSON))

const meses = localStorage.getItem('meses');
const mesesArray = JSON.parse(meses);
console.log( mesesArray );
// * variable con const

const producto = "tablet";

// NO es posible reasignarla
producto = 20;
console.log(producto);
producto = true;
console.log(producto);
producto = null;
console.log(producto);

// NO se puede inicializar sin valor
const disponible;
disponible = true;
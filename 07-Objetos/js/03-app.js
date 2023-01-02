const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
}

// agregar nuevas propiedades al objeto
producto.imagen = "imagen.jpg";

// eliminar propiedades del objeto
delete producto.disponible;

console.log( producto );
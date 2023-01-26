// self

self.onload = () => {
    console.log('Ventana lista');
}

window.nombre = 'Monitor 20 Pulgadas';

const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 30,
    disponible: true,
    mostrarInfo: function() {
        const self = this;
        return `El Producto: ${self.nombre}`;
    }
}

console.log(producto.mostrarInfo());
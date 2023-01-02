const producto = 'Monitor 20 Pulgadas';
console.log(producto);

// .replace : reemplazar texto o parte de este por uno nuevo
console.log(producto.replace(' Pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor Curvo'));


// .slice : cortar texto
console.log(producto.slice(0, 10));  // corta desde 0 hasta 10
console.log(producto.slice(8));      // corta a partir del 8 hasta el final
console.log(producto.slice(2, 1));   // No hace nada


// .substring : alternativa a .slice
console.log(producto.substring(0, 10));  // igual que el .slice
console.log(producto.substring(2, 1));   // Los invierte y luego corta


// .charAt : recuperar un caracter usando su posicion
const usuario = "Taiel";
console.log(usuario.charAt(0));
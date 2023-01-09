localStorage.removeItem('nombre');

// Actualizar un registro
const mesesArray = JSON.parse(localStorage.getItem('meses'));
mesesArray.push('Nuevo mes');
localStorage.setItem('meses', JSON.stringify(mesesArray));

// limpiar todo el local storage
localStorage.clear();
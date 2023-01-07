const busqueda = document.querySelector('.busqueda');

// Se ejecuta cuando precionas una tecla
busqueda.addEventListener('keydown', () => {
    console.log('escribiendo...');
});

// Se ejecuta cuando precionas pero sueltas la tecla
busqueda.addEventListener('keyup', () => {
    console.log('escribiendo...');
});

// Se ejecuta cuando precionas el campo del formulario y luego haces click fuera
busqueda.addEventListener('blur', () => {
    console.log('saliendo del campo');
});

// Se ejecuta cuando haces ctl+c
busqueda.addEventListener('copy', () => {
    console.log('texto copiado');
});

// Se ejecuta cuando haces ctl+v
busqueda.addEventListener('paste', () => {
    console.log('texto pegado');
});

// Se ejecuta cuando haces ctl+x
busqueda.addEventListener('cut', () => {
    console.log('texto cortado');
});

// Se ejecuta cuando haces cualquiera de los anteriores expeto el blur
busqueda.addEventListener('input', (e) => {
    if( e.target.value = '' ) {
        console.log('fallo la validacion');
    }
    console.log(e.target.value);
});
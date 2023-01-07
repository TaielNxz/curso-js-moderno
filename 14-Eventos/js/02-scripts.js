const nav = document.querySelector('.navegacion');

// registrar un evento
nav.addEventListener('mouseout', () => {
    console.log('saliendo de la navegacion');

    nav.style.backgroundColor = 'transparent';
});

nav.addEventListener('mouseenter', () => {
    console.log('entrando en la navegacion');

    nav.style.backgroundColor = 'white';
});

// se ejecuta cuando doy click y suelto el mouse
nav.addEventListener('mouseup', () => {
    console.log('suelto el click');

    nav.style.backgroundColor = 'white';
});


// se ejecuta cuando doy doble click
nav.addEventListener('dblclick', () => {
    console.log('doble click');

    nav.style.backgroundColor = 'white';
});


// mousedown - similar al click
// click
// dblclick = doble click
// mouseup - cuando sueltas el mouse
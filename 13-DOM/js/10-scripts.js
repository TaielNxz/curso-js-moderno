const enlace = document.createElement('a');

// Agregandole el texto
enlace.textContent = 'nuevo enlace';

// Añadiendo el href
enlace.href = '/nuevo-enlace';

// agregar nuevos atrubtos
enlace.setAttribute('data-enlace', 'nuevo-enlace');

// agregar nueva clase
enlace.classList.add('alguna-clase');

// agregar evento para el enlace
enlace.onclick = miFuncion;
function miFuncion() {
    alert('Diste Click');
}


// Seleccionar la navegacion
const navegacion = document.querySelector('.navegacion');
console.log(navegacion.children);
navegacion.insertBefore(enlace, navegacion.children[1]);


// Crear un CARD
const parrafo1 = document.createElement('p');
parrafo1.textContent = "Concierto";
parrafo1.classList.add('caregoria', 'concierto');

const parrafo2 = document.createElement('p');
parrafo2.textContent = "Concierto de Rock";
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p');
parrafo3.textContent = "$800";
parrafo3.classList.add('precio');

// Crear div con la clase de info
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);


// Crear la imagen
const imagen = document.createElement('img')
imagen.src = 'img/hacer2.jpg';

// Crear el card
const card = document.createElement('div');
card.classList.add('card');

// Asignar la imagen
card.appendChild(imagen);

// Asignar info
card.appendChild(info);

// Insertar en el html
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.insertBefore(card, contenedor.children[0]);
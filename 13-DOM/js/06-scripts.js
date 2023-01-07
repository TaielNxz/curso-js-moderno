const encabezado = document.querySelector('.contenido-hero h1').textContent;
console.log(encabezado);


console.log(encabezado.innerText);     // si en el CSS - visibility: hidden; no lo va a encontrar
console.log(encabezado.textContent);   // este si lo va a encontrar
console.log(encabezado.innerHTML);     // se trae el html


// modificar texto de heading
const nuevoHeading = 'nuevo heading';
document.querySelector('.contenido-hero h1').textContent = nuevoHeading;


// modificar src de imagen
const imagen = document.querySelector('.card img');
imagen.src = 'img/2.jpg';
const card = document.querySelector('.card');
console.log(card);

const cards = document.querySelectorAll('.card');
console.log(cards)

// podemos tener selectores especificos como en CSS
const info = document.querySelectorAll('.premium .info');
console.log(info);


// Seleccionar el segundo card de hospedaje
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundoCard)


// Seleccionar el formulario
const formulario = document.querySelector('#formulario');
console.log(formulario);


// Seleccionar elementos HTML
const navegacion = document.querySelector('nav');
console.log(navegacion)
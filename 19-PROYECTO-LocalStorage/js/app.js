// Variables
const formulario = document.querySelector("#formulario");
const listaTweets = document.querySelector("#lista-tweets");
let tweets = [];

// Event Listeners
eventListeners()
function eventListeners() {
    // Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);

    // Cuando el documento esta listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse( localStorage.getItem('tweets') ) || [];
        crearHTML();
    });
};

// Funciones
function agregarTweet(e) {
    e.preventDefault();

    // Texarea donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;

    // Validacion
    if( tweet === '' ) {
        mostrarError('Un mensaje no puede ir vacio')
        return;
    }

    const tweetObj = {
        id: Date.now(),
        tweet
    }

    // Añadir al arreglo de tweets
    tweets = [ ...tweets , tweetObj ];

    // Una vez agregado vamos a crear el HTML
    crearHTML();

    // Reiniciar el formulario
    formulario.reset();
};

// Mostrar mensaje de error
function mostrarError(error) {

    const existe = document.querySelector(".error");

    if( !existe ) {
        const msjError = document.createElement('P');
        msjError.textContent = error;
        msjError.classList.add('error');
    
        // Insertarlo en el contenido
        const contenido = document.querySelector('#contenido');
        contenido.appendChild(msjError);
    
        // elimina la alerta despues de 3 segundos
        setTimeout(() => {
            msjError.remove();
        }, 3000);
    }
}

// Muestra un listado de los tweets
function crearHTML() {

    // limpiar el HTML previo
    limpiarHTML()

    if ( tweets.length > 0 ) {
        tweets.forEach( tweet => {
            // Agregar un boton de eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';
            // Añadirla funcion de eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }
            // Crear el HTML
            const li = document.createElement('LI');
            // Añadir texto
            li.innerText = tweet.tweet;
            // Asignar el boton
            li.appendChild(btnEliminar);
            // insertarlo en el HTML
            listaTweets.appendChild(li);
        })
    }

    sincronizarStorage();
}

// Agrega los Tweets actuales a Localstorage
function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

// Elimina un tweet
function borrarTweet(id) {
    tweets = tweets.filter( tweet => tweet.id !== id );
    crearHTML();
}

// Limpiar el HTML 
function limpiarHTML() {
    while( listaTweets.firstChild ) {
        listaTweets.removeChild( listaTweets.firstChild );
    }
}
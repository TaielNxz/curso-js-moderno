// Explicit Binding

function persona(el1, el2) {
    console.log(`Mi nombre es ${this.nombre} y Escucho ${el1} y ${el2}`)
}


const informacion = {
    nombre: 'Juan'
}

const musicaFavorita = ['Heavy Metal', 'Rock'];

// Hay que pasar los elementos uno por uno
persona.call( informacion, musicaFavorita[0], musicaFavorita[1] );

// Se puede pasar un arreglo
persona.apply( informacion, musicaFavorita );

// Te crea una nueva funcion
const nuevaFn = persona.bind( informacion, musicaFavorita[0], musicaFavorita[1] );
nuevaFn();
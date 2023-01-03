const reproductor = {

    cancion: '',
    reproducir: id => console.log(`Reproduciendo canción id ${id}`),
    pausar: () => console.log('pausando...'),
    borrar: id => console.log(`Borrando canción con id: ${id}`),
    crearPlaylist: nombre => console.log(`Creando la Playlist ${nombre}`),
    reproducirPlaylist: nombre => console.log(`Reproduciendo la Playlist ${nombre}`),

    set nuevaCancion( cancion ) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`)
    },

    get obtenerCancion() {
        console.log(`${this.cancion}`)
    }
}

reproductor.nuevaCancion = 'Enter Sandman';
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(20);
reproductor.crearPlaylist('Heavy Metal');
reproductor.crearPlaylist('Rock 90s');
reproductor.reproducirPlaylist('Heavy Metal');
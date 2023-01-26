// Implicit Binding

const usuario = {
    nombre: 'Taiel',
    edad: 21,
    informacion() {
        console.log(`Mi nombre es ${this.nombre} y mi edad es ${this.edad}`);
    },
    mascota: {
        nombre: 'Camila',
        edad: 29,
        informacion() {
            console.log(`Mi nombre es ${this.nombre} y mi edad es ${this.edad}`);
        }
    }
}

usuario.informacion();
usuario.mascota.informacion();
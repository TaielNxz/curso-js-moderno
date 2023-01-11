// Class declaration
class Cliente {

    #nombre;

    setNombre(nombre) {
        this.#nombre = nombre
    }

    getNombre() {
        return this.#nombre;
    }
}

const taiel = new Cliente();

taiel.setNombre('Taiel')

console.log(taiel.getNombre());


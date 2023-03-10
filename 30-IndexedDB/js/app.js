let DB;

document.addEventListener('DOMContentLoaded', () => {
    crmDB();

    setTimeout(() => {
        crearCliente();
    }, 3000);
});

function crmDB() {
    // Crear base de datos version 1.0
    let crmDB = window.indexedDB.open('crm', 1);

    // Si hay un error
    crmDB.onerror = function() {
        console.log('Hubo un error a la hora de crear la DB');
    }

    // Si se creo bien
    crmDB.onsuccess = function() {
        console.log('Base de datos Creada!');

        DB = crmDB.result;
    }

    // Configuracion de la base ed datos
    crmDB.onupgradeneeded = function(e) {
        // Este elemento solo se ejecuta una vez
        const db = e.target.result;

        const objectStore = db.createObjectStore('crm', {
            keyPath: 'crm',
            autoIncrement: true
        });

        // Definir las columnas
        objectStore.createIndex('nombre', 'nombre', { unique: false });
        objectStore.createIndex('email', 'email', { unique: true });
        objectStore.createIndex('telefono', 'telefono', { unique: false });

        console.log('Columnas Creadas');
    }
}

function crearCliente() {
    let transaction = DB.transaction(['crm'], 'readwrite');

    transaction.oncomplete = function() {
        console.log('Transaccion Completada');
    }

    transaction.onerror = function() {
        console.log('Hubo un error en la transaccion');
    }

    const objectStore = transaction.objectStore('crm');

    const nuevoCliente = {
        telefono: 482323123,
        nombre: 'Taiel',
        email: 'correo@correo.com'
    }

    const peticion = objectStore.add(nuevoCliente);

    console.log(peticion);
}
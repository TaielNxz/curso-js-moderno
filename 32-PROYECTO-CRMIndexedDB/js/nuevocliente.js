(function() {
    let DB
    const formulario = document.querySelector('#formulario');

    document.addEventListener('DOMContentLoaded', () => {  
        conectarDB();
        formulario.addEventListener('submit', validarCliente);
    });

    function conectarDB() {
        let abrirConexion = window.indexedDB.open('crm', 1);
    
        abrirConexion.onerror = function() {
            console.log('Hubo un error');
        };
    
        abrirConexion.onsuccess = function() {
            DB = abrirConexion.result;
        }
    }

    function validarCliente(e) {
        // Evitar que se recargue la pagina
        e.preventDefault();

        // Leer todos los inputs
        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        // Revisar que los inputs no esten vacios
        if ( nombre === '' || email === '' || telefono === '' || empresa === '') {
            imprimirAlerta('Todos los campos son obligatorios', 'error');
            return;
        }

        // Crear un objeto con la informacion
        const cliente = { 
            nombre, 
            email, 
            telefono, 
            empresa
        };   

        // Crear id unico
        cliente.id = Date.now();

        // Agregar el objeto de cliente a la base de datos
        crearNuevoCliente(cliente);
    }
    
    function crearNuevoCliente(cliente) {

        // Agregar cliente al objectStore
        const transaction = DB.transaction(['crm'], 'readwrite');
        const objectStore = transaction.objectStore('crm');
        objectStore.add(cliente);

        // Si hubo un problema...
        transaction.onerror = function() {
            // Mostrar mensaje de error
            imprimirAlerta('Hubo un error', 'error');
        };

        // Si todo va bien...
        transaction.oncomplete = function() {
            // Mostrar mensaje de exito
            imprimirAlerta('El Cliente se agregó Correctamente');

            // Redirigir a la pagina principal
            setTimeout(() => {
               window.location.href = 'index.html';
            }, 3000);
        };
    }
})();
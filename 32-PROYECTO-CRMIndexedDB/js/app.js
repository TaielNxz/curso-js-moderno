(function() {

    let DB;
    const listadoClientes = document.querySelector('#listado-clientes');

    document.addEventListener('DOMContentLoaded', () => {
        crearDB();
        
        if( window.indexedDB.open('crm', 1) ) {
            obtenerClientes();
        }

        listadoClientes.addEventListener('click', eliminarRegistro);
    });

    // Crea la base de datos de IndexDB
    function crearDB() {  
        // crear base de datos con la versión 1
        const crearDB = window.indexedDB.open('crm', 1);

        // si hay un error, mostrar mensaje en consola
        crearDB.onerror = function() {
            console.log('Hubo un error');
        };

        // si se crea correctamente, asignamos a DB el resultado
        crearDB.onsuccess = function() {
            DB = crearDB.result;
        }

        // Definimos las columnas de la base de datos
        crearDB.onupgradeneeded = function(e) {
            
            // el evento que se va a correr tomamos la base de datos
            const db = e.target.result;

            // definir el objectstore, primer parametro el nombre de la BD, segundo las opciones
            // keypath es de donde se van a obtener los indices
            const objectStore = db.createObjectStore('crm', { keyPath: 'id', autoIncrement: true });

            // creamos los indices: nombre, keypath y parametros
            objectStore.createIndex('nombre', 'nombre', { unique: false });
            objectStore.createIndex('email', 'email', { unique: true });
            objectStore.createIndex('telefono', 'telefono', { unique: false });
            objectStore.createIndex('empresa', 'empresa', { unique: false });
            objectStore.createIndex('id', 'id', { unique: true });
            
            console.log('Database creada y lista');
        }
    }

    // Obtenemos los elementos de la base de datos y los imprimimos el HTML
    function obtenerClientes() {

        // conectamos a la base de datos
        let abrirConexion = window.indexedDB.open('crm', 1);

        abrirConexion.onerror = function() {
            console.log('Hubo un error');
        };

        abrirConexion.onsuccess = function() {

            DB = abrirConexion.result;

            const objectStore = DB.transaction('crm').objectStore('crm');

            objectStore.openCursor().onsuccess = function(e) {
                const cursor = e.target.result;

                if ( cursor ) {
                    const { nombre, empresa, email, telefono, id } = cursor.value;

                   
                    listadoClientes.innerHTML += ` 
                        <tr>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
                                <p class="text-sm leading-10 text-gray-700"> ${email} </p>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                                <p class="text-gray-700">${telefono}</p>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                                <p class="text-gray-600">${empresa}</p>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                                <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                                <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
                            </td>
                        </tr>
                    `;

                    cursor.continue();

                } else {
                    console.log('No hay mas registros...');
                }
            }
        }
    }

    function eliminarRegistro(e) {

        if ( e.target.classList.contains('eliminar') ) {
            const idEliminar = Number( e.target.dataset.cliente );

            const confirmar = confirm('Deseas eliminar este cliente?');

            if (confirmar) {
                const transaction = DB.transaction(['crm'], 'readwrite');
                const objectStore = transaction.objectStore('crm');

                objectStore.delete(idEliminar);

                transaction.oncomplete = function() {
                    console.log('Eliminado...');

                    e.target.parentElement.parentElement.remove();
                }

                transaction.onerror = function() {
                    console.log('Hubo un Error');
                }

            }
        }
    }

})();
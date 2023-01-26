// Scope de las variables

const login = true;


function clienteLogueado() {
    const cliente = 'Juan';
    console.log(cliente);

    if(login) {
        console.log(cliente);
        const cliente = 'Admin';
        console.log(cliente);
    }
}

clienteLogueado();
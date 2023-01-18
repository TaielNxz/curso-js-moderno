const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', () => {
    Notification
        .requestPermission()
        .then( resultado => {
            console.log('El resultado es', resultado);
        })
});

const verNotificacion = document.querySelector('#verNotificacion');
verNotificacion.addEventListener('click', () => {
    if( Notification.permission === 'granted' ) {
        new Notification('Esta es la notificacion', {
            icon: 'img/fabri.png',
            body: 'Hola'
        });

        verNotificacion.onclick = function() {
            window.open('https://www.youtube.com/watch?v=O0SGV2W8FVE')
        }
    }
});
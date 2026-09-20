dejar diferidoPrompt;

ventana.addEventListener('beforeinstallprompt', (e) => {
    // Evitar que aparezca la mini-barra de información en el móvil
    e.preventDefault();
    // Guarda el evento para que pueda activarse más tarde.
    deferredPrompt = e;
    // Actualizar la interfaz de usuario para notificar al usuario que puede instalar la PWA
    const installBtn = document.getElementById('installBtn');

    // Detectar si el dispositivo es iOS
    si (!isIos()) {
        installBtn.style.display = 'bloque';
    }

    installBtn.addEventListener('clic', () => {
        // Mostrar el mensaje de instalación
        deferredPrompt.prompt();
        // Espere a que el usuario responda al mensaje
        deferredPrompt.userChoice.then((choiceResult) => {
            si (choiceResult.outcome === 'aceptado') {
                console.log('El usuario aceptó el mensaje A2HS');
            } demás {
                console.log('El usuario descartó el mensaje A2HS');
            }
            // Limpia el deferredPrompt para que pueda ser recolectado como basura
            deferredPrompt = nulo;
        });
    });
});

// Registrar el trabajador de servicio
if ('serviceWorker' en el navegador) {
    navigator.serviceWorker.register('/service-worker.js')
    .then((registro) => {
        console.log('Service Worker registrado con el alcance:', registro.alcance);
    })
    .catch((error) => {
        console.log('Error en el registro del Service Worker:', error);
    });
}

// Detectar iOS
constante isIos = () => {
    const userAgent = ventana.navigator.userAgent.toLowerCase();
    devolver /iphone|ipad|ipod/.test(userAgent);
}

// Detectar si el dispositivo está en modo independiente
const isInStandaloneMode = () => ('independiente' en window.navigator) && (window.navigator.standalone);

si (isIos() && !isInStandaloneMode()) {
    const iosPopup = document.getElementById('iosPopup');
    const superposición = document.getElementById('superposición');
    iosPopup.style.display = 'bloque';
    superposición.estilo.pantalla = 'bloque';

    document.getElementById('closePopup').addEventListener('click', () => {
        iosPopup.style.display = 'ninguno';
        superposición.estilo.pantalla = 'ninguno';
    });
} de lo contrario si (!isIos()) {
    const installBtn = document.getElementById('installBtn');
    installBtn.style.display = 'bloque';
}
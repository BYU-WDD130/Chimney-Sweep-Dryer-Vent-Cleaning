document.addEventListener('DOMContentLoaded', () => {
    const leadForm = document.getElementById('leadForm');

    if (leadForm) {
        leadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const cityField = document.getElementById('city') || document.getElementById('cityLocation');
            const cityValue = cityField ? cityField.value : 'North Utah County';

            const payload = {
                name: document.getElementById('name').value,
                phone: document.getElementById('phone').value,
                city: cityValue,
                service: document.getElementById('service') ? document.getElementById('service').value : 'Chimney Sweep',
                timestamp: new Date().toISOString()
            };

            alert(`Thank you ${payload.name}. A technician serving ${payload.city.toUpperCase()} will contact you immediately.`);
            leadForm.reset();
        });
    }

    // Registro del Service Worker para optimización PWA y funcionamiento offline
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then((reg) => console.log('Service Worker registrado con éxito:', reg.scope))
                .catch((err) => console.log('Error al registrar el Service Worker:', err));
        });
    }
});
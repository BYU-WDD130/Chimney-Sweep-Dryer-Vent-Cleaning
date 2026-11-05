document.addEventListener('DOMContentLoaded', () => {
    const leadForm = document.getElementById('leadForm');

    leadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const payload = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            city: document.getElementById('city').value,
            service: document.getElementById('service').value,
            timestamp: new Date().toISOString()
        };

        alert(`Thank you ${payload.name}. A technician serving ${payload.city.toUpperCase()} will contact you immediately.`);
        leadForm.reset();
    });
});
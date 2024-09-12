// Smooth Scrolling for Navigation Links
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a, .btn[href*="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Form Validation
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    if (form) {
        form.addEventListener('submit', function (event) {
            const name = form.querySelector('#name').value.trim();
            const email = form.querySelector('#email').value.trim();
            const subject = form.querySelector('#subject').value.trim();
            const message = form.querySelector('#message').value.trim();
            
            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields.');
                event.preventDefault();
                return;
            }
            
            if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
                event.preventDefault();
                return;
            }
        });
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

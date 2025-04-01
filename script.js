// Initialize EmailJS with your public key
(function() {
    emailjs.init("GUSMaTwWag8MbUsSq");
})();

// Mobile Navigation
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

// Toggle Navigation
burger.addEventListener('click', () => {
    // Toggle Nav
    nav.classList.toggle('active');
    
    // Animate Links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    
    // Burger Animation
    burger.classList.toggle('toggle');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        burger.classList.remove('toggle');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling with EmailJS
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show loading state
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Get form data
        const templateParams = {
            to_email: 'ramihabib2003@gmail.com',
            from_name: document.getElementById('name').value,
            from_email: document.getElementById('email').value,
            message: document.getElementById('message').value,
        };
        
        // Send email using EmailJS
        emailjs.send('service_t6lctnb', 'template_x0q4x2g', templateParams)
            .then(function(response) {
                alert('Thank you for your message! I will get back to you soon.');
                contactForm.reset();
            }, function(error) {
                alert('Sorry, there was an error sending your message. Please try again later.');
                console.error('EmailJS error:', error);
            })
            .finally(function() {
                // Reset button state
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
    });
}

// Add scroll reveal animations
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
            section.classList.add('reveal');
        }
    });
}); 
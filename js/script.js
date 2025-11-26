// ==================== SMOOTH SCROLLING ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Close mobile menu if open
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        }
    });
});

// ==================== NAVBAR SCROLL EFFECT ====================
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        navbar.style.padding = '0.5rem 0';
        navbar.style.backgroundColor = '#32b436';
    } else {
        navbar.classList.remove('scrolled');
        navbar.style.padding = '1rem 0';
        navbar.style.backgroundColor = '#32b436';
    }
});

// ==================== BACK TO TOP BUTTON ====================
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==================== CONTACT FORM HANDLING ====================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (!name || !email || !phone || !subject || !message) {
        alert('Por favor, preencha todos os campos.');
        return;
    }
    
    // Desabilitar botão de envio durante o processamento
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;
    submitButton.disabled = true;
    submitButton.innerHTML = '<i class="bi bi-hourglass-split me-2"></i>Enviando...';
    
    try {
        // Enviar dados para o servidor
        const response = await fetch('/contato', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, phone, subject, message })
        });
        
        const data = await response.json();
        
        if (response.ok) {
            // Mostrar mensagem de sucesso
            alert('✅ ' + data.message);
            
            // Resetar formulário
            contactForm.reset();
        } else {
            throw new Error(data.message || 'Erro ao enviar mensagem');
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('❌ Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato por telefone.');
    } finally {
        // Reabilitar botão
        submitButton.disabled = false;
        submitButton.innerHTML = originalButtonText;
    }
});

// ==================== GALLERY LIGHTBOX (Simple Version) ====================
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        const img = this.querySelector('img');
        const imgSrc = img.src;
        
        // Create lightbox
        const lightbox = document.createElement('div');
        lightbox.style.position = 'fixed';
        lightbox.style.top = '0';
        lightbox.style.left = '0';
        lightbox.style.width = '100%';
        lightbox.style.height = '100%';
        lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        lightbox.style.zIndex = '9999';
        lightbox.style.display = 'flex';
        lightbox.style.alignItems = 'center';
        lightbox.style.justifyContent = 'center';
        lightbox.style.cursor = 'pointer';
        
        const lightboxImg = document.createElement('img');
        lightboxImg.src = imgSrc;
        lightboxImg.style.maxWidth = '90%';
        lightboxImg.style.maxHeight = '90%';
        lightboxImg.style.borderRadius = '10px';
        
        lightbox.appendChild(lightboxImg);
        document.body.appendChild(lightbox);
        
        // Close lightbox on click
        lightbox.addEventListener('click', function() {
            document.body.removeChild(lightbox);
        });
    });
});

// ==================== ACTIVE NAV LINK ON SCROLL ====================
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ==================== ANIMATE ON SCROLL ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// ==================== FORM INPUT ANIMATIONS ====================
const formInputs = document.querySelectorAll('.form-control, .form-select');

formInputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
        if (!this.value) {
            this.parentElement.classList.remove('focused');
        }
    });
});

// ==================== LAZY LOADING IMAGES ====================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => imageObserver.observe(img));
}

// ==================== CONSOLE MESSAGE ====================
console.log('%cApipemaPet 🐾', 'color: #32b436; font-size: 24px; font-weight: bold;');
console.log('%cWebsite desenvolvido com Bootstrap 5', 'color: #6c757d; font-size: 14px;');

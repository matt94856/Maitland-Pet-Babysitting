// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky navigation handling
const nav = document.querySelector('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        nav.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !nav.classList.contains('scroll-down')) {
        nav.classList.remove('scroll-up');
        nav.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && nav.classList.contains('scroll-down')) {
        nav.classList.remove('scroll-down');
        nav.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: "0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.service, .feature, .review').forEach((element) => {
    observer.observe(element);
});

// Form validation for contact form
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic form validation
        let isValid = true;
        const requiredFields = contactForm.querySelectorAll('[required]');
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.classList.add('error');
            } else {
                field.classList.remove('error');
            }
        });
        
        if (isValid) {
            // Submit form
            this.submit();
        }
    });
}

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('nav');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
}

// Service price calculator
const calculatePrice = (service, duration) => {
    const rates = {
        'sitting': 45,
        'walking': 18
    };
    
    return rates[service] * duration;
};

// Add loading animation for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', function() {
        this.classList.add('loaded');
    });
});

// Back-to-Top Button Implementation
const createBackToTopButton = () => {
    const button = document.createElement('button');
    button.innerText = '↑';
    button.id = 'backToTop';
    button.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 10px 15px;
        border: none;
        border-radius: 5px;
        background-color: #D6B7A9;
        color: #fff;
        font-size: 18px;
        cursor: pointer;
        display: none; /* Initially hidden */
    `;
    document.body.appendChild(button);

    // Show or hide button based on scroll position
    window.addEventListener('scroll', () => {
        button.style.display = (window.scrollY > 100) ? 'block' : 'none';
    });

    // Scroll to top functionality
    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    return button;
};
const backToTopButton = createBackToTopButton();

// Simple Image Carousel Implementation
const createImageCarousel = () => {
    const carouselImages = document.querySelectorAll('.carousel-image');
    let currentImageIndex = 0;

    const showImage = (index) => {
        carouselImages.forEach((img, i) => {
            img.style.display = (i === index) ? 'block' : 'none';
        });
    };

    // Auto change image every 5 seconds
    setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
        showImage(currentImageIndex);
    }, 5000);

    // Initialize carousel
    showImage(currentImageIndex);
};

createImageCarousel();

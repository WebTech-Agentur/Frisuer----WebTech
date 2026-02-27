document.addEventListener('DOMContentLoaded', () => {

    // Header Scroll Effect & Color change logic
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
    const body = document.body;

    if (mobileMenuToggle && mobileNavOverlay) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            mobileNavOverlay.classList.toggle('active');

            // Prevent scrolling when menu is open
            if (mobileNavOverlay.classList.contains('active')) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = '';
            }
        });

        // Close menu when a link is clicked
        const mobileLinks = mobileNavOverlay.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle.classList.remove('active');
                mobileNavOverlay.classList.remove('active');
                body.style.overflow = '';
            });
        });
    }

    // Scroll Animations (Intersection Observer)
    const animElements = document.querySelectorAll('.fade-in-up, .reveal-image, .reveal-image-left, .reveal-card');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animElements.forEach(element => {
        observer.observe(element);
    });

    // Subtly trigger hero animations on load
    setTimeout(() => {
        const heroElements = document.querySelectorAll('.hero-split .fade-in-up, .hero-split .reveal-image');
        heroElements.forEach(el => el.classList.add('visible'));
    }, 100);
});

// WhatsApp integration function
function orderProduct(productName, price) {
    const phoneNumber = '254705764209'; // WhatsApp number with country code
    const message = `Hello! I would like to order:\n\nProduct: ${productName}\nPrice: KSH ${price}\n\n
    Please contact me to complete the order.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add scroll event listener for header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(26, 54, 93, 0.95)';
    } else {
        header.style.backgroundColor = 'var(--primary-blue)';
    }
});

// Mobile navigation toggle
const createMobileNav = () => {
    const nav = document.querySelector('nav');
    const mobileNavButton = document.createElement('button');
    mobileNavButton.classList.add('mobile-nav-toggle');
    mobileNavButton.innerHTML = '<i class="fas fa-bars"></i>';
    
    nav.appendChild(mobileNavButton);
    
    mobileNavButton.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('show');
    });
};

// Initialize mobile navigation if screen width is small
if (window.innerWidth <= 768) {
    createMobileNav();
}

// Update mobile navigation on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        if (!document.querySelector('.mobile-nav-toggle')) {
            createMobileNav();
        }
    } else {
        const mobileNavButton = document.querySelector('.mobile-nav-toggle');
        if (mobileNavButton) {
            mobileNavButton.remove();
        }
        const navLinks = document.querySelector('.nav-links');
        if (navLinks) {
            navLinks.classList.remove('show');
        }
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add to cart animation
function addToCartAnimation(button) {
    button.classList.add('added');
    setTimeout(() => {
        button.classList.remove('added');
    }, 1000);
}
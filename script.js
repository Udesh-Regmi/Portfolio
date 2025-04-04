
document.addEventListener('DOMContentLoaded', () => {
    const mobileToggle = document.querySelector('.mobile-toggle');
const closeMenu = document.querySelector('.close-menu');
const navBar = document.querySelector('.navigation-bar');

mobileToggle.addEventListener('click', () => {
    navBar.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    navBar.classList.remove('active');
});

// Close menu when clicking a nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navBar.classList.remove('active');
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Animate skill bars on scroll
const animateSkillBars = () => {
    const skills = document.querySelectorAll('.skill-progress');
    skills.forEach(skill => {
        const width = skill.getAttribute('data-width');
        skill.style.width = width + '%';
    });
};

// Intersection Observer for animations
const fadeElements = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            if (entry.target.closest('#about')) {
                animateSkillBars();
            }
        }
    });
}, { threshold: 0.1 });

fadeElements.forEach(el => observer.observe(el));

// Form submission
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    form.reset();
});

});




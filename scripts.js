// Simple scroll animations using JavaScript
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transition = "opacity 1s ease-in-out";
});

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        if (window.scrollY + window.innerHeight > section.offsetTop + 100) {
            section.style.opacity = 1;
        }
    });
});

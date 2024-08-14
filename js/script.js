window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.shoe-section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            section.querySelector('img').style.transform = 'scale(1)';
        } else {
            section.querySelector('img').style.transform = 'scale(1.2)';
        }
    });
});

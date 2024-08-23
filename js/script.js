window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.shoe-section');
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Scaling effect based on scroll
        if (rect.top >= 0 && rect.bottom <= windowHeight) {
            section.querySelector('img').style.transform = 'scale(1)';
        } else {
            section.querySelector('img').style.transform = 'scale(1.2)';
        }

        // Fade-in and slide-up effect when in view
        if (rect.top < windowHeight - 100 && rect.bottom > 100) {
            section.classList.add('in-view');
        } else {
            section.classList.remove('in-view');
        }
    });

    // Hide scroll indicator when scrolled past header
    const header = document.querySelector('.header');
    const headerRect = header.getBoundingClientRect();
    if (headerRect.bottom < 0) {
        scrollIndicator.style.opacity = '0';
        scrollIndicator.style.pointerEvents = 'none'; // Optional: Prevent clicks on the hidden indicator
    } else {
        scrollIndicator.style.opacity = '1';
        scrollIndicator.style.pointerEvents = 'auto'; // Optional: Restore clicks when visible
    }
});

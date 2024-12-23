// JavaScript for toggling content sections with animation and accessibility improvements
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
        const target = item.getAttribute('data-target');

        // Update active state for navigation items
        document.querySelectorAll('.nav-item').forEach(navItem => {
            navItem.classList.remove('active-nav');
        });
        item.classList.add('active-nav');

        // Smoothly toggle content sections
        document.querySelectorAll('.content-section').forEach(section => {
            if (section.id === target) {
                section.classList.add('active');
                section.style.opacity = '1'; // Fade-in effect
            } else {
                section.classList.remove('active');
                section.style.opacity = '0'; // Fade-out effect
            }
        });

        // Scroll to the top of the content for better user experience
        document.querySelector('.main-content').scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });
});

// Highlight first navigation item by default
document.querySelector('.nav-item').classList.add('active-nav');
document.querySelector('.content-section').classList.add('active');

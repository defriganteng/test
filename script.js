function enableScroll() {
    const container = document.querySelector('.content-container');
    container.style.overflowY = 'auto';
    document.getElementById('content2').scrollIntoView({ behavior: 'smooth' });
}

// Background Slider
function initBackgroundSlider() {
    const slides = document.querySelectorAll('.background-slide');
    let currentSlide = 0;

    // Show first slide
    slides[0].classList.add('active');

    // Change slide every 6 seconds
    setInterval(() => {
        // Remove active class from current slide
        slides[currentSlide].classList.remove('active');
        
        // Move to next slide
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Add active class to new slide
        slides[currentSlide].classList.add('active');
    }, 6000);
}

// Mencegah bounce effect pada iOS Safari
document.addEventListener('touchmove', function(e) {
    if (document.querySelector('.content-container').style.overflowY !== 'auto') {
        e.preventDefault();
    }
}, { passive: false });

// Reset scroll position saat refresh
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
};

// Initialize background slider when page loads
window.addEventListener('load', initBackgroundSlider);


// ... JavaScript sebelumnya tetap sama ...

// Add this to your script.js file
document.addEventListener('DOMContentLoaded', function() {
    // Create lightbox container
    const lightboxContainer = document.createElement('div');
    lightboxContainer.className = 'lightbox';
    document.body.appendChild(lightboxContainer);

    // Create close button
    const closeButton = document.createElement('span');
    closeButton.className = 'close-lightbox';
    closeButton.innerHTML = '×';
    lightboxContainer.appendChild(closeButton);

    // Create lightbox image
    const lightboxImg = document.createElement('img');
    lightboxContainer.appendChild(lightboxImg);

    // Add click event to gallery items
    const galleryItems = document.querySelectorAll('.gallery-item img');
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            lightboxImg.src = this.src;
            lightboxContainer.classList.add('active');
        });
    });

    // Close lightbox when clicking close button or outside the image
    closeButton.addEventListener('click', closeLightbox);
    lightboxContainer.addEventListener('click', function(e) {
        if (e.target === lightboxContainer) {
            closeLightbox();
        }
    });

    function closeLightbox() {
        lightboxContainer.classList.remove('active');
    }

    // Close lightbox with escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightboxContainer.classList.contains('active')) {
            closeLightbox();
        }
    });
});


// Add this to your script.js file
document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for story events
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all story events
    document.querySelectorAll('.story-event').forEach((event) => {
        observer.observe(event);
    });
});




// Add this to your script.js file
document.addEventListener('DOMContentLoaded', function() {
    // RSVP Form Handling
    const rsvpForm = document.getElementById('rsvpForm');
    const guestCountGroup = document.getElementById('guestCountGroup');

    // Show/hide guest count based on attendance
    document.querySelectorAll('input[name="attendance"]').forEach(radio => {
        radio.addEventListener('change', function() {
            guestCountGroup.style.display = 
                this.value === 'hadir' ? 'block' : 'none';
        });
    });

    rsvpForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(rsvpForm);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to your server
        console.log('RSVP Data:', data);
        
        // Show success message
        alert('Terima kasih telah mengkonfirmasi kehadiran Anda!');
        rsvpForm.reset();
    });

    // Wishes Form Handling
    const wishesForm = document.getElementById('wishesForm');
    const wishesContainer = document.querySelector('.wishes-container');

    wishesForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const name = document.getElementById('wishName').value;
        const message = document.getElementById('wishMessage').value;
        
        // Create new wish card
        const wishCard = document.createElement('div');
        wishCard.className = 'wish-card';
        wishCard.innerHTML = `
            <div class="wish-header">
                <h3 class="wish-name">${name}</h3>
                <span class="wish-time">Baru saja</span>
            </div>
            <p class="wish-message">${message}</p>
        `;
        
        // Add new wish to container
        wishesContainer.insertBefore(wishCard, wishesContainer.firstChild);
        
        // Clear form
        wishesForm.reset();
    });
});

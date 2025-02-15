function enableScroll() {
    const container = document.querySelector('.content-container');
    container.style.overflowY = 'auto';
    document.getElementById('content2').scrollIntoView({ behavior: 'smooth' });

 // Mulai memutar musik
    const bgMusic = document.getElementById('bgMusic');
    if (bgMusic) {
        bgMusic.play().catch(error => console.log("Autoplay diblokir oleh browser:", error));
    }
    
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

// Fungsi untuk form RSVP
document.addEventListener('DOMContentLoaded', function() {
    const rsvpForm = document.getElementById('rsvpForm');
    const wishesForm = document.getElementById('wishesForm');
    const wishesContainer = document.querySelector('.wishes-container');

    // Form RSVP
    if (rsvpForm) {
        rsvpForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const attendance = document.getElementById('attendance').value;
            
            console.log('RSVP Dikirim:', name, attendance);
            
            alert('Terima kasih! RSVP Anda telah dikirim.');
            rsvpForm.reset();
        });
    }

    // Form Ucapan & Doa
    if (wishesForm && wishesContainer) {
        wishesForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('wishName').value;
            const message = document.getElementById('wishMessage').value;
            
            console.log('Ucapan Dikirim:', name, message);

            const wishCard = document.createElement('div');
            wishCard.className = 'wish-card';
            wishCard.innerHTML = `
                <div class="wish-header">
                    <h3 class="wish-name">${name}</h3>
                    <span class="wish-time">Baru saja</span>
                </div>
                <p class="wish-message">${message}</p>
            `;
            
            wishesContainer.prepend(wishCard);
            wishesForm.reset();
            alert('Terima kasih! Ucapan Anda telah dikirim.');
        });
    }
});



// Fungsi untuk mengambil parameter dari URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Menampilkan nama tamu dari URL
document.addEventListener('DOMContentLoaded', function() {
    const guestNameElement = document.getElementById('guestName');
    const guestName = getQueryParam('nama'); // Ambil parameter 'nama'

    if (guestName) {
        guestNameElement.textContent = decodeURIComponent(guestName); // Tampilkan nama
    }
});


//animasi
document.addEventListener('DOMContentLoaded', function() {
    // Elements to animate
    const animatedElements = [
        '.animate-title',
        '.animate-names',
        '.animate-to-text',
        '.animate-guest-name',
        '.animate-button'
    ];
    
    // Delay between each animation (in milliseconds)
    const delay = 300;
    
    // Apply animations with delay
    animatedElements.forEach((selector, index) => {
        const element = document.querySelector(selector);
        if (element) {
            setTimeout(() => {
                element.classList.add('appear');
            }, index * delay);
        }
    });
});


//untuk koneksi buruk
window.addEventListener("load", function () {
    document.querySelector(".content-container").style.display = "block";
});

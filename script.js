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

// kode lightbox
document.addEventListener("DOMContentLoaded", function () {
    const galleryItems = document.querySelectorAll(".gallery-item img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeLightbox = document.getElementById("close-lightbox");

    if (!lightbox || !lightboxImg || !closeLightbox) {
        console.error("Elemen lightbox tidak ditemukan.");
        return;
    }

    console.log("Lightbox initialized, found", galleryItems.length, "images.");

    galleryItems.forEach(item => {
        item.addEventListener("click", function () {
            console.log("Gambar diklik:", this.src);
            lightboxImg.src = this.src;
            lightbox.classList.add("active");
        });
    });

    closeLightbox.addEventListener("click", function () {
        console.log("Menutup lightbox.");
        lightbox.classList.remove("active");
    });

    lightbox.addEventListener("click", function (event) {
        if (event.target !== lightboxImg) {
            console.log("Klik di luar gambar, menutup lightbox.");
            lightbox.classList.remove("active");
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
        threshold: 0.8
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


//animasi waktu scroll konten 2
// Tambahkan kode ini di script.js
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const content = entry.target.querySelector('.wedding-content');
                if (content) {
                    content.classList.add('appear');
                }
            }
        });
    }, {
        threshold: 0.9 // Menentukan seberapa banyak elemen harus terlihat sebelum animasi dimulai
    });

    // Observasi section content2
    const content2 = document.getElementById('content2');
    if (content2) {
        observer.observe(content2);
    }
});


//animasi waktu scroll konten 3
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
            }
        });
    }, {
        threshold: 0.7  // 50% elemen terlihat sebelum animasi berjalan
    });

    // Observasi section content3
    const content3 = document.getElementById('content3');
    if (content3) {
        observer.observe(content3);
    }
});


//animasi waktu scroll konten 4
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
            }
        });
    }, {
        threshold: 0.5  // 50% elemen terlihat sebelum animasi berjalan
    });

    // Observasi section content4
    const content4 = document.getElementById('content4');
    if (content4) {
        observer.observe(content4);
    }
});


//hitung mundur konten 5
// Function to calculate and update the countdown
        function updateCountdown() {
            const weddingDate = new Date('August 23, 2025 08:00:00').getTime();
            const now = new Date().getTime();
            const distance = weddingDate - now;
            
            // Time calculations
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            // Display the result
            document.getElementById('countdown-days').innerText = days.toString().padStart(2, '0');
            document.getElementById('countdown-hours').innerText = hours.toString().padStart(2, '0');
            document.getElementById('countdown-minutes').innerText = minutes.toString().padStart(2, '0');
            document.getElementById('countdown-seconds').innerText = seconds.toString().padStart(2, '0');
            
            // If the countdown is finished, display a message
            if (distance < 0) {
                clearInterval(x);
                document.querySelector('.countdown-container').innerHTML = "<h3>Hari Bahagia Telah Tiba!</h3>";
            }
        }
        
        // Update the countdown every 1 second
        updateCountdown();
        const x = setInterval(updateCountdown, 1000);


//animasi konten 6
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".video-gallery, .photo-gallery, .gallery-item");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(element => {
        observer.observe(element);
    });
});

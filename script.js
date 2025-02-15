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

// Fungsi untuk form RSVP
document.addEventListener('DOMContentLoaded', function() {
    const rsvpForm = document.getElementById('rsvpForm');
    
    if (rsvpForm) {
        rsvpForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Ambil data dari form
            const name = document.getElementById('name').value;
            const attendance = document.querySelector('input[name="attendance"]:checked').value;
            
            // Simpan data (dalam contoh ini hanya di localStorage)
            const rsvpData = {
                name: name,
                attendance: attendance,
                timestamp: new Date()
            };
            
            // Simpan di localStorage
            let savedRSVPs = JSON.parse(localStorage.getItem('weddingRSVPs') || '[]');
            savedRSVPs.push(rsvpData);
            localStorage.setItem('weddingRSVPs', JSON.stringify(savedRSVPs));
            
            // Reset form
            rsvpForm.reset();
            
            // Tampilkan konfirmasi
            alert('Terima kasih! RSVP Anda telah dikirim.');
        });
    }
    
    // Fungsi untuk form Wishes
    const wishesForm = document.getElementById('wishesForm');
    const wishesContainer = document.querySelector('.wishes-container');
    
    if (wishesForm && wishesContainer) {
        // Fungsi untuk menampilkan ucapan
        function displayWishes() {
            // Ambil data dari localStorage
            let savedWishes = JSON.parse(localStorage.getItem('weddingWishes') || '[]');
            
            // Hapus konten saat ini (kecuali contoh jika diperlukan)
            // Uncomment baris berikut jika ingin menghapus contoh ucapan:
            // wishesContainer.innerHTML = '';
            
            // Tambahkan ucapan baru di atas
            for (let i = savedWishes.length - 1; i >= 0; i--) {
                const wish = savedWishes[i];
                
                // Buat elemen wish card
                const wishCard = document.createElement('div');
                wishCard.className = 'wish-card';
                
                // Format waktu
                const timestamp = new Date(wish.timestamp);
                const timeAgo = getTimeAgo(timestamp);
                
                wishCard.innerHTML = `
                    <div class="wish-header">
                        <h3 class="wish-name">${wish.name}</h3>
                        <span class="wish-time">${timeAgo}</span>
                    </div>
                    <p class="wish-message">${wish.message}</p>
                `;
                
                // Tambahkan ke container
                wishesContainer.prepend(wishCard);
            }
        }
        
        // Fungsi untuk mendapatkan waktu relatif
        function getTimeAgo(timestamp) {
            const now = new Date();
            const secondsAgo = Math.floor((now - timestamp) / 1000);
            
            if (secondsAgo < 60) {
                return 'Baru saja';
            } else if (secondsAgo < 3600) {
                const minutes = Math.floor(secondsAgo / 60);
                return `${minutes} menit yang lalu`;
            } else if (secondsAgo < 86400) {
                const hours = Math.floor(secondsAgo / 3600);
                return `${hours} jam yang lalu`;
            } else {
                const days = Math.floor(secondsAgo / 86400);
                return `${days} hari yang lalu`;
            }
        }
        
        // Tambahkan event listener untuk form
        wishesForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Ambil data dari form
            const name = document.getElementById('wishName').value;
            const message = document.getElementById('wishMessage').value;
            
            // Simpan data
            const wishData = {
                name: name,
                message: message,
                timestamp: new Date()
            };
            
            // Simpan di localStorage
            let savedWishes = JSON.parse(localStorage.getItem('weddingWishes') || '[]');
            savedWishes.push(wishData);
            localStorage.setItem('weddingWishes', JSON.stringify(savedWishes));
            
            // Reset form
            wishesForm.reset();
            
            // Perbarui tampilan
            displayWishes();
            
            // Tampilkan konfirmasi
            alert('Terima kasih! Ucapan Anda telah ditambahkan.');
        });
        
        // Tampilkan ucapan yang sudah ada saat halaman dimuat
        displayWishes();
    }
});

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
// Get all gallery items and lightbox elements
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';

// Create lightbox image element
const lightboxImg = document.createElement('img');
lightbox.appendChild(lightboxImg);

// Create close button
const closeButton = document.createElement('span');
closeButton.className = 'close-lightbox';
closeButton.innerHTML = '&times;';
lightbox.appendChild(closeButton);

// Add lightbox to document
document.body.appendChild(lightbox);

// Function to open lightbox
function openLightbox(imageSrc) {
    lightboxImg.src = imageSrc;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
}

// Function to close lightbox
function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
}

// Add click event listeners to gallery items
galleryItems.forEach(item => {
    const img = item.querySelector('img');
    item.addEventListener('click', () => {
        openLightbox(img.src);
    });
});

// Close lightbox when clicking close button
closeButton.addEventListener('click', closeLightbox);

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Close lightbox with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
    }
});

// Add touch swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

lightbox.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (Math.abs(touchEndX - touchStartX) > 50) { // Minimum swipe distance
        closeLightbox();
    }
});

// Add loading state
lightboxImg.addEventListener('load', () => {
    lightboxImg.style.opacity = '1';
});

lightboxImg.addEventListener('error', () => {
    console.error('Error loading image');
    closeLightbox();
});



//animasi untuk timeline cerita
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


//animasi konten 5
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Get all animated elements in content 5
const animatedElements = document.querySelectorAll(`
    #content5 .invitation-text,
    #content5 .event-card,
    #content5 .countdown-container,
    #content5 .closing-text
`);

// Apply initial styles and observe each element
animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 1s ease, transform 1s ease';
    observer.observe(element);
});
const eventCards = document.querySelectorAll('.event-card');
eventCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
    });
});

// Pulse animation for event icons
const eventIcons = document.querySelectorAll('.event-icon');
eventIcons.forEach(icon => {
    icon.style.animation = 'pulse 2s infinite';
});

// Map link hover effect
const mapLinks = document.querySelectorAll('.map-link');
mapLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
        link.style.transform = 'translateY(-3px)';
    });

    link.addEventListener('mouseleave', () => {
        link.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        link.style.transform = 'translateY(0)';
    });
});


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

//toggle
import React, { useState, useEffect } from 'react';
import { Music, MusicOff } from 'lucide-react';

const NavigationToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentSection, setCurrentSection] = useState(2);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleAudio = () => {
    const audio = document.getElementById('bgMusic');
    if (audio) {
      audio.muted = !audio.muted;
      setIsMuted(!isMuted);
    }
  };

  const scrollToSection = (sectionNumber) => {
    const section = document.getElementById(`content${sectionNumber}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setCurrentSection(sectionNumber);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = Array.from({ length: 8 }, (_, i) => 
        document.getElementById(`content${i + 2}`)
      );

      const currentPos = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (currentPos >= sectionTop && currentPos <= sectionBottom) {
            setCurrentSection(index + 2);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end">
      {/* Audio Toggle */}
      <button
        onClick={toggleAudio}
        className="mb-4 rounded-full bg-white/90 p-3 shadow-lg hover:bg-white transition-all duration-300"
      >
        {isMuted ? <MusicOff size={24} /> : <Music size={24} />}
      </button>

      {/* Navigation Toggle Button */}
      <button
        onClick={toggleMenu}
        className="mb-4 rounded-full bg-white/90 p-4 shadow-lg hover:bg-white transition-all duration-300"
      >
        <div className="space-y-1.5">
          <div className="h-0.5 w-6 bg-black"></div>
          <div className="h-0.5 w-6 bg-black"></div>
          <div className="h-0.5 w-6 bg-black"></div>
        </div>
      </button>

      {/* Navigation Menu */}
      <div className={`transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="bg-white/90 rounded-lg shadow-lg p-4 backdrop-blur-sm">
          <nav className="space-y-2">
            {[2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <button
                key={num}
                onClick={() => scrollToSection(num)}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-all duration-200
                  ${currentSection === num ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
              >
                {(() => {
                  switch(num) {
                    case 2: return 'Cover';
                    case 3: return 'Doa';
                    case 4: return 'Mempelai';
                    case 5: return 'Acara';
                    case 6: return 'Galeri';
                    case 7: return 'Cerita Kami';
                    case 8: return 'RSVP & Ucapan';
                    case 9: return 'Penutup';
                    default: return `Section ${num}`;
                  }
                })()}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavigationToggle;

// In your script.js
document.addEventListener('DOMContentLoaded', () => {
  const content2 = document.getElementById('content2');
  const navigationRoot = document.createElement('div');
  navigationRoot.id = 'navigation-toggle-root';
  document.body.appendChild(navigationRoot);
  
  // Show navigation when content2 is visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Initialize your React component here
        // You'll need to include React and ReactDOM scripts
        ReactDOM.render(<NavigationToggle />, navigationRoot);
      }
    });
  });
  
  observer.observe(content2);
});

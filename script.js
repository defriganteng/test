let isScrollEnabled = false;

// Mencegah scroll sebelum tombol ditekan
document.addEventListener('wheel', function(event) {
    if (!isScrollEnabled) {
        event.preventDefault();
    }
}, { passive: false });

document.addEventListener('touchmove', function(event) {
    if (!isScrollEnabled) {
        event.preventDefault();
    }
}, { passive: false });

document.getElementById('unlockScroll').addEventListener('click', function() {
    isScrollEnabled = true;
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
});

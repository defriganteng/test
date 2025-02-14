let isScrollUnlocked = false;

document.getElementById('unlockScroll').addEventListener('click', function() {
    isScrollUnlocked = true;
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
});

window.addEventListener('wheel', function(e) {
    if (!isScrollUnlocked) {
        e.preventDefault();
    }
}, { passive: false });

window.addEventListener('touchmove', function(e) {
    if (!isScrollUnlocked) {
        e.preventDefault();
    }
}, { passive: false });

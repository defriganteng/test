function enableScroll() {
    const container = document.querySelector('.content-container');
    container.style.overflowY = 'auto';
    document.getElementById('content2').scrollIntoView({ behavior: 'smooth' });
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

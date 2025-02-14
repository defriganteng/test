document.addEventListener("DOMContentLoaded", function () {
    const nextButton = document.getElementById("nextButton");

    // Saat tombol ditekan, scroll otomatis ke Konten 2 dan aktifkan scrolling
    nextButton.addEventListener("click", function () {
        document.body.style.overflow = "auto"; // Aktifkan scrolling
        window.scrollTo({
            top: window.innerHeight, // Scroll ke konten 2
            behavior: "smooth"
        });
    });
});

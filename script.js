document.addEventListener("DOMContentLoaded", function () {
    const nextButton = document.getElementById("nextButton");

    // Saat tombol ditekan, scroll ke Konten 2 dan izinkan scrolling
    nextButton.addEventListener("click", function () {
        document.body.style.overflow = "auto"; // Aktifkan scrolling
        document.documentElement.scrollTo({
            top: window.innerHeight, // Scroll ke konten 2
            behavior: "smooth"
        });
    });

    // Cegah scroll sebelum tombol ditekan
    document.body.style.overflow = "hidden"; // Nonaktifkan scroll di awal
});

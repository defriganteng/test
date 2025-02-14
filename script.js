document.addEventListener("DOMContentLoaded", function () {
    const nextButton = document.getElementById("nextButton");
    const container = document.querySelector(".container");
    let canScroll = false;

    // Saat tombol ditekan, izinkan scroll dan pindahkan ke konten 2
    nextButton.addEventListener("click", function () {
        canScroll = true;
        document.body.style.overflow = "auto"; // Aktifkan scroll
        container.style.transform = "translateY(-100vh)"; // Scroll otomatis ke Konten 2
    });

    // Cegah scroll sebelum tombol ditekan
    window.addEventListener("wheel", function (e) {
        if (!canScroll) e.preventDefault();
    }, { passive: false });

    window.addEventListener("touchmove", function (e) {
        if (!canScroll) e.preventDefault();
    }, { passive: false });
});

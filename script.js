let isScrollEnabled = false;

document.body.style.overflow = "hidden"; // Mencegah scroll sebelum tombol ditekan

document.getElementById("unlockScroll").addEventListener("click", function () {
    isScrollEnabled = true;
    document.body.style.overflow = "auto"; // Aktifkan scroll

    // Scroll otomatis ke Konten 2
    document.getElementById("content2").scrollIntoView({ behavior: "smooth" });
});

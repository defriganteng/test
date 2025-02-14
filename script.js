let isScrollEnabled = false;

// Mencegah scroll sebelum tombol ditekan
document.body.style.overflow = "hidden";

document.getElementById("unlockScroll").addEventListener("click", function () {
    isScrollEnabled = true;
    document.body.style.overflow = "auto"; // Aktifkan scroll
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
});

document.body.style.overflow = "hidden"; // Mencegah scroll sebelum tombol ditekan

document.getElementById("unlockScroll").addEventListener("click", function () {
    document.body.style.overflow = "auto"; // Aktifkan scroll

    // Scroll otomatis ke Konten 2
    document.querySelector("#content2").scrollIntoView({ behavior: "smooth", block: "start" });
});

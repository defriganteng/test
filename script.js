document.body.style.overflow = "hidden"; // Mencegah scroll sebelum tombol ditekan

document.getElementById("unlockScroll").addEventListener("click", function () {
    // Aktifkan scroll
    document.body.style.overflow = "auto";

    // Pastikan browser memperbarui DOM sebelum scroll terjadi
    requestAnimationFrame(() => {
        document.getElementById("content2").scrollIntoView({ behavior: "smooth", block: "start" });
    });
});

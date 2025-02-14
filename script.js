document.body.style.overflow = "hidden"; // Mencegah scroll sebelum tombol ditekan

document.getElementById("unlockScroll").addEventListener("click", function () {
    document.body.style.overflow = "auto"; // Aktifkan scroll

    // Pastikan browser telah mengupdate tampilan sebelum scroll
    setTimeout(() => {
        const target = document.getElementById("content2");

        // Coba scrollIntoView (metode yang lebih umum)
        target.scrollIntoView({ behavior: "smooth", block: "start" });

        // Jika scrollIntoView gagal, gunakan scrollTo sebagai cadangan
        setTimeout(() => {
            window.scrollTo({ top: target.offsetTop, behavior: "smooth" });
        }, 200); // Delay kecil untuk memastikan perpindahan terjadi
    }, 50); // Delay agar overflow berubah sebelum scroll
});

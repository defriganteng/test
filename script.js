document.body.style.overflow = "hidden"; // Mencegah scroll sebelum tombol ditekan

document.getElementById("unlockScroll").addEventListener("click", function () {
    document.body.style.overflow = "auto"; // Aktifkan scroll

    // Gunakan delay untuk memastikan overflow berubah sebelum scroll terjadi
    setTimeout(() => {
        const target = document.getElementById("content2");
        window.scrollTo({ top: target.offsetTop, behavior: "smooth" });
    }, 100); // Delay 100ms untuk memastikan efek bekerja
});

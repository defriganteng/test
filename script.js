let isScrollEnabled = false;

document.body.style.overflow = "hidden"; // Mencegah scroll sebelum tombol ditekan

document.getElementById("unlockScroll").addEventListener("click", function () {
    isScrollEnabled = true;
    document.body.style.overflow = "auto"; // Aktifkan scroll

    // Timeout kecil untuk memastikan perubahan terjadi sebelum scroll
    setTimeout(() => {
        window.scrollTo({
            top: document.getElementById("content2").offsetTop,
            behavior: "smooth"
        });
    }, 100); // Delay 100ms untuk memastikan efek bekerja
});

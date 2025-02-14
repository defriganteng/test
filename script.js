document.getElementById("unlockButton").addEventListener("click", function () {
    // Menghapus class "locked" dari konten 2 dan 3
    document.getElementById("konten2").classList.remove("locked");
    document.getElementById("konten3").classList.remove("locked");

    // Scroll otomatis ke konten 2
    document.getElementById("konten2").scrollIntoView({ behavior: "smooth" });
});

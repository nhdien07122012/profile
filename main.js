document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.getElementById("main-content");
    const qrToggle = document.getElementById("qr-toggle");
    const qrCode = document.getElementById("qr-code");

    menuToggle.addEventListener("click", function() {
        sidebar.classList.toggle("active");
        mainContent.classList.toggle("active");
    });

    qrToggle.addEventListener("click", function() {
        qrCode.style.display = qrCode.style.display === "flex" ? "none" : "flex";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.getElementById("main-content");
    const qrToggle = document.getElementById("qr-toggle");
    const qrCode = document.getElementById("qr-code");

    // Toggle sidebar khi nhấn nút menu
    menuToggle.addEventListener("click", function(event) {
        event.stopPropagation(); // Ngăn chặn sự kiện click lan sang các phần tử khác
        sidebar.classList.toggle("active");
        mainContent.classList.toggle("active");
    });

    // Tự động ẩn sidebar khi click vào vùng nội dung chính
    mainContent.addEventListener("click", function() {
        sidebar.classList.remove("active");
        mainContent.classList.remove("active");
    });

    // Toggle QR Code khi nhấn nút qr-toggle
    qrToggle?.addEventListener("click", function(event) {
        event.stopPropagation();
        qrCode.style.display = qrCode.style.display === "flex" ? "none" : "flex";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.getElementById("main-content");

    menuToggle.addEventListener("click", function() {
        sidebar.classList.toggle("active");
        mainContent.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.getElementById("main-content");
    const addImageBtn = document.getElementById("add-image-btn");
    const fileInput = document.getElementById("image-upload");
    const dateInput = document.getElementById("image-date");
    const gallerySection = document.querySelector(".gallery");
    const preloader = document.getElementById("preloader");

    // Toggle sidebar
    if (menuToggle && sidebar && mainContent) {
        menuToggle.addEventListener("click", function (event) {
            event.stopPropagation();
            sidebar.classList.toggle("active");
            mainContent.classList.toggle("active");
            sidebar.classList.toggle("no-shadow", !sidebar.classList.contains("active"));
        });

        mainContent.addEventListener("click", function () {
            sidebar.classList.remove("active");
            mainContent.classList.remove("active");
            sidebar.classList.add("no-shadow");
        });
    }

    
    // Số lượng truy cập
    // Lấy số lượt truy cập từ localStorage
    let visitCount = localStorage.getItem("visitCount");

    // Nếu chưa có, đặt giá trị ban đầu là 0
    if (visitCount === null) {
        visitCount = 0;
    }

    // Tăng giá trị mỗi khi người dùng truy cập
    visitCount++;

    // Lưu lại vào localStorage
    localStorage.setItem("visitCount", visitCount);

    // Hiển thị số lượt truy cập trên trang
    const visitCounter = document.getElementById("visit-counter");
    if (visitCounter) {
        visitCounter.textContent = `Viewer: ${visitCount}`;
    }


    // Xử lý preloader
    if (preloader) {
        setTimeout(() => {
            preloader.style.opacity = "0";
            preloader.style.transition = "opacity 1s ease";

            setTimeout(() => {
                preloader.style.display = "none";
                document.body.classList.remove("hidden");
                document.body.classList.add("visible");
            }, 1000);
        }, 2000);
    }

            // Lấy thẻ img trong div có id là "qr-code"
        const qrImage = document.querySelector('#qr-code img');

        // Thêm sự kiện click vào ảnh
        qrImage.addEventListener('click', function () {
            // Kiểm tra xem ảnh đã được phóng to chưa
            if (this.classList.contains('zoomed')) {
                // Nếu đã phóng to, xóa lớp zoomed (thu nhỏ ảnh lại)
                this.classList.remove('zoomed');
            } else {
                // Nếu chưa phóng to, thêm lớp zoomed
                this.classList.add('zoomed');
            }
});
        
    // Xử lý load ảnh gallery
    


});

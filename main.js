document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.getElementById("main-content");

    // Toggle sidebar khi nhấn nút menu
    menuToggle.addEventListener("click", function(event) {
        event.stopPropagation(); // Ngăn chặn sự kiện click lan sang các phần tử khác
        sidebar.classList.toggle("active");
        mainContent.classList.toggle("active");

        // Thêm hoặc xóa class 'no-shadow' để ẩn shadow
        if (!sidebar.classList.contains("active")) {
            sidebar.classList.add("no-shadow");
        } else {
            sidebar.classList.remove("no-shadow");
        }
    });

    // Tự động ẩn sidebar khi click vào vùng nội dung chính
    mainContent.addEventListener("click", function() {
        sidebar.classList.remove("active");
        mainContent.classList.remove("active");

        // Thêm class 'no-shadow' khi sidebar ẩn
        sidebar.classList.add("no-shadow");
    });
});

document.getElementById("add-image-btn").addEventListener("click", function () {
    const fileInput = document.getElementById("image-upload");
    const dateInput = document.getElementById("image-date");
    const gallerySection = document.querySelector(".gallery");

    const file = fileInput.files[0];
    const date = dateInput.value;

    if (file && date) {
        const reader = new FileReader();
        reader.onload = function (e) {
            // Tạo thẻ gallery-item mới
            const galleryItem = document.createElement("div");
            galleryItem.classList.add("gallery-item");
            galleryItem.innerHTML = `
                <img src="${e.target.result}" alt="Uploaded Image">
                <p>Ngày chụp: ${date}</p>
            `;
            // Thêm vào gallery
            gallerySection.appendChild(galleryItem);

            // Reset form
            fileInput.value = "";
            dateInput.value = "";
        };
        reader.readAsDataURL(file);
    } else {
        alert("Vui lòng chọn ảnh và nhập ngày chụp!");
    }
});

// Nút ẩn/hiện sidebar (đã có sẵn trong file của bạn)
document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("sidebar").classList.toggle("hidden");
});

document.addEventListener("DOMContentLoaded", function () {
    fetch("gallery/gallery-data.json")
        .then((response) => response.json())
        .then((data) => {
            const gallerySection = document.querySelector(".gallery");

            data.forEach((item) => {
                const galleryItem = document.createElement("div");
                galleryItem.classList.add("gallery-item");
                galleryItem.innerHTML = `
                    <img src="${item.image}" alt="Uploaded Image">
                    <p>Ngày chụp: ${item.date}</p>
                `;
                gallerySection.appendChild(galleryItem);
            });
        })
        .catch((error) => console.error("Lỗi khi tải dữ liệu:", error));
});

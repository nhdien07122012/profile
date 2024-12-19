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

    // Thêm ảnh vào gallery
    if (addImageBtn && fileInput && dateInput && gallerySection) {
        addImageBtn.addEventListener("click", function () {
            const file = fileInput.files[0];
            const date = dateInput.value;

            if (file && date) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    const galleryItem = document.createElement("div");
                    galleryItem.classList.add("gallery-item");
                    galleryItem.innerHTML = `
                        <img src="${e.target.result}" alt="Uploaded Image">
                        <p>Ngày chụp: ${date}</p>
                    `;
                    gallerySection.appendChild(galleryItem);

                    fileInput.value = "";
                    dateInput.value = "";
                };
                reader.readAsDataURL(file);
            } else {
                alert("Vui lòng chọn ảnh và nhập ngày chụp!");
            }
        });
    }

    // Tải dữ liệu gallery từ JSON
    fetch("gallery/gallery-data.json")
        .then((response) => response.json())
        .then((data) => {
            if (gallerySection) {
                data.forEach((item) => {
                    const galleryItem = document.createElement("div");
                    galleryItem.classList.add("gallery-item");
                    galleryItem.innerHTML = `
                        <img src="${item.image}" alt="Uploaded Image">
                        <p>Ngày chụp: ${item.date}</p>
                    `;
                    gallerySection.appendChild(galleryItem);
                });
            }
        })
        .catch((error) => console.error("Lỗi khi tải dữ liệu:", error));

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
});

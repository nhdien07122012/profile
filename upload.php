<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $targetDir = "gallery/"; // Thư mục lưu ảnh
    $dataFile = "gallery/gallery-data.json"; // File JSON để lưu thông tin

    // Kiểm tra thư mục tồn tại, nếu không thì tạo
    if (!is_dir($targetDir)) {
        mkdir($targetDir, 0777, true);
    }

    // Xử lý file upload
    $imageName = basename($_FILES["image"]["name"]); // Tên file ảnh
    $targetFile = $targetDir . $imageName;

    if (move_uploaded_file($_FILES["image"]["tmp_name"], $targetFile)) {
        $imageDate = $_POST["image-date"] ?? date("Y-m-d");

        // Đọc dữ liệu hiện có từ JSON
        $currentData = file_exists($dataFile) ? json_decode(file_get_contents($dataFile), true) : [];

        // Thêm dữ liệu mới
        $currentData[] = [
            "image" => $targetFile,
            "date" => $imageDate
        ];

        // Ghi dữ liệu mới vào JSON
        file_put_contents($dataFile, json_encode($currentData, JSON_PRETTY_PRINT));

        echo "Upload thành công!";
        header("Location: index.html"); // Quay lại trang chính
        exit;
    } else {
        echo "Lỗi: Không thể tải ảnh lên.";
    }
} else {
    echo "Lỗi: Phương thức không hợp lệ.";
}
?>

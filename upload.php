<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $targetDir = "gallery/"; // Thư mục lưu ảnh
    $imageName = basename($_FILES["image"]["name"]);
    $targetFile = $targetDir . $imageName;

    // Kiểm tra và lưu ảnh
    if (move_uploaded_file($_FILES["image"]["tmp_name"], $targetFile)) {
        $imageDate = $_POST["image-date"];

        // Ghi thông tin ảnh vào file JSON (để sử dụng sau khi reload)
        $dataFile = "gallery/gallery-data.json";
        $currentData = file_exists($dataFile) ? json_decode(file_get_contents($dataFile), true) : [];

        $currentData[] = [
            "image" => $targetFile,
            "date" => $imageDate
        ];
        file_put_contents($dataFile, json_encode($currentData));

        // Quay về trang chính
        header("Location: index.html");
        exit;
    } else {
        echo "Lỗi: Không thể tải ảnh lên.";
    }
}
?>

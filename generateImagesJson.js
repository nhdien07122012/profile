const fs = require('fs');
const path = require('path');

const galleryDir = path.join(__dirname, 'gallery');
const outputFilePath = path.join(__dirname, 'images.json');

fs.readdir(galleryDir, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    const images = files.filter(file => {
        const ext = path.extname(file).toLowerCase();
        return ext === '.jpg' || ext === '.jpeg' || ext === '.png' || ext === '.gif' || ext === '.webp';
    }).map(file => {
        // Tạo đối tượng với các thuộc tính file và text (text có thể để mặc định là một chuỗi trống)
        return {
            file: file,
            text: ""  // Bạn có thể thay đổi sau khi người dùng nhập mô tả cho ảnh
        };
    });

    fs.writeFile(outputFilePath, JSON.stringify(images, null, 4), err => {
        if (err) {
            console.error('Error writing JSON file:', err);
            return;
        }
        console.log('images.json has been generated successfully.');
    });
});

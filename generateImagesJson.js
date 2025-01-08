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
    });

    fs.writeFile(outputFilePath, JSON.stringify(images, null, 4), err => {
        if (err) {
            console.error('Error writing JSON file:', err);
            return;
        }
        console.log('images.json has been generated successfully.');
    });
});
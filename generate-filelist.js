const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'database');
const output = path.join(__dirname, 'filelist.json');

fs.readdir(dir, (err, files) => {
    if (err) throw err;
    const list = files.filter(f => !f.startsWith('.')).map(filename => {
        const stat = fs.statSync(path.join(dir, filename));
        return {
            name: filename,
            date: stat.mtime.toISOString().replace('T', ' ').substring(0, 16),
            url: `database/${encodeURIComponent(filename)}`
        };
    });
    fs.writeFileSync(output, JSON.stringify(list, null, 2), 'utf8');
    console.log('Đã tạo filelist.json!');
});
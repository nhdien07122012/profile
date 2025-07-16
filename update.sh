#!/bin/bash

# Thoát nếu có lỗi
set -e

echo "📁 Thêm file vào Git..."
git add .

echo "📝 Commit thay đổi..."
git commit -m "update repo"

echo "☁️ Đẩy lên GitHub..."
git push origin main

echo "✅ Hoàn tất!"

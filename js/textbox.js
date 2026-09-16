// Lấy ô nhập và chỗ hiển thị
const o = document.getElementById('hoTen')
const hien = document.getElementById('xemTruoc')

// input chạy sau MỖI ký tự, khác change chỉ chạy khi rời ô
o.addEventListener('input', function (e) {
  hien.textContent = e.target.value || '(chưa nhập gì)'
})

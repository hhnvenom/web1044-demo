// Lấy ô nhập và chỗ hiển thị
const o = document.getElementById('hoTen')
const hien = document.getElementById('xemTruoc')

// input chạy sau MỖI ký tự gõ vào
o.addEventListener('input', function (e) {
  const val = e.target.value
  hien.textContent = val || '(chưa nhập gì)'
})

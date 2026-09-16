// 1. Tạo phần tử nút
const nut = document.createElement('button')
nut.textContent = 'Thêm giỏ hàng'
document.body.appendChild(nut)

// 2. Viết hàm xử lý riêng
let dem = 0
function themVaoGio() {
  dem++
  document.getElementById('ketQua').textContent = 'Đã thêm ' + dem + ' món'
}

// 3. Gắn hàm vào sự kiện click
nut.addEventListener('click', themVaoGio)

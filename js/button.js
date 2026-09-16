// 1. Tạo phần tử nút
const nut = document.createElement('button')
nut.textContent = 'Thêm giỏ hàng'
document.body.appendChild(nut)

// 2. Viết hàm xử lý riêng
const ketQua = document.getElementById('ketQua')
let dem = 0
function themVaoGio() {
  dem++
  ketQua.textContent = 'Đã thêm ' + dem + ' món'
}

// 3. Gắn hàm vào sự kiện click
nut.addEventListener('click', themVaoGio)

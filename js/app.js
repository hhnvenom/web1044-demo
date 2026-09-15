// ======================================================
//  Bài 7 · Demo 1 — addEventListener
//  Chạy: npx serve .
// ======================================================

// --- phần của bài 6: render danh sách sản phẩm ---
function renderProducts() {
  document.getElementById('danh-sach').innerHTML = products.map(function (p) {
    return '<article class="card">' +
      '<div class="emoji">' + p.emoji + '</div>' +
      '<h3>' + p.name + '</h3>' +
      '<p class="desc">' + p.desc + '</p>' +
      '<div class="price">' + p.price.toLocaleString('vi-VN') + 'đ</div>' +
      '<button class="mua" data-ten="' + p.name + '" data-gia="' + p.price + '">Thêm giỏ hàng</button>' +
      '</article>'
  }).join('')
}
renderProducts()

// --- phần MỚI của bài 7: cho trang biết lắng nghe ---
const btn = document.getElementById('btn')
const out = document.getElementById('out')
let dem = 0

btn.addEventListener('click', function () {
  dem++
  out.textContent = 'Đã bấm ' + dem + ' lần'
})

// Ba thành phần: PHẦN TỬ NÀO lắng nghe · SỰ KIỆN GÌ · LÀM GÌ khi xảy ra.
// Chú ý: addEventListener('click', xuLy) — KHÔNG có dấu ngoặc sau tên hàm.
// Viết xuLy() là gọi ngay lập tức rồi truyền kết quả vào, sai hoàn toàn.

// ======================================================
//  Demo 2 — Event delegation: MỘT listener cho cả danh sách
// ======================================================

// Một listener duy nhất ở thẻ cha
document.getElementById('ds').addEventListener('click', function (e) {
  if (!e.target.classList.contains('mua-nho')) return
  document.getElementById('out-ds').textContent = 'Đã thêm: ' + e.target.dataset.ten
})

// Dòng kiểm tra class ở trên là BẮT BUỘC — không có nó thì bấm vào
// khoảng trống giữa các nút cũng chạy.
//
// Vì sao không gắn listener cho từng nút?
// Vì render lại danh sách bằng innerHTML sẽ xoá nút cũ kèm listener của nó.
// Delegation gắn ở thẻ cha nên không bị mất.

// Áp dụng ngay cho danh sách sản phẩm thật
document.getElementById('danh-sach').addEventListener('click', function (e) {
  if (!e.target.classList.contains('mua')) return
  out.textContent = 'Đã thêm: ' + e.target.dataset.ten
})

// ======================================================
//  Demo 3 — Hiệu ứng ẩn hiện bằng class
// ======================================================
const box = document.getElementById('box')

document.getElementById('btn-box').addEventListener('click', function () {
  box.classList.toggle('hien')
})

// JavaScript chỉ bật/tắt class. Hiệu ứng mượt là việc của CSS transition.
// Đừng dùng JS để đổi opacity từng bước.

// ---- Hiệu ứng TỰ CHẠY, không cần bấm nút (LAB 7.1) ----
setTimeout(function () { box.classList.add('hien') }, 2000)     // hiện sau 2 giây
setTimeout(function () { box.classList.remove('hien') }, 5000)  // ẩn sau 5 giây

// Hai mốc ĐỘC LẬP: cả hai tính từ lúc trang tải xong, không nối tiếp nhau.
// Hiện ở giây thứ 2, ẩn ở giây thứ 5 — tồn tại 3 giây.

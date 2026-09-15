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

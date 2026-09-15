// ======================================================
//  Bài 7 · end — Render sản phẩm (bài 6) + hiệu ứng chào mừng
//  Chạy: npx serve .
// ======================================================

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

// Hiệu ứng chào mừng: JS chỉ bật/tắt class, CSS transition lo phần mượt
const box = document.getElementById('box')
setTimeout(function () { box.classList.add('hien') }, 2000)     // hiện sau 2 giây
setTimeout(function () { box.classList.remove('hien') }, 5000)  // ẩn sau 5 giây

// Phần của bài 6: render danh sách sản phẩm. Giữ nguyên, không cần sửa.
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

// ==========================================================
//  Bài 8 · LAB 08 — Code khởi tạo
//  Slide: "LAB 08"
//  Chạy: npx serve .   rồi mở http://localhost:3000
// ==========================================================

// Đây chính là kết quả cuối bài 7: sản phẩm + giỏ hàng chạy bằng sự kiện,
// nhưng CHƯA lưu được gì. Nhiệm vụ của bạn là thêm phần lưu trữ.

let cart = []

function formatGia(n) {
  return n.toLocaleString('vi-VN') + 'đ'
}

function tongTien() {
  return cart.reduce((t, item) => t + products.find(p => p.id === item.id).price * item.qty, 0)
}

function renderProducts() {
  document.getElementById('productList').innerHTML = products.map(p =>
    '<article class="card">' +
      '<div class="emoji">' + p.emoji + '</div>' +
      '<h3>' + p.name + '</h3>' +
      '<p class="price">' + formatGia(p.price) + '</p>' +
      '<button data-add="' + p.id + '">Thêm vào giỏ</button>' +
    '</article>'
  ).join('')
}

function renderCart() {
  const box = document.getElementById('cartBox')

  if (cart.length === 0) {
    box.innerHTML = '<p class="empty">Giỏ hàng trống</p>'
    document.getElementById('cartTotal').textContent = formatGia(0)
    return
  }

  box.innerHTML = cart.map(item => {
    const p = products.find(x => x.id === item.id)
    return '<div class="cart-item">' +
      '<span>' + p.emoji + ' ' + p.name + '</span>' +
      '<span>' + formatGia(p.price) + ' \u00d7 ' + item.qty + '</span>' +
      '<span>' +
        '<button data-minus="' + p.id + '">\u2212</button>' +
        '<button data-plus="' + p.id + '">+</button>' +
        '<button data-remove="' + p.id + '">Xoá</button>' +
      '</span>' +
    '</div>'
  }).join('')

  document.getElementById('cartTotal').textContent = formatGia(tongTien())
}

// Event delegation — một listener cho cả danh sách (bài 7)
document.getElementById('productList').addEventListener('click', (e) => {
  const btn = e.target.closest('[data-add]')
  if (btn) themVaoGio(Number(btn.dataset.add))
})

document.getElementById('cartBox').addEventListener('click', (e) => {
  const plus = e.target.closest('[data-plus]')
  const minus = e.target.closest('[data-minus]')
  const remove = e.target.closest('[data-remove]')

  if (plus) {
    cart.find(i => i.id === Number(plus.dataset.plus)).qty++
  } else if (minus) {
    const item = cart.find(i => i.id === Number(minus.dataset.minus))
    item.qty--
    if (item.qty <= 0) cart = cart.filter(i => i.id !== item.id)
  } else if (remove) {
    cart = cart.filter(i => i.id !== Number(remove.dataset.remove))
  } else {
    return
  }
  renderCart()
})

function themVaoGio(id) {
  const co = cart.find(item => item.id === id)
  if (co) co.qty++
  else cart.push({ id: id, qty: 1 })
  renderCart()
}

// ==========================================================
//  LAB 8.1 — Dark / Light mode
//  Thêm hai nút Light và Dark vào index.html, đổi màu nền và màu chữ,
//  lưu lựa chọn vào localStorage.
//  Tiêu chí: tải lại trang vẫn giữ theme; lần đầu mặc định Light;
//            dùng class chứ không sửa style trực tiếp.
//  CSS gợi ý đã có sẵn trong css/style.css.
// TODO 8.1


//  LAB 8.2 — Lưu giỏ hàng vào localStorage
//  Ba chỗ cần sửa: đọc lại lúc khởi động · hàm luuGio() · gọi luuGio() trong renderCart().
//  Tiêu chí: thêm 3 món rồi F5 vẫn đủ 3 món; tổng tiền đúng;
//            xoá hết giỏ rồi F5 vẫn trống.
// TODO 8.2


//  LAB 8.3 — Thông báo mua hàng thành công
//  Thêm nút Thanh toán, bấm vào thì hiện Notification hệ thống.
//  Tiêu chí: xin quyền lúc bấm nút chứ không phải lúc tải trang;
//            có phương án dự phòng khi bị từ chối; thanh toán xong thì xoá giỏ.
// TODO 8.3


//  LAB 8.4 — Form đăng ký có validate
//  Form gồm Email · Mật khẩu · Số điện thoại · Tuổi · checkbox Đồng ý điều khoản.
//  Năm luật: isEmail · isStrongPassword(minLength 6) · isMobilePhone('vi-VN')
//            · isInt({ min: 18 }) · checkbox.checked
//  Gom lỗi vào mảng rồi hiện một lượt, đừng alert từng cái:
//    const loi = []
//    if (!validator.isEmail(email)) { loi.push(['email', 'Email không hợp lệ']) }
//    if (loi.length > 0) { hienLoi(loi) } else { /* gửi form */ }
//  Nhớ e.preventDefault() để form không tự gửi.
// TODO 8.4


//  LAB 8.5 — Nhờ AI gợi ý 3 chức năng bổ sung, đánh giá rồi làm ít nhất một cái.
//  LAB 8.6 — Bài mở rộng, giảng viên giao thêm.
// ==========================================================

renderProducts()
renderCart()

// ======================================================
//  Bài 7 · Demo 4 — Giỏ hàng chạy được
//  Vòng đời: thao tác → sửa DỮ LIỆU → render lại
// ======================================================

let cart = []

function themVaoGio(ten, gia) {
  const co = cart.find(function (i) { return i.ten === ten })
  if (co) co.qty++
  else cart.push({ ten: ten, gia: gia, qty: 1 })
  renderCart()          // luôn render lại sau khi sửa dữ liệu
}

function renderCart() {
  const tong = cart.reduce(function (t, i) { return t + i.gia * i.qty }, 0)
  document.getElementById('gio').innerHTML =
    cart.map(function (i) { return '<div>' + i.ten + ' × ' + i.qty + '</div>' }).join('') +
    '<b>Tổng: ' + tong.toLocaleString('vi-VN') + 'đ</b>'
}

// Delegation ở thẻ cha của danh sách sản phẩm
document.getElementById('danh-sach').addEventListener('click', function (e) {
  if (!e.target.dataset.ten) return
  themVaoGio(e.target.dataset.ten, Number(e.target.dataset.gia))
})

renderCart()

// find (bài 4) để cộng dồn sản phẩm trùng · reduce để tính tổng · map để render.
// Bài 7 không dạy gì mới về mảng, chỉ ghép lại.
// Bấm thêm cùng một sản phẩm hai lần để thấy nó CỘNG DỒN chứ không tạo dòng mới.

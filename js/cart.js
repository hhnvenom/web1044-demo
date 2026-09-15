// ======================================================
//  Bài 7 · end — Giỏ hàng đầy đủ: thêm · tăng · giảm · xoá
//  Vòng đời: thao tác → sửa DỮ LIỆU → render lại
// ======================================================

let cart = []

// ---------- sửa dữ liệu ----------
function themVaoGio(ten, gia) {
  const co = cart.find(function (i) { return i.ten === ten })
  if (co) co.qty++
  else cart.push({ ten: ten, gia: gia, qty: 1 })
  renderCart()          // luôn render lại sau khi sửa dữ liệu
}

function doiSoLuong(ten, delta) {
  const co = cart.find(function (i) { return i.ten === ten })
  if (!co) return
  co.qty += delta
  if (co.qty <= 0) xoaKhoiGio(ten)   // giảm về 0 thì xoá luôn
  else renderCart()
}

function xoaKhoiGio(ten) {
  cart = cart.filter(function (i) { return i.ten !== ten })
  renderCart()
}

// ---------- render ----------
function renderCart() {
  const gio = document.getElementById('gio')

  if (cart.length === 0) {
    gio.innerHTML = '<p class="trong">Giỏ hàng của bạn đang trống</p>'
    return
  }

  const tong = cart.reduce(function (t, i) { return t + i.gia * i.qty }, 0)

  gio.innerHTML =
    '<table><thead><tr>' +
      '<th>Sản phẩm</th><th>Số lượng</th><th class="so">Thành tiền</th><th></th>' +
    '</tr></thead><tbody>' +
    cart.map(function (i) {
      return '<tr>' +
        '<td>' + i.ten + '</td>' +
        '<td><span class="qty">' +
          '<button data-act="giam" data-ten="' + i.ten + '">−</button>' +
          '<b>' + i.qty + '</b>' +
          '<button data-act="tang" data-ten="' + i.ten + '">+</button>' +
        '</span></td>' +
        '<td class="so">' + (i.gia * i.qty).toLocaleString('vi-VN') + 'đ</td>' +
        '<td><button class="xoa" data-act="xoa" data-ten="' + i.ten + '">Xoá</button></td>' +
        '</tr>'
    }).join('') +
    '</tbody><tfoot><tr>' +
      '<td class="tong">Tổng</td><td></td>' +
      '<td class="so tong">' + tong.toLocaleString('vi-VN') + 'đ</td><td></td>' +
    '</tr></tfoot></table>'
}

// ---------- sự kiện: hai listener, đều là delegation ----------
document.getElementById('danh-sach').addEventListener('click', function (e) {
  if (!e.target.classList.contains('mua')) return
  themVaoGio(e.target.dataset.ten, Number(e.target.dataset.gia))
})

document.getElementById('gio').addEventListener('click', function (e) {
  const act = e.target.dataset.act
  if (!act) return
  if (act === 'tang') doiSoLuong(e.target.dataset.ten, 1)
  else if (act === 'giam') doiSoLuong(e.target.dataset.ten, -1)
  else if (act === 'xoa') xoaKhoiGio(e.target.dataset.ten)
})

renderCart()

// Ba tình huống dễ quên, đều đã xử lý ở trên:
//   1. Giảm số lượng về 0  → xoá khỏi giỏ (doiSoLuong)
//   2. Giỏ hàng trống      → hiện dòng chữ, không để bảng trắng (renderCart)
//   3. Thêm trùng sản phẩm → cộng dồn thành một dòng (themVaoGio)
//
// Nhấn F5 thì mất sạch giỏ hàng — bài 8 sẽ xử lý bằng localStorage.

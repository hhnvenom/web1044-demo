// ============================================================
//  events.js — XỬ LÝ SỰ KIỆN   (buổi 7)
// ============================================================
//  Quy tắc: sự kiện SỬA DỮ LIỆU trước, rồi GỌI LẠI RENDER.
//  Không sửa thẳng HTML — làm vậy dữ liệu và màn hình sẽ lệch nhau.
// ============================================================

// Giỏ hàng dùng chung cho mọi trang, đọc lại từ localStorage (buổi 8)
const gioHang = new Cart(docGioHang())
let danhMucDangChon = 'all'

function veLaiSanPham() {
  const danhSach = PRODUCTS.filter(function (p) {
    return new Product(p).matchesCategory(danhMucDangChon)
  })
  renderSanPham(danhSach)
}

function capNhatTatCa() {
  renderGioHang(gioHang)
  capNhatHeader(gioHang)
  luuGioHang(gioHang)
}

// ---------- Dark mode (buổi 8) ----------
function apDungTheme(theme) {
  document.body.classList.toggle('dark', theme === 'dark')
  const nut = document.getElementById('theme-toggle')
  if (nut) nut.textContent = theme === 'dark' ? '☀️' : '🌙'
  luuTheme(theme)
}

const nutTheme = document.getElementById('theme-toggle')
if (nutTheme) {
  nutTheme.addEventListener('click', function () {
    apDungTheme(document.body.classList.contains('dark') ? 'light' : 'dark')
  })
}
apDungTheme(docTheme())

// ---------- Trang danh sách sản phẩm ----------
const boLoc = document.getElementById('filters')
if (boLoc) {
  // EVENT DELEGATION: một listener cho cả nhóm nút
  boLoc.addEventListener('click', function (e) {
    const nut = e.target.closest('[data-filter]')
    if (!nut) return
    danhMucDangChon = nut.dataset.filter
    renderDanhMuc(danhMucDangChon)
    veLaiSanPham()
  })
}

const khungSanPham = document.getElementById('product-list')
if (khungSanPham) {
  // Sản phẩm được render lại liên tục nên phải gắn listener ở THẺ CHA
  khungSanPham.addEventListener('click', function (e) {
    const nut = e.target.closest('[data-add]')
    if (!nut) return
    gioHang.addProduct(Number(nut.dataset.add))
    capNhatTatCa()
  })
}

// ---------- Giỏ hàng ----------
const khungGio = document.getElementById('cart-items')
if (khungGio) {
  khungGio.addEventListener('click', function (e) {
    const nutQty = e.target.closest('[data-qty]')
    if (nutQty) {
      gioHang.changeQuantity(Number(nutQty.dataset.id), Number(nutQty.dataset.qty))
      capNhatTatCa()
      return
    }
    const nutXoa = e.target.closest('[data-remove]')
    if (nutXoa) {
      gioHang.removeProduct(Number(nutXoa.dataset.remove))
      capNhatTatCa()
    }
  })
}

const nutXoaHet = document.getElementById('cart-clear')
if (nutXoaHet) {
  nutXoaHet.addEventListener('click', function () {
    gioHang.clear()
    capNhatTatCa()
  })
}

const nutThanhToan = document.getElementById('checkout')
if (nutThanhToan) {
  nutThanhToan.addEventListener('click', function () {
    if (gioHang.isEmpty()) {
      alert('Giỏ hàng đang trống.')
      return
    }
    alert('Cảm ơn bạn! Tổng thanh toán: ' + dinhDangTien(gioHang.getTotal()))
    gioHang.clear()
    capNhatTatCa()
  })
}

// ---------- Form đăng ký (buổi 8) ----------
const luatKiemTra = {
  name: function (v) { return v.trim().length >= 2 || 'Họ tên phải có ít nhất 2 ký tự' },
  email: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'Email không đúng định dạng' },
  phone: function (v) { return /^0\d{9}$/.test(v) || 'Số điện thoại gồm 10 số, bắt đầu bằng 0' },
  password: function (v) { return v.length >= 6 || 'Mật khẩu ít nhất 6 ký tự' }
}

function kiemTraO(input) {
  const ketQua = luatKiemTra[input.name](input.value)
  const oLoi = document.querySelector('.error[data-for="' + input.name + '"]')
  const dat = ketQua === true
  input.classList.toggle('invalid', !dat)
  if (oLoi) oLoi.textContent = dat ? '' : ketQua
  return dat
}

const form = document.getElementById('register-form')
if (form) {
  form.addEventListener('input', function (e) {
    if (e.target.name in luatKiemTra) kiemTraO(e.target)
  })

  form.addEventListener('submit', function (e) {
    e.preventDefault()   // chặn reload trang
    const cacO = Array.from(form.querySelectorAll('input'))
    // map trước rồi mới every, để mọi ô sai đều hiện lỗi cùng lúc
    const tatCaDat = cacO.map(kiemTraO).every(Boolean)
    const thongBao = document.getElementById('register-message')

    if (!tatCaDat) {
      thongBao.textContent = 'Vui lòng kiểm tra lại các ô màu đỏ.'
      thongBao.className = 'message'
      return
    }

    // Dùng FormData thay cho form.name — form.name là thuộc tính của chính thẻ form
    const duLieu = new FormData(form)
    const nguoiDung = {
      name: duLieu.get('name'),
      email: duLieu.get('email'),
      phone: duLieu.get('phone')
    }
    luuNguoiDung(nguoiDung)
    thongBao.textContent = 'Đăng ký thành công! Chào ' + nguoiDung.name + '.'
    thongBao.className = 'message ok'
    form.reset()
  })
}

// ---------- Chạy lần đầu ----------
renderDanhMuc(danhMucDangChon)
veLaiSanPham()
capNhatTatCa()

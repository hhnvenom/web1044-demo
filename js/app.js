// ==========================================================
//  Bài 8 · Demo 6 — Validate form bằng validator.js
//  Slide: "validator.js"
//  Chạy: npx serve .   rồi mở http://localhost:3000
// ==========================================================

// ---------- Demo 3 — Dark / Light mode nhớ lựa chọn ----------
// Áp theme đã lưu NGAY khi tải trang
const saved = localStorage.getItem('theme')
document.body.classList.add(saved || 'light')

document.getElementById('lightBtn').addEventListener('click', () => {
  document.body.classList.remove('dark')
  document.body.classList.add('light')
  localStorage.setItem('theme', 'light')
})

document.getElementById('darkBtn').addEventListener('click', () => {
  document.body.classList.remove('light')
  document.body.classList.add('dark')
  localStorage.setItem('theme', 'dark')
})

// ---------- Demo 1 — ba thao tác với localStorage ----------
const out = document.getElementById('out')

function hienThi() {
  out.textContent = 'Đã lưu: ' + (localStorage.getItem('ten') || '(chưa có)')
}

document.getElementById('luu').addEventListener('click', () => {
  localStorage.setItem('ten', document.getElementById('ten').value)
  hienThi()
})

document.getElementById('xoaTen').addEventListener('click', () => {
  localStorage.removeItem('ten')   // removeItem xoá hẳn khoá khỏi localStorage
  hienThi()
})

hienThi()   // đọc lại ngay khi tải trang

// ---------- Demo 4 — Giỏ hàng sống sót qua F5 ----------
// 1. Đọc lại khi tải trang
let cart = JSON.parse(localStorage.getItem('cart') || '[]')

// Bản an toàn hơn: localStorage có thể bị chặn, hoặc dữ liệu cũ bị hỏng
function docGio() {
  try {
    return JSON.parse(localStorage.getItem('cart') || '[]')
  } catch (e) {
    console.warn('Dữ liệu giỏ hàng hỏng, bắt đầu lại từ giỏ trống')
    return []
  }
}
cart = docGio()

// 2. Hàm lưu
function luuGio() {
  try {
    localStorage.setItem('cart', JSON.stringify(cart))
  } catch (e) {
    console.warn('Không lưu được giỏ hàng:', e.message)
  }
}

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
  luuGio()   // 3. gọi luuGio() trong renderCart() — không sót chỗ nào

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

// ---------- Demo 5 — Notification khi thanh toán ----------
document.getElementById('checkoutBtn').addEventListener('click', async () => {
  const thongBao = document.getElementById('thongBao')

  if (cart.length === 0) {
    thongBao.textContent = 'Giỏ hàng đang trống'
    return
  }

  if (!('Notification' in window)) {
    thongBao.textContent = 'Trình duyệt không hỗ trợ'
  } else {
    const quyen = await Notification.requestPermission()
    if (quyen === 'granted') {
      new Notification('Chúc mừng bạn đã mua hàng thành công')
      thongBao.textContent = ''
    } else {
      thongBao.textContent = 'Bạn đã từ chối — hiện thông báo trong trang thay thế'
    }
  }

  // Thanh toán xong thì giỏ phải rỗng, cả trong localStorage
  cart = []
  renderCart()
})

// ---------- Demo 6 — Validate form bằng validator.js ----------
function datLoi(id, thongDiep) {
  document.getElementById(id).textContent = thongDiep
}

document.getElementById('registerForm').addEventListener('submit', (e) => {
  e.preventDefault()   // chặn form tự gửi đi

  if (typeof validator === 'undefined') {
    datLoi('ketQuaDangKy', 'Chưa tải được thư viện validator — kiểm tra mạng')
    return
  }

  const email = document.getElementById('email').value
  const matKhau = document.getElementById('matKhau').value
  const dienThoai = document.getElementById('dienThoai').value

  const loi = []

  if (!validator.isEmail(email)) {
    loi.push(['loiEmail', 'Email không hợp lệ'])
  }
  if (matKhau.length < 6) {
    loi.push(['loiMatKhau', 'Mật khẩu phải từ 6 ký tự'])
  }
  if (!/^0\d{9}$/.test(dienThoai)) {
    loi.push(['loiDienThoai', 'Số điện thoại gồm 10 số, bắt đầu bằng 0'])
  }

  // Xoá lỗi cũ rồi hiện lỗi mới một lượt
  datLoi('loiEmail', '')
  datLoi('loiMatKhau', '')
  datLoi('loiDienThoai', '')
  loi.forEach(([id, thongDiep]) => datLoi(id, thongDiep))

  if (loi.length > 0) {
    datLoi('ketQuaDangKy', '')
  } else {
    datLoi('ketQuaDangKy', 'Đăng ký thành công!')
    e.target.reset()
  }
})

renderProducts()
renderCart()

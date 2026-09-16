// ======================================================
//  LAB 06 — ĐÁP ÁN (dành cho giảng viên)
// ======================================================


// ------------------------------------------------------
//  LAB 6.1 — Cửa sổ thông tin sinh viên
// ------------------------------------------------------
function openStudentInfo() {
  const width = 600
  const height = 400

  const left = (screen.width - width) / 2
  const top = (screen.height - height) / 2

  const opts =
    `width=${width},height=${height},` +
    `top=${top},left=${left}`

  const w = window.open('', 'StudentInfo', opts)

  w.document.write(`
    <h1>Thông tin sinh viên</h1>
    <p><b>MSSV:</b> PS12345</p>
    <p><b>Họ tên:</b> Nguyễn Văn An</p>
    <p><b>Ngành:</b> Ứng dụng phần mềm</p>
    <p><b>Lớp:</b> PH12345</p>
  `)
  w.document.close()
}


// ------------------------------------------------------
//  LAB 6.2 — Countdown khuyến mãi (hiển thị tĩnh)
// ------------------------------------------------------
function renderCountdown() {
  const ketThuc = new Date('2026-12-31')
  const ms = ketThuc - new Date()

  if (ms <= 0) {
    document.getElementById('countdown').textContent = 'Đã kết thúc'
    return
  }

  const ngay = Math.floor(ms / (1000 * 60 * 60 * 24))
  const gio  = Math.floor(ms / (1000 * 60 * 60)) % 24
  const phut = Math.floor(ms / (1000 * 60)) % 60
  const giay = Math.floor(ms / 1000) % 60

  // padStart thêm số 0 phía trước: 7 thành 07
  document.getElementById('cd-ngay').textContent = String(ngay).padStart(2, '0')
  document.getElementById('cd-gio').textContent  = String(gio).padStart(2, '0')
  document.getElementById('cd-phut').textContent = String(phut).padStart(2, '0')
  document.getElementById('cd-giay').textContent = String(giay).padStart(2, '0')
}


// ------------------------------------------------------
//  LAB 6.3 — Render danh sách sản phẩm
// ------------------------------------------------------
function renderProducts() {
  const ds = document.getElementById('ds')

  ds.innerHTML = products.map(p => `
    <div class="product">
      <img src="${p.imgUrl}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p class="price">${p.price.toLocaleString('vi-VN')}đ</p>
      <button>Thêm giỏ hàng</button>
    </div>
  `).join('')
}


// ------------------------------------------------------
//  LAB 6.4 — Bảng giỏ hàng
// ------------------------------------------------------
const cart = [
  { name: 'Cà phê xanh', price: 180000, qty: 1 },
  { name: 'Cà phê Arabica', price: 120000, qty: 2 }
]

function renderCart() {
  const gio = document.getElementById('gio')

  if (cart.length === 0) {
    gio.innerHTML = '<tr><td colspan="5">Giỏ hàng đang trống.</td></tr>'
    document.getElementById('tong').textContent = ''
    return
  }

  gio.innerHTML = cart.map(item => `
    <tr>
      <td>${item.name}</td>
      <td class="so">${item.price.toLocaleString('vi-VN')}đ</td>
      <td class="so">${item.qty}</td>
      <td class="so">${(item.price * item.qty).toLocaleString('vi-VN')}đ</td>
      <td class="so"><button>Xoá</button></td>
    </tr>
  `).join('')

  const tong = cart.reduce((t, item) => t + item.price * item.qty, 0)
  document.getElementById('tong').textContent =
    'Tổng: ' + tong.toLocaleString('vi-VN') + 'đ'
  // 180.000 + 240.000 = 420.000đ
}


// ------------------------------------------------------
//  LAB 6.7 — Bài mở rộng (gợi ý)
// ------------------------------------------------------
function timKiem(tuKhoa) {
  const ketQua = products.filter(p =>
    p.name.toLowerCase().includes(tuKhoa.toLowerCase())
  )
  document.getElementById('ds').innerHTML = ketQua.map(p => `
    <div class="product">
      <img src="${p.imgUrl}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p class="price">${p.price.toLocaleString('vi-VN')}đ</p>
      <button>Thêm giỏ hàng</button>
    </div>
  `).join('')
}
// Thử trong console: timKiem('arabica')


// ---------- Khởi động ----------
renderCountdown()
renderProducts()
renderCart()

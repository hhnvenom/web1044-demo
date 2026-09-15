// ======================================================
//  Bài 6 — Trạng thái hoàn chỉnh cuối buổi
//  Trang đã biết HIỂN THỊ. Chưa biết PHẢN ỨNG — bài 7 lo phần đó.
// ======================================================

// ---------- Render danh sách sản phẩm ----------
const ds = document.getElementById('ds')

function renderProducts() {
  ds.innerHTML = products.map(p => `
    <div class="product">
      <img src="${p.imgUrl}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${p.price.toLocaleString('vi-VN')}đ</p>
      <button>Thêm giỏ hàng</button>
    </div>
  `).join('')
}

// ---------- Render bảng giỏ hàng ----------
// Dữ liệu đúng bằng ảnh mẫu của LAB 6.4: tổng phải ra 420.000đ
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
}

// ---------- Đếm ngược ----------
function chayDongHo() {
  const el = document.getElementById('dong-ho')
  let giay = 10

  const id = setInterval(() => {
    giay--
    el.textContent = giay
    if (giay <= 0) {
      clearInterval(id)
      el.textContent = 'Hết giờ!'
    }
  }, 1000)
}

// ---------- Khởi động ----------
renderProducts()
renderCart()
chayDongHo()

// Tách renderProducts() và renderCart() thành hàm riêng NGAY TỪ BÂY GIỜ.
// Bài 7 sẽ gọi lại chúng sau mỗi lần giỏ hàng thay đổi.

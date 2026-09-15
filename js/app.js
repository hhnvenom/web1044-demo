// ==========================================================
//  Bài 8 · Demo 1 — Ba thao tác với localStorage
//  Slide: "setItem · getItem · removeItem"
//  Chạy: npx serve .   rồi mở http://localhost:3000
// ==========================================================

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

// ---------- Giỏ hàng từ bài 7 (chưa lưu được) ----------
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

renderProducts()
renderCart()

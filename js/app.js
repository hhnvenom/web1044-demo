// ======================================================================
//  Bean Corner — app.js
//  Thứ tự các phần khớp với lộ trình môn:
//    bài 3  hàm            → các hàm nhỏ, mỗi hàm một việc
//    bài 4  mảng/đối tượng → PRODUCTS, cart là mảng đối tượng
//    bài 6  DOM            → render(), querySelector, createElement
//    bài 7  sự kiện        → addEventListener, event delegation
//    bài 8  HTML5 API      → localStorage cho giỏ hàng và theme
// ======================================================================

// ---------- tiện ích ----------
const $ = (selector) => document.querySelector(selector)
const formatPrice = (n) => n.toLocaleString('vi-VN') + ' đ'

// ---------- trạng thái (state) ----------
let cart = loadJSON('cart', [])        // [{ id, qty }]
let currentFilter = 'all'

function loadJSON(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback }
  catch { return fallback }
}
function saveCart() { localStorage.setItem('cart', JSON.stringify(cart)) }

// ---------- dark mode (bài 8: localStorage) ----------
function applyTheme(theme) {
  document.body.classList.toggle('dark', theme === 'dark')
  $('#theme-toggle').textContent = theme === 'dark' ? '☀️' : '🌙'
  localStorage.setItem('theme', theme)
}
$('#theme-toggle').addEventListener('click', () => {
  applyTheme(document.body.classList.contains('dark') ? 'light' : 'dark')
})
applyTheme(localStorage.getItem('theme') || 'light')

// ---------- render sản phẩm (bài 6: DOM) ----------
function renderFilters() {
  $('#filters').innerHTML = CATEGORIES.map(c =>
    `<button class="btn btn-sm ${c.key === currentFilter ? 'active' : ''}" data-filter="${c.key}">${c.label}</button>`
  ).join('')
}

function renderProducts() {
  const list = currentFilter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === currentFilter)
  $('#product-list').innerHTML = list.map(p => `
    <article class="card">
      ${p.hot ? '<span class="ribbon">Hot</span>' : ''}
      <div class="emoji">${p.emoji}</div>
      <span class="tag">${CATEGORIES.find(c => c.key === p.category).label}</span>
      <h3>${p.name}</h3>
      <p class="desc">${p.desc}</p>
      <div class="row">
        <span class="price">${formatPrice(p.price)}</span>
        <button class="btn btn-primary btn-sm" data-add="${p.id}">+ Thêm</button>
      </div>
    </article>`).join('')
}

// event delegation (bài 7): một listener cho cả danh sách
$('#filters').addEventListener('click', (e) => {
  const btn = e.target.closest('[data-filter]')
  if (!btn) return
  currentFilter = btn.dataset.filter
  renderFilters()
  renderProducts()
})
$('#product-list').addEventListener('click', (e) => {
  const btn = e.target.closest('[data-add]')
  if (btn) addToCart(Number(btn.dataset.add))
})

// ---------- giỏ hàng (bài 4: mảng đối tượng) ----------
function addToCart(id) {
  const item = cart.find(i => i.id === id)
  if (item) item.qty += 1
  else cart.push({ id, qty: 1 })
  saveCart()
  renderCart()
  openCart()
}
function changeQty(id, delta) {
  const item = cart.find(i => i.id === id)
  if (!item) return
  item.qty += delta
  if (item.qty <= 0) cart = cart.filter(i => i.id !== id)
  saveCart()
  renderCart()
}
function removeItem(id) {
  cart = cart.filter(i => i.id !== id)
  saveCart()
  renderCart()
}
function cartTotal() {
  return cart.reduce((sum, i) => sum + PRODUCTS.find(p => p.id === i.id).price * i.qty, 0)
}

function renderCart() {
  const count = cart.reduce((s, i) => s + i.qty, 0)
  $('#cart-count').textContent = count
  $('#cart-total').textContent = formatPrice(cartTotal())

  if (cart.length === 0) {
    $('#cart-items').innerHTML = '<p class="empty">Giỏ hàng trống. Chọn một món đi!</p>'
    return
  }
  $('#cart-items').innerHTML = cart.map(i => {
    const p = PRODUCTS.find(x => x.id === i.id)
    return `
      <div class="cart-item">
        <div class="emoji">${p.emoji}</div>
        <div>
          <div class="name">${p.name}</div>
          <div class="sub">${formatPrice(p.price)} × ${i.qty} = <b>${formatPrice(p.price * i.qty)}</b></div>
        </div>
        <div class="qty">
          <button class="btn btn-sm" data-qty="-1" data-id="${p.id}">−</button>
          <span>${i.qty}</span>
          <button class="btn btn-sm" data-qty="1" data-id="${p.id}">+</button>
          <button class="btn btn-sm btn-ghost" data-remove="${p.id}" title="Xoá">🗑</button>
        </div>
      </div>`
  }).join('')
}

$('#cart-items').addEventListener('click', (e) => {
  const qtyBtn = e.target.closest('[data-qty]')
  if (qtyBtn) return changeQty(Number(qtyBtn.dataset.id), Number(qtyBtn.dataset.qty))
  const rm = e.target.closest('[data-remove]')
  if (rm) removeItem(Number(rm.dataset.remove))
})
$('#cart-clear').addEventListener('click', () => { cart = []; saveCart(); renderCart() })
$('#checkout').addEventListener('click', () => {
  if (cart.length === 0) return alert('Giỏ hàng đang trống.')
  alert(`Cảm ơn bạn! Tổng thanh toán: ${formatPrice(cartTotal())}`)
  cart = []; saveCart(); renderCart(); closeCart()
})

// mở / đóng drawer
function openCart() { $('#cart').classList.add('open'); $('#overlay').classList.add('show') }
function closeCart() { $('#cart').classList.remove('open'); $('#overlay').classList.remove('show') }
$('#cart-toggle').addEventListener('click', openCart)
$('#cart-close').addEventListener('click', closeCart)
$('#overlay').addEventListener('click', closeCart)
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeCart() })

// ---------- form đăng ký (bài 7: sự kiện submit + kiểm tra dữ liệu) ----------
const rules = {
  name: (v) => v.trim().length >= 2 || 'Họ tên phải có ít nhất 2 ký tự',
  email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'Email không đúng định dạng',
  phone: (v) => /^0\d{9}$/.test(v) || 'Số điện thoại gồm 10 số, bắt đầu bằng 0',
  password: (v) => v.length >= 6 || 'Mật khẩu ít nhất 6 ký tự',
}

function validateField(input) {
  const result = rules[input.name](input.value)
  const errorEl = document.querySelector(`.error[data-for="${input.name}"]`)
  const ok = result === true
  input.classList.toggle('invalid', !ok)
  errorEl.textContent = ok ? '' : result
  return ok
}

const form = $('#register-form')
form.addEventListener('input', (e) => { if (e.target.name in rules) validateField(e.target) })
form.addEventListener('submit', (e) => {
  e.preventDefault()                                   // không reload trang
  const inputs = [...form.querySelectorAll('input')]
  const allOk = inputs.map(validateField).every(Boolean)  // map trước để hiện lỗi mọi ô
  const msg = $('#register-message')
  if (!allOk) { msg.textContent = 'Vui lòng kiểm tra lại các ô màu đỏ.'; msg.className = 'message'; return }
  const user = Object.fromEntries(new FormData(form))
  delete user.password
  localStorage.setItem('user', JSON.stringify(user))
  msg.textContent = `Đăng ký thành công! Chào ${user.name}, mã giảm giá của bạn: WEB1044`
  msg.className = 'message ok'
  form.reset()
})

// ---------- khởi động ----------
renderFilters()
renderProducts()
renderCart()

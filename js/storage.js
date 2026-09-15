// ============================================================
//  storage.js — LƯU TRÊN TRÌNH DUYỆT   (buổi 8)
// ============================================================
//  localStorage chỉ lưu được CHUỖI, nên phải JSON.stringify khi ghi
//  và JSON.parse khi đọc.
//
//  Mọi thao tác đều bọc try/catch: người dùng có thể tắt localStorage,
//  hoặc dữ liệu cũ trong máy bị hỏng. Không bọc thì cả trang chết trắng.
// ============================================================

const KEY_GIO_HANG = 'bookshop.cart'
const KEY_THEME = 'bookshop.theme'
const KEY_USER = 'bookshop.user'

function luu(key, giaTri) {
  try {
    localStorage.setItem(key, JSON.stringify(giaTri))
  } catch (e) {
    console.warn('Không lưu được', key, e)
  }
}

function doc(key, macDinh) {
  try {
    const raw = localStorage.getItem(key)
    return raw === null ? macDinh : JSON.parse(raw)
  } catch (e) {
    console.warn('Dữ liệu hỏng ở', key, '— dùng giá trị mặc định', e)
    return macDinh
  }
}

function luuGioHang(cart) { luu(KEY_GIO_HANG, cart.items) }
function docGioHang() { return doc(KEY_GIO_HANG, []) }
function xoaGioHang() {
  try { localStorage.removeItem(KEY_GIO_HANG) } catch (e) { console.warn(e) }
}

function luuTheme(theme) { luu(KEY_THEME, theme) }
function docTheme() { return doc(KEY_THEME, 'light') }

function luuNguoiDung(user) { luu(KEY_USER, user) }
function docNguoiDung() { return doc(KEY_USER, null) }

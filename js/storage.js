// ============================================================
//  storage.js — LƯU DỮ LIỆU TRÊN TRÌNH DUYỆT   (buổi 8 · LAB 8.2)
// ============================================================
//  localStorage chỉ lưu được CHUỖI.
//  Muốn lưu mảng/object phải JSON.stringify khi ghi và JSON.parse khi đọc.
//
//  LUÔN bọc try/catch: người dùng có thể tắt localStorage, hoặc dữ liệu
//  cũ trong máy bị hỏng — không bọc thì cả trang chết trắng.
// ============================================================

const KEY_GIO_HANG = 'myshop.cart'
const KEY_THEME = 'myshop.theme'

// TODO: luuGioHang(cart) — JSON.stringify rồi localStorage.setItem, bọc try/catch

// TODO: docGioHang() — localStorage.getItem rồi JSON.parse, lỗi thì trả về []

// TODO: luuTheme(theme) / docTheme() — nhớ lựa chọn sáng/tối

// TODO: xoaGioHang() — localStorage.removeItem

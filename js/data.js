// Dữ liệu sản phẩm — mảng đối tượng (bài 4). Ở dự án thật, dữ liệu này đến từ API (bài 8).
const PRODUCTS = [
  { id: 1, name: 'Cà phê sữa đá', category: 'coffee', price: 29000, emoji: '🥤', desc: 'Robusta rang đậm, sữa đặc, đá viên.', hot: true },
  { id: 2, name: 'Cà phê đen', category: 'coffee', price: 25000, emoji: '☕', desc: 'Đen nguyên bản, không đường.' },
  { id: 3, name: 'Bạc xỉu', category: 'coffee', price: 32000, emoji: '🧋', desc: 'Nhiều sữa, ít cà phê, ngọt nhẹ.', hot: true },
  { id: 4, name: 'Cold brew', category: 'coffee', price: 45000, emoji: '🧊', desc: 'Ủ lạnh 18 giờ, vị thanh.' },
  { id: 5, name: 'Latte', category: 'coffee', price: 49000, emoji: '🍶', desc: 'Espresso và sữa tươi đánh bọt.' },
  { id: 6, name: 'Trà đào cam sả', category: 'tea', price: 39000, emoji: '🍑', desc: 'Đào miếng, cam tươi, sả thơm.', hot: true },
  { id: 7, name: 'Trà sữa matcha', category: 'tea', price: 42000, emoji: '🍵', desc: 'Matcha Nhật, sữa tươi.' },
  { id: 8, name: 'Trà vải', category: 'tea', price: 35000, emoji: '🫖', desc: 'Vải thiều, trà xanh ướp hoa lài.' },
  { id: 9, name: 'Bánh croissant', category: 'cake', price: 30000, emoji: '🥐', desc: 'Bơ Pháp, nướng mỗi sáng.' },
  { id: 10, name: 'Tiramisu', category: 'cake', price: 45000, emoji: '🍰', desc: 'Cà phê, mascarpone, cacao.' },
  { id: 11, name: 'Bánh mì que', category: 'cake', price: 15000, emoji: '🥖', desc: 'Pate, ớt, giòn tan.' },
  { id: 12, name: 'Cookie socola', category: 'cake', price: 20000, emoji: '🍪', desc: 'Socola chip, mềm ở giữa.' },
]

const CATEGORIES = [
  { key: 'all', label: 'Tất cả' },
  { key: 'coffee', label: 'Cà phê' },
  { key: 'tea', label: 'Trà' },
  { key: 'cake', label: 'Bánh' },
]

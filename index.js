// ======================================================
//  Bài 2 · Demo 1 — if...else: kiểm tra số chẵn / lẻ
//  Chạy: node index.js
// ======================================================

// --- đúng đoạn code trên slide ---
const a = 5

if (a % 2 === 0) {
  console.log('đây là số chẵn')
} else {
  console.log('đây là số lẻ')
}

// Đổi a thành số khác rồi chạy lại. Thử cả số âm: -7 % 2 ra gì?
console.log('--- thử từ -3 đến 3 ---')
for (let i = -3; i <= 3; i++) {
  if (i % 2 === 0) {
    console.log(i + ' → chẵn')
  } else {
    console.log(i + ' → lẻ')
  }
}
console.log('-7 % 2 =', -7 % 2, '→ dùng Math.abs(a) % 2 === 0 nếu cần xử lý số âm')

// Nhớ: === so sánh, = là gán. Viết if (so = 2) là gán, luôn đúng.

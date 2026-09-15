// ======================================================
//  Bài 2 · Demo 1 — if...else: kiểm tra số chẵn / lẻ
//  Chạy: node index.js
// ======================================================

const so = 7

if (so % 2 === 0) {
  console.log(so + ' là số chẵn')
} else {
  console.log(so + ' là số lẻ')
}

// Các trường hợp hay bị bỏ sót: số 0 và số âm
console.log('--- thử từ -3 đến 3 ---')
for (let i = -3; i <= 3; i++) {
  if (i % 2 === 0) {
    console.log(i + ' → chẵn')
  } else {
    console.log(i + ' → lẻ')
  }
}

// Nhớ: === so sánh, = là gán. Viết if (so = 2) là gán, luôn đúng.

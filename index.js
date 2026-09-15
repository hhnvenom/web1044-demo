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

// ======================================================
//  Demo 2 — if lồng nhau và else if
// ======================================================
const diem = 7.5

console.log('--- Cách 1: lồng nhau, khó đọc ---')
if (diem < 5) {
  console.log('Yếu')
} else {
  if (diem < 7) {
    console.log('Trung bình')
  } else {
    console.log('Giỏi')
  }
}

console.log('--- Cách 2: else if, phẳng và dễ đọc ---')
if (diem < 5) {
  console.log('Yếu')
} else if (diem < 7) {
  console.log('Trung bình')
} else {
  console.log('Giỏi')
}

// Thứ tự các nhánh rất quan trọng.
// Đổi "diem < 7" lên trước "diem < 5" thì điểm 3 sẽ ra "Trung bình" — sai.

// ======================================================
//  Demo 3 — switch...case và bẫy quên break
// ======================================================
const chucVu = 'staff'
let heSo

switch (chucVu) {
  case 'intern':
    heSo = 1.0
    break
  case 'staff':
    heSo = 1.5
    break          // ← XOÁ dòng break này rồi chạy lại: kết quả ra 2.0
  case 'senior':
    heSo = 2.0
    break
  case 'manager':
    heSo = 3.0
    break
  default:
    heSo = 0
}

console.log(heSo)

// switch so sánh bằng ===, nên case "1" không khớp với số 1
const ma = 1
switch (ma) {
  case '1':
    console.log('khớp chuỗi "1"')
    break
  default:
    console.log('không khớp — vì 1 (số) khác "1" (chuỗi)')
}

// ======================================================
//  Demo 4 — Vòng lặp lồng nhau: bảng cửu chương
// ======================================================
// Demo chạy từ 2 đến 4 cho gọn màn hình; lab mới làm đủ 2 đến 9.
for (let bang = 2; bang <= 4; bang++) {
  console.log('--- Bảng ' + bang + ' ---')
  for (let i = 1; i <= 10; i++) {
    console.log(bang + ' x ' + i + ' = ' + bang * i)
  }
}

// Vòng ngoài 3 lần × vòng trong 10 lần = 30 dòng.
// Tên biến đếm hai vòng phải khác nhau, dùng i cho cả hai là lỗi rất khó tìm.

// ======================================================
//  Phần còn lại của bài 2
// ======================================================

console.log('--- Toán tử ba ngôi và toán tử logic ---')
const tuoi = 20
console.log(tuoi >= 18 ? 'Đủ tuổi' : 'Chưa đủ tuổi')
console.log(tuoi >= 18 && tuoi < 60 ? 'Trong độ tuổi lao động' : 'Ngoài độ tuổi')
console.log(tuoi < 6 || tuoi > 60 ? 'Được miễn phí vé' : 'Mua vé thường')

console.log('--- while: chưa biết trước số vòng ---')
let tien = 100000
let ngay = 0
while (tien >= 15000) {
  tien = tien - 15000
  ngay++
}
console.log('Ăn được ' + ngay + ' ngày, còn thừa ' + tien + 'đ')

console.log('--- do...while: luôn chạy ít nhất một lần ---')
let lan = 0
do {
  console.log('chạy lần thứ ' + (lan + 1))
  lan++
} while (lan < 2)

console.log('--- break: thoát hẳn khỏi vòng lặp → in ra 1 2 3 ---')
for (let i = 1; i <= 10; i++) {
  if (i === 4) break
  console.log(i)
}

console.log('--- continue: bỏ qua vòng này → in ra 1 3 5 ---')
for (let i = 1; i <= 6; i++) {
  if (i % 2 === 0) continue
  console.log(i)
}

console.log('--- Tính tiền điện bậc thang (dùng lại ở bài 3) ---')
const soKwh = 335
let tienDien = 0
if (soKwh <= 50) {
  tienDien = soKwh * 1800
} else if (soKwh <= 100) {
  tienDien = 50 * 1800 + (soKwh - 50) * 2300
} else {
  tienDien = 50 * 1800 + 50 * 2300 + (soKwh - 100) * 3000
}
console.log(soKwh + ' kWh = ' + tienDien + 'đ')

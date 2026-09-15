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
//  Demo 5 — Chạy từng bước vòng lặp for
//  Ba phần:  khởi tạo  ·  điều kiện  ·  bước nhảy
//     for (let i = 1 ; i <= 3 ; i++ ) { ... }
//          khởi tạo    điều kiện  bước nhảy
// ======================================================

for (let i = 1; i <= 3; i++) {
  console.log(i)
}

// Thứ tự thực thi đúng như animation trên slide:
//   i = 1 (khởi tạo, chỉ chạy MỘT lần)
//   1 <= 3 đúng → vào thân → in 1
//   i++ → i = 2 → kiểm tra lại → in 2
//   i++ → i = 3 → kiểm tra lại → in 3
//   i++ → i = 4 → 4 <= 3 sai → dừng
console.log('--- in ra thứ tự thực thi ---')
for (let i = 1; i <= 3; i++) {
  console.log('điều kiện ' + i + ' <= 3 đúng → vào thân, in ra ' + i)
}
console.log('i++ → i = 4, 4 <= 3 sai → dừng')

// Thử đổi từng phần một, xem kết quả khác thế nào
console.log('--- i = 0 thay vì i = 1 ---')
for (let i = 0; i <= 3; i++) console.log(i)

console.log('--- i < 3 thay vì i <= 3 ---')
for (let i = 1; i < 3; i++) console.log(i)

console.log('--- i += 2: nhảy hai bước ---')
for (let i = 1; i <= 3; i += 2) console.log(i)

// Lệch một đơn vị (off-by-one) là lỗi kinh điển:
// < hay <=, bắt đầu từ 0 hay từ 1 — chỉ khác một ký tự nhưng đổi cả kết quả.

// ======================================================
//  Demo 6 — Toán tử logic và toán tử ba ngôi
// ======================================================
const tuoi = 20
const coVe = true

// && — cả hai phải đúng
if (tuoi >= 18 && coVe) {
  console.log('Được vào')
}

// || — chỉ cần một cái đúng
const laVIP = false
if (laVIP || tuoi >= 65) {
  console.log('Được giảm giá')
}

// ! — đảo ngược
if (!coVe) {
  console.log('Mua vé trước đã')
}

// Toán tử ba ngôi: một dòng, tương đương cả khối if...else
const diemSo = 7.5
const ketQua = diemSo >= 5 ? 'Đậu' : 'Rớt'
console.log(ketQua)

// Chỉ dùng ba ngôi cho trường hợp đơn giản.
// Lồng ba ngôi vào nhau thì không ai đọc nổi.

// ======================================================
//  Demo 7 — while và do...while
// ======================================================

// while — kiểm tra TRƯỚC, có thể không chạy lần nào
let i = 1
while (i <= 3) {
  console.log('while:', i)
  i++
}

// do...while — chạy TRƯỚC, kiểm tra SAU, luôn chạy ít nhất một lần
let j = 10
do {
  console.log('do-while:', j)   // vẫn in một dòng dù 10 > 3
  j++
} while (j <= 3)

// Dùng cái nào:
//   biết trước số vòng lặp            → for
//   không biết trước, lặp tới khi đủ  → while
//   do...while ít dùng, chủ yếu cho menu hoặc nhập liệu

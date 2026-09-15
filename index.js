// ======================================================
//  Bài 3 · Demo 1 — Tách code lặp thành hàm
//  Chạy: node index.js
//
//  Ở bài 2, đoạn tính tiền điện bị copy vào LAB 2.2, LAB 2.2b và bài 2.6.
//  Giá bậc 3 tăng lên 3.200đ là phải sửa cả ba chỗ.
//  Bọc nó thành hàm thì chỉ còn một chỗ để sửa.
// ======================================================

function tinhTienDien(soKwh) {
  let tien = 0

  if (soKwh <= 50) {
    tien = soKwh * 1800
  } else if (soKwh <= 100) {
    tien = 50 * 1800 + (soKwh - 50) * 2300
  } else {
    tien = 50 * 1800 + 50 * 2300 + (soKwh - 100) * 3000
  }

  return tien              // trả kết quả ra ngoài, KHÔNG console.log ở đây
}

// Gọi ba lần với ba giá trị — không copy dòng nào
console.log(tinhTienDien(30))    // 54000
console.log(tinhTienDien(80))    // 159000
console.log(tinhTienDien(335))   // 910000

// ======================================================
//  Demo 2 — Ba cách khai báo hàm
// ======================================================

// 1. Function declaration — gọi được cả trước khi khai báo
function cong(a, b) {
  return a + b
}

// 2. Function expression — phải khai báo trước khi gọi
const tru = function (a, b) {
  return a - b
}

// 3. Arrow function — phải khai báo trước khi gọi
const nhan = (a, b) => a * b

console.log(cong(5, 3), tru(5, 3), nhan(5, 3))   // 8 2 15

// Ở môn này dùng declaration là chính.
// Arrow sẽ gặp lại nhiều ở bài 4 khi dùng map/filter.

// ======================================================
//  Demo 3 — Hàm gọi hàm: mỗi hàm làm đúng một việc
// ======================================================

function layHeSo(chucVu) {
  switch (chucVu) {
    case 'intern':  return 1.0
    case 'staff':   return 1.5
    case 'senior':  return 2.0
    case 'manager': return 3.0
    default:        return 0      // chức vụ không hợp lệ
  }
}

function tinhLuong(chucVu, ngayCong) {
  const heSo = layHeSo(chucVu)    // hàm này gọi hàm kia
  return heSo * ngayCong * 5000000 / 24
}

console.log(tinhLuong('senior', 22))     // 9166666.666...
console.log(tinhLuong('intern', 24))     // 5000000
console.log(tinhLuong('giam-doc', 24))   // 0 — chức vụ không có trong bảng

// Thêm chức vụ mới chỉ sửa layHeSo, tinhLuong không đụng tới.
// Trong switch dùng return thay break: thoát hàm luôn, gọn hơn.

// ======================================================
//  Phần còn lại của bài 3
// ======================================================

console.log('--- Tham số, đối số và giá trị mặc định ---')
function chao(ten, loiChao = 'Xin chào') {
  return loiChao + ', ' + ten
}
console.log(chao('An'))               // Xin chào, An
console.log(chao('Bình', 'Chào bạn')) // Chào bạn, Bình
console.log(chao())                   // Xin chào, undefined ← lỗi im lặng

console.log('--- return so với console.log ---')
function tongChiIn(a, b) {
  console.log(a + b)                  // chỉ in, không trả về
}
function tongTraVe(a, b) {
  return a + b
}
const x = tongChiIn(2, 3)
console.log(x)                        // undefined — không dùng lại được
const y = tongTraVe(2, 3)
console.log(y * 2)                    // 10 — dùng tiếp được

// return kết thúc hàm ngay, code sau nó không chạy
function thuReturn() {
  return 'xong'
  console.log('dòng này không bao giờ chạy')
}
console.log(thuReturn())

console.log('--- Phạm vi biến ---')
const tenChung = 'ai cũng thấy'
function thuNghiem() {
  const tenRieng = 'chỉ trong hàm thấy'
  console.log(tenChung)
  console.log(tenRieng)
}
thuNghiem()
console.log(tenChung)
// console.log(tenRieng)   // bỏ comment: ReferenceError

console.log('--- Hàm gọi hàm: call stack ---')
function A() { B() }
function B() { C() }
function C() { console.log('xong') }
A()
// Gọi A → đẩy A, A gọi B → đẩy B, B gọi C → đẩy C.
// C xong gỡ C, quay về B, gỡ B, quay về A, gỡ A. Stack rỗng.

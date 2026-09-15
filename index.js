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

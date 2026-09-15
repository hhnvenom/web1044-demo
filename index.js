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

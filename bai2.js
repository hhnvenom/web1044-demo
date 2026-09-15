// BÀI 3.2 — Viết hàm tính tiền điện (ĐÁP ÁN)
// Tách hai hàm: một hàm chỉ tính, một hàm chỉ in.

function tinhTienDien(soKwh) {
  let tien = 0
  if (soKwh <= 50) {
    tien = soKwh * 1800
  } else if (soKwh <= 100) {
    tien = 50 * 1800 + (soKwh - 50) * 2300
  } else {
    tien = 50 * 1800 + 50 * 2300 + (soKwh - 100) * 3000
  }
  return tien
}

function inHoaDon(soKwh) {
  console.log('Tiêu thụ ' + soKwh + ' kWh → ' + tinhTienDien(soKwh) + 'đ')
}

console.log(tinhTienDien(30))    // 54000
console.log(tinhTienDien(80))    // 159000
console.log(tinhTienDien(335))   // 910000
inHoaDon(335)

// Hàm chỉ tính thì kiểm tra được và dùng lại được cho bài toán ngược.
// Hàm in thì không.

// BÀI 2.2 — Tính tiền điện theo bậc thang (ĐÁP ÁN)

const soKwh = 335
let tien = 0

if (soKwh <= 50) {
  tien = soKwh * 1800
} else if (soKwh <= 100) {
  tien = 50 * 1800 + (soKwh - 50) * 2300
} else {
  tien = 50 * 1800 + 50 * 2300 + (soKwh - 100) * 3000
}

console.log(soKwh + ' kWh = ' + tien + 'đ')   // 335 kWh = 910000đ

// Lỗi hay gặp: tien = soKwh * 3000 — tính TẤT CẢ theo một giá.
// Bậc thang nghĩa là mỗi phần số điện tính theo giá của bậc đó rồi CỘNG DỒN.

// ------------------------------------------------------------------
// BÀI 2.2b — Bài toán ngược (ĐÁP ÁN)
// Cách làm: trừ dần từng bậc, phần tiền còn lại chia cho giá của bậc kế tiếp.

const soTien = 910000
let conLai = soTien
let kwh = 0

const tienBac1 = 50 * 1800        // 90.000đ cho 50 kWh đầu
const tienBac2 = 50 * 2300        // 115.000đ cho 50 kWh tiếp theo

if (conLai <= tienBac1) {
  kwh = conLai / 1800
} else if (conLai <= tienBac1 + tienBac2) {
  conLai = conLai - tienBac1
  kwh = 50 + conLai / 2300
} else {
  conLai = conLai - tienBac1 - tienBac2
  kwh = 100 + conLai / 3000
}

console.log(soTien + 'đ = ' + kwh + ' kWh')   // 910000đ = 335 kWh

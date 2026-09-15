// BÀI 3.6 — Bài mở rộng (gợi ý đáp án cho cả bốn đề)

// 1. Định dạng tiền
function dinhDangTien(so) {
  const nguyen = Math.round(so) + ''
  let ketQua = ''
  let dem = 0
  for (let i = nguyen.length - 1; i >= 0; i--) {
    ketQua = nguyen[i] + ketQua
    dem++
    if (dem % 3 === 0 && i > 0) ketQua = '.' + ketQua
  }
  return ketQua + 'đ'
}
console.log(dinhDangTien(9166666))      // 9.166.666đ

// 2. Số nguyên tố — viết một lần, gọi lại trong vòng lặp
function laNguyenTo(n) {
  if (n < 2) return false
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false
  }
  return true
}
let danhSach = ''
for (let n = 1; n <= 100; n++) {
  if (laNguyenTo(n)) danhSach += n + ' '
}
console.log('Nguyên tố 1..100:', danhSach.trim())

// 3. Đếm số từ
function demSoTu(chuoi) {
  const sach = chuoi.trim()
  if (sach === '') return 0
  let dem = 1
  let truoc = ''
  for (let i = 0; i < sach.length; i++) {
    if (sach[i] === ' ' && truoc !== ' ') dem++
    truoc = sach[i]
  }
  return dem
}
console.log(demSoTu('  xin  chao cac ban  '))   // 4

// 4. Giai thừa
function giaiThua(n) {
  let kq = 1
  for (let i = 2; i <= n; i++) kq = kq * i
  return kq
}
console.log(giaiThua(5))    // 120

// Gợi ý 2 đóng lại đúng vấn đề mở đầu buổi: ở LAB 2.6 đoạn kiểm tra nguyên tố
// bị copy vào vòng lặp, giờ chỉ còn một hàm được gọi lại.

// BÀI 2.5 — Kiểm tra số nguyên tố (ĐÁP ÁN)

const n = 97
let laNguyenTo = true

if (n < 2) {
  laNguyenTo = false            // 0 và 1 không phải số nguyên tố
} else {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      laNguyenTo = false
      break                     // tìm thấy một ước là đủ kết luận, dừng luôn
    }
  }
}

console.log(n + (laNguyenTo ? ' là số nguyên tố' : ' KHÔNG phải số nguyên tố'))

// Kiểm tra các trường hợp biên: 0 → không, 1 → không, 2 → có, 91 = 7 × 13 → không

// BÀI 2.6 — Bài mở rộng (gợi ý đáp án cho đề mẫu)
// Đề mẫu: in mọi số nguyên tố từ 1 đến 100.

for (let n = 2; n <= 100; n++) {
  let laNguyenTo = true
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      laNguyenTo = false
      break
    }
  }
  if (laNguyenTo) console.log(n)
}

// Đoạn kiểm tra nguyên tố đang bị copy từ bai5.js sang đây.
// Bài 3 sẽ gỡ đúng vấn đề này bằng hàm.

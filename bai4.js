// BÀI 2.4 — In bảng cửu chương từ 2 đến 9 (ĐÁP ÁN)

for (let bang = 2; bang <= 9; bang++) {
  console.log('===== Bảng ' + bang + ' =====')
  for (let i = 1; i <= 10; i++) {
    console.log(bang + ' x ' + i + ' = ' + bang * i)
  }
}

// 8 bảng × 10 dòng = 80 dòng kết quả.
// Hai biến đếm phải khác tên: dùng i cho cả hai vòng là lỗi rất khó tìm.

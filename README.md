# l5/lab-solution — Đáp án Lab 05 (dành cho giảng viên)

Nối tiếp `l5/lab-start`. Không phát cho sinh viên trước hạn nộp.

```bash
node bai3.js
git diff l5/lab-start l5/lab-solution
```

Điểm chấm quan trọng:

- Bài 5.2: `getDiscountedPrice` phải **trả về** giá mới, không sửa `this.price`;
  `isInStock()` trả về **boolean**; `quantity` không xuống dưới 0.
- Bài 5.3: thêm sản phẩm **đã có** phải cộng dồn `qty`, không tạo dòng mới;
  `getTotal` dùng `reduce`; giỏ trống có thông báo.
- Bài 5.4 và 5.5: phải có **prompt đã dùng** và **nhận xét của sinh viên**,
  không chỉ dán kết quả AI.

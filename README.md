# l6/lab-solution — Đáp án Lab 06 (dành cho giảng viên)

Nối tiếp `l6/lab-start`. **Không chiếu code này lên cho cả lớp chép.**

```bash
npx serve .
git diff l6/lab-start l6/lab-solution
```

Điểm chấm quan trọng:

- **6.1** dùng công thức căn giữa, không hardcode toạ độ
- **6.2** số có hai chữ số nhờ `padStart(2, '0')`, có `% 24` và `% 60`
- **6.3** render từ mảng bằng JS, **không** gõ tay ba thẻ `div`
- **6.4** tổng ra đúng **420.000đ**, và `renderCart()` đã tách thành hàm riêng

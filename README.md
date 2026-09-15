# l7/d1-add-event-listener — addEventListener

**Slide:** Bài 7 · "addEventListener" (demo `l7-d1`).

Trang sản phẩm của bài 6 giờ **biết lắng nghe**. Nút đếm số lần bấm.

Ba thành phần của một listener: phần tử nào lắng nghe · sự kiện gì · làm gì khi xảy ra.

Lỗi số một của bài: viết `addEventListener('click', xuLy())` có dấu ngoặc — hàm chạy ngay
lúc tải trang thay vì lúc bấm.

```bash
npx serve .
# rồi mở http://localhost:3000
git diff l6/end l7/d1-add-event-listener
```

Branch tiếp theo: `l7/d2-event-delegation`.

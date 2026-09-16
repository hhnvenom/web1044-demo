# l7/d9-tao-button — tạo nút bằng JavaScript

**Slide:** Bài 7 · "Tạo nút, gắn sự kiện, gọi hàm xử lý" (demo `l7-d9`).

Ba bước gõ theo slide:

1. `document.createElement('button')` → đặt `textContent` → `appendChild` vào trang.
2. Viết **hàm xử lý riêng** `themVaoGio()` thay vì nhét code vào giữa listener.
3. `nut.addEventListener('click', themVaoGio)` — truyền **tên hàm**, không có dấu ngoặc.

Lỗi hay gặp: viết `addEventListener('click', themVaoGio())` là gọi hàm ngay một lần
lúc nạp trang rồi gắn `undefined` làm listener, bấm nút không có gì xảy ra.

```bash
npx serve .
# rồi mở http://localhost:3000/button.html
git diff l7/d1-add-event-listener l7/d9-tao-button
```

Branch tiếp theo: `l7/d10-textbox-live`.

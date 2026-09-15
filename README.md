# l8/d2-json — JSON.stringify và JSON.parse

**Slide:** Bài 8 · "Lưu object bằng JSON" (demo `l8-d2`).

`localStorage` chỉ lưu được **chuỗi**. Luôn `stringify` khi lưu và `parse` khi đọc.
Quên `stringify` thì object thành `[object Object]` — mất sạch dữ liệu.

```bash
node index.js
```

Đây là demo JS thuần nên tách riêng khỏi chuỗi web của bài 8.

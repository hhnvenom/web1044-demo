# l7/d4-cart-events — Giỏ hàng chạy được

**Slide:** Bài 7 · "Giỏ hàng chạy được" (demo `l7-d4`).

Vòng đời ba bước: **thao tác → sửa dữ liệu → render lại**.

`find` để cộng dồn sản phẩm trùng · `reduce` để tính tổng · `map` để render.
Bài 7 không dạy gì mới về mảng, chỉ ghép lại.

Bấm thêm cùng một sản phẩm hai lần để thấy nó cộng dồn chứ không tạo dòng mới.

```bash
npx serve .
# rồi mở http://localhost:3000
git diff l7/d3-hieu-ung-an-hien l7/d4-cart-events
```

Branch tiếp theo: `l7/end`.

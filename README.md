# l8/d1-local-storage — Ba thao tác với localStorage

**Slide:** Bài 8 · "setItem · getItem · removeItem" (demo `l8-d1`).

Gõ tên, bấm Lưu, rồi **tải lại trang** — giá trị vẫn còn.
`getItem` trả về `null` nếu chưa có khoá, nên phải có phương án dự phòng:
`localStorage.getItem('ten') || '(chưa có)'`.

Giỏ hàng ở branch này **chưa lưu được** — F5 là mất. Branch `l8/d4-cart-persist` sẽ sửa.

```bash
npx serve .
# rồi mở http://localhost:3000
git diff l7/end l8/d1-local-storage
```

Branch tiếp theo: `l8/d3-dark-mode`.

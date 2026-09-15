# l8/d5-notification — Notification khi thanh toán

**Slide:** Bài 8 · "Notification API" (demo `l8-d5`).

Ba trạng thái quyền: `default` chưa hỏi · `granted` đã cho phép · `denied` đã từ chối.
Từ chối rồi thì **không hỏi lại được**, nên nhánh `else` hiện thông báo ngay trong trang.

Chỉ xin quyền **khi người dùng bấm nút**, đừng xin lúc tải trang.
Thanh toán xong thì giỏ rỗng, cả trong `localStorage`.

```bash
npx serve .
# rồi mở http://localhost:3000
git diff l8/d4-cart-persist l8/d5-notification
```

Branch tiếp theo: `l8/d6-validator`.

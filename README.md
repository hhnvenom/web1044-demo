# l8/d4-cart-persist — Giỏ hàng sống sót qua F5

**Slide:** Bài 8 · "Giỏ hàng sống sót qua F5" (demo `l8-d4`).

Ba chỗ cần sửa so với bài 7: đọc lại lúc khởi động, hàm `luuGio()`,
và gọi `luuGio()` ngay đầu `renderCart()`.

Vì bài 7 đã quy định **mọi thay đổi đều gọi `renderCart()`** nên đặt ở đó là không sót chỗ nào —
kể cả khi xoá hết giỏ (tiêu chí thứ ba của LAB 8.2).

```bash
npx serve .
# rồi mở http://localhost:3000
git diff l8/d3-dark-mode l8/d4-cart-persist
```

Branch tiếp theo: `l8/d5-notification`.

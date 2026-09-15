# l8/end — Bean Corner: shop cà phê hoàn chỉnh

**Slide:** Bài 0 · "Bạn sẽ làm được gì sau 36 giờ?" (demo `l0-d1`) và trạng thái cuối bài 8.

Website bán hàng viết bằng **HTML, CSS, JavaScript thuần**, không framework — mẫu tham chiếu cho Assignment.

```bash
git fetch origin && git checkout l8/end
npx serve .            # mở http://localhost:3000
```

Hoặc mở `index.html` bằng Live Server trong VS Code.

## Tính năng ↔ bài học

| Tính năng | Bài | File |
|---|---|---|
| Danh sách sản phẩm render từ mảng đối tượng, lọc theo nhóm | 4, 6 | `js/data.js`, `renderProducts()` |
| Giỏ hàng: thêm, tăng/giảm số lượng, xoá, tính tổng | 4, 7 | `addToCart()`, `changeQty()`, `renderCart()` |
| Event delegation cho danh sách và giỏ hàng | 7 | `addEventListener` trên container |
| Dark / Light mode nhớ lựa chọn | 8 | `applyTheme()` + `localStorage` |
| Giỏ hàng không mất khi tải lại trang | 8 | `saveCart()` / `loadJSON()` |
| Form đăng ký kiểm tra rỗng, định dạng email, số điện thoại | 7 | `rules`, `validateField()` |

Cấu trúc: `index.html` · `css/style.css` · `js/data.js` · `js/app.js` (đúng yêu cầu tổ chức mã của Assignment).

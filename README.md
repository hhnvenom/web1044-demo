# l7/end — Bài 7 hoàn chỉnh

**Slide:** Bài 7 · "Tóm tắt bài 7" (demo `l7-end`).

Trang bán hàng chạy được: danh sách sản phẩm render từ mảng, giỏ hàng **thêm · tăng ·
giảm · xoá**, tổng tiền luôn khớp.

Ba tình huống dễ quên đều đã xử lý: giảm về 0 thì xoá · giỏ trống có thông báo ·
thêm trùng thì cộng dồn.

Các slide demo trung gian (nút đếm, danh sách delegation, nút Hiện/Ẩn) đã gỡ bỏ —
đây là trang thành phẩm, không còn khung dạy học.

Nhấn F5 thì mất sạch giỏ hàng. Đó là bài toán của bài 8.

```bash
npx serve .
# rồi mở http://localhost:3000
git diff l7/d4-cart-events l7/end
```

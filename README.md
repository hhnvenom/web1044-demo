# asm/vi-du-hoan-chinh — Assignment mẫu (chủ đề nhà sách)

> **Đây là bài MẪU để tham khảo CÁCH TỔ CHỨC, không phải bài để nộp.**
> Chủ đề cố ý chọn **bán sách** chứ không phải cà phê, để bạn không copy thẳng
> được từ demo trên lớp. Bài của bạn phải là chủ đề của riêng bạn.

## Chạy thử

```bash
git fetch origin && git checkout asm/vi-du-hoan-chinh
npx serve .
```

Mở `http://localhost:3000`. Hoặc mở `index.html` bằng Live Server trong VS Code.

## Bài này làm được gì

| Chức năng | Giai đoạn | File |
|---|---|---|
| 6 đầu sách, 2 danh mục, đủ 7 trường | GĐ1 | `js/data.js` |
| `class Product` với 6 phương thức | GĐ1 | `js/models.js` |
| `class Cart` với add / remove / changeQuantity / getTotal | GĐ1 | `js/models.js` |
| Render danh sách sách từ dữ liệu | GĐ2 | `js/render.js` |
| Lọc theo danh mục | GĐ2 | `js/events.js` |
| Thêm vào giỏ, cộng dồn khi trùng sách | GĐ2 | `Cart.addProduct` |
| Tăng, giảm, xoá — tổng tiền luôn khớp | GĐ2 | `Cart.changeQuantity` |
| Giỏ trống có thông báo | GĐ2 | `renderGioHang` |
| Event delegation (listener ở thẻ cha) | GĐ2 | `js/events.js` |
| Giỏ hàng không mất khi F5 | Bảo vệ | `js/storage.js` |
| Dark mode nhớ lựa chọn | Bảo vệ | `apDungTheme` |
| Form đăng ký kiểm tra 4 ô | Bảo vệ | `luatKiemTra` |

## Cấu trúc

```
index.html        danh sách sách + lọc danh mục
cart.html         giỏ hàng đầy đủ
register.html     form đăng ký
css/style.css     giao diện, có biến CSS cho dark mode
js/data.js        6 sản phẩm + hàm timSanPham
js/models.js      class Product, class Cart
js/storage.js     localStorage, mọi thao tác bọc try/catch
js/render.js      các hàm vẽ ra HTML
js/events.js      gắn sự kiện, chạy render lần đầu
```

Thứ tự nhúng script rất quan trọng: `data` → `models` → `storage` → `render` → `events`.
File sau dùng lại biến và class của file trước.

## Bốn điểm đáng học ở bài này

1. **Giỏ hàng chỉ lưu `{ id, qty }`**, không lưu cả object sản phẩm.
   Giá đổi thì giỏ vẫn lấy giá mới nhất qua `timSanPham(id)`.
2. **Sửa dữ liệu trước, render lại sau.** Không có chỗ nào sửa thẳng HTML.
   Đây là lý do tổng tiền không bao giờ lệch.
3. **Event delegation.** Danh sách sách được render lại mỗi lần lọc, nên listener
   phải gắn ở thẻ cha `#product-list`, không gắn cho từng nút.
4. **`localStorage` luôn bọc `try/catch`.** Người dùng có thể tắt nó, hoặc dữ liệu
   cũ trong máy bị hỏng — không bọc thì cả trang chết trắng.

## Ảnh sản phẩm

Bài mẫu dùng **emoji** (📕 📗 📘) làm ảnh bìa cho gọn, không có file ảnh nhị phân.
Trong bài của bạn hãy để ảnh thật trong `img/` rồi đổi `imgUrl` thành `img/sach1.jpg`.
Nhớ dùng **đường dẫn tương đối** — đây là chỗ mất điểm oan nhất khi nộp bài.

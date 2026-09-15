# asm/starter — Khung khởi tạo Assignment WEB1044

Khung thư mục rỗng cho **website bán hàng theo chủ đề tự chọn**.
Branch này **không chứa lời giải** — mỗi file chỉ có comment hướng dẫn và `TODO`.

## Dùng thế nào

```bash
git clone https://github.com/hhnvenom/web1044-demo.git
cd web1044-demo
git checkout asm/starter
```

Rồi **copy toàn bộ thư mục ra ngoài** và đổi tên theo chủ đề của bạn:

```bash
cp -r . ~/my-shop      # macOS / Linux
```

Sau đó mở `~/my-shop` bằng VS Code và chạy bằng Live Server, hoặc:

```bash
npx serve .
```

Mở `http://localhost:3000`.

## Cấu trúc

```
my-shop/
  index.html          trang danh sách sản phẩm   (buổi 6)
  cart.html           trang giỏ hàng             (buổi 6)
  register.html       form đăng ký               (buổi 8)
  css/style.css       giao diện
  img/                ảnh sản phẩm của bạn
  js/data.js          mảng sản phẩm              (buổi 4)
  js/models.js        class Product, class Cart  (buổi 5)
  js/render.js        hàm render ra HTML         (buổi 6)
  js/events.js        xử lý sự kiện              (buổi 7)
  js/storage.js       localStorage               (buổi 8)
```

## Làm theo từng buổi

| Buổi | Bài lab | Làm gì trong khung này |
|---|---|---|
| 1 | — | Chốt chủ đề, copy khung này ra, đổi tên |
| 4 | LAB 4.6 | Điền `js/data.js` — ít nhất 6 sản phẩm, 2 danh mục |
| 5 | LAB 5.2, 5.3 | Viết `class Product` và `class Cart` trong `js/models.js` |
| 6 | LAB 6.3, 6.4 | Viết `js/render.js`, hoàn thiện `index.html` và `cart.html` |
| 7 | LAB 7.3, 7.4 | Viết `js/events.js` — thêm, tăng, giảm, xoá trong giỏ |
| 8 | LAB 8.2, 8.4 | Viết `js/storage.js` và `register.html` |

## Ba điều cần nhớ

1. **Đường dẫn tương đối.** Ảnh phải là `img/sp1.jpg`, không được là `C:/Users/...`.
   Đây là chỗ mất điểm oan nhất khi nộp bài.
2. **Thứ tự nhúng script.** `data.js` → `models.js` → `storage.js` → `render.js` → `events.js`.
   File sau dùng lại biến và class của file trước.
3. **Tách file ngay từ đầu.** Để tất cả trong một `script.js` thì tới buổi 7 file sẽ dài
   500 dòng và bạn không tìm được gì.

## Ảnh sản phẩm

Thư mục `img/` đang trống. Thêm ảnh của bạn vào đó rồi sửa `imgUrl` trong `js/data.js`.
Nếu chưa có ảnh, cứ để emoji trong `imgUrl` như hai sản phẩm mẫu — trang vẫn chạy.

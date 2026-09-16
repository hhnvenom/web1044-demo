# l7/d11-form-validate — bật nút Gửi khi email hợp lệ

**Slide:** Bài 7 · "Email hợp lệ thì mới cho gửi" (demo `l7-d11`).

Mỗi lần gõ, hàm `kiemTra()` chạy lại và quyết định ba thứ của nút Gửi:
`disabled`, màu nền, con trỏ chuột.

```js
const ok = MAU.test(email.value)
nut.disabled = !ok
nut.style.background = ok ? '#16a34a' : '#cbd2dd'
```

Biểu thức chính quy tách ra hằng `MAU` ở đầu file cho dễ đọc và dễ sửa.

Đừng quên gọi `kiemTra()` **một lần lúc nạp trang**, nếu không nút bắt đầu ở
trạng thái bật dù ô email còn trống.

Kiểm tra phía client chỉ để trải nghiệm mượt. Máy chủ vẫn phải kiểm lại — ý này
quay lại ở bài 8.

```bash
npx serve .
# rồi mở http://localhost:3000/form.html
git diff l7/d10-textbox-live l7/d11-form-validate
```

Branch tiếp theo: `l7/d3-hieu-ung-an-hien`.

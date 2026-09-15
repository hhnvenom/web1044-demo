# l1/d6-typeof — typeof và hai kết quả gây bất ngờ

**Slide:** Bài 1 · "Widget typeof" (demo `l1-d6`).

`typeof null` cho ra `"object"` — lỗi lịch sử của JavaScript từ năm 1995, không sửa được
vì sẽ làm hỏng hàng triệu website. `typeof []` cũng cho `"object"`, nên muốn kiểm tra mảng
phải dùng `Array.isArray()`.

```bash
node index.js
git diff l1/d5-let-const-var l1/d6-typeof
```

Branch tiếp theo: `l1/d7-gia-tri-falsy`.

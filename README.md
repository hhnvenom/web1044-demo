# l6/d5-countdown — setTimeout và setInterval

**Slide:** Bài 6 · "setTimeout và setInterval" (demo `l6-d5`).

Đồng hồ đếm từ 10 về 0 rồi hiện "Hết giờ!".

```bash
npx serve .
git diff l6/d4-render-san-pham l6/d5-countdown
```

`setInterval` chạy **mãi mãi** cho tới khi `clearInterval(id)`. Quên dọn dẹp là lỗi rò rỉ
kinh điển: trang càng mở lâu càng chậm. `id` chính là giá trị `setInterval` trả về lúc tạo.

LAB 6.2 dùng lại đúng kỹ thuật này cho banner đếm ngược bốn ô ngày/giờ/phút/giây.

Branch tiếp theo: `l6/end`.

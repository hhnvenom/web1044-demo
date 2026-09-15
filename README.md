# l7/d2-event-delegation — Event delegation

**Slide:** Bài 7 · "Event delegation" (demo `l7-d2`).

Gắn **một** listener ở thẻ cha thay vì gắn cho từng nút con.

Dòng `if (!e.target.classList.contains('mua')) return` là bắt buộc — không có nó thì
bấm vào khoảng trống cũng chạy.

Gắn listener cho từng nút sẽ **hỏng** khi render lại danh sách bằng `innerHTML`:
nút cũ bị xoá, listener biến mất theo. Delegation không bị vậy.

```bash
npx serve .
# rồi mở http://localhost:3000
git diff l7/d1-add-event-listener l7/d2-event-delegation
```

Branch tiếp theo: `l7/d3-hieu-ung-an-hien`.

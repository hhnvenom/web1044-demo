# l7/d10-textbox-live — gõ tới đâu hiện tới đó

**Slide:** Bài 7 · "Ô nhập liệu cập nhật liên tục" (demo `l7-d10`).

Một listener `input` trên ô nhập, mỗi phím gõ là một lần chạy:

```js
o.addEventListener('input', function (e) {
  const val = e.target.value
  hien.textContent = val || '(chưa nhập gì)'
})
```

`e.target` chính là ô đang gõ, nên lấy giá trị bằng `e.target.value` không cần
tìm lại phần tử.

Thử tại lớp: đổi `'input'` thành `'change'` rồi gõ lại — chữ chỉ đổi khi bấm ra
ngoài ô. Đó là khác biệt giữa hai sự kiện.

```bash
npx serve .
# rồi mở http://localhost:3000/textbox.html
git diff l7/d2-event-delegation l7/d10-textbox-live
```

Branch tiếp theo: `l7/d11-form-validate`.

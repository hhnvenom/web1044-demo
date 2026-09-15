# l6/d2-chon-phan-tu — Chọn và sửa phần tử

**Slide:** Bài 6 · "Chọn phần tử" (demo `l6-d2`), kèm hai slide liền sau:
"textContent hay innerHTML" và "Đổi style và class".

| Cách chọn | Trả về |
|---|---|
| `getElementById('id')` | một phần tử |
| `querySelector('.class')` | phần tử **đầu tiên** khớp |
| `querySelectorAll('.class')` | **danh sách**, phải duyệt mới sửa được từng cái |

```bash
npx serve .
git diff l6/d1-window-open l6/d2-chon-phan-tu
```

Mở F12 xem console để thấy ba dòng `console.log` đầu tiên.
Tiêu đề trang đổi thành "Menu hôm nay" ngay khi tải.

Branch tiếp theo: `l6/d3-tao-phan-tu`.

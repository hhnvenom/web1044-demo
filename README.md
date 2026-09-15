# l4/d4-sort — sort và cái bẫy sắp xếp theo chuỗi

**Slide:** Bài 4 · "sort" (demo `l4-d4`).

`sort()` không có comparator sẽ đổi mọi phần tử thành **chuỗi** rồi so sánh từng ký tự,
nên `[10, 9, 100, 25]` ra `[10, 100, 25, 9]`. Với số luôn truyền `(a, b) => a - b`.

`sort()` sửa **ngay mảng gốc** — dùng `[...mang].sort(...)` nếu muốn giữ bản gốc.

```bash
node index.js
git diff l4/d3-map-filter-reduce l4/d4-sort
```

Branch tiếp theo: `l4/d5-chain`.

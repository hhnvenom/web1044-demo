# l5/end — Bài 5 hoàn chỉnh

**Slide:** Bài 5 · "Tóm tắt bài 5" (demo `l5-end`).

Toàn bộ demo của bài 5 trong `index.js`, theo đúng thứ tự trên slide:

1. Mảng song song vỡ ra sao (`l5/d1-mang-song-song`)
2. Function constructor (`l5/d2-function-constructor`)
3. Từ object literal đến class, `constructor` chạy khi nào (`l5/d3-class-constructor`)
4. Mỗi instance có dữ liệu riêng, class `Student` đầy đủ (`l5/d4-class-student`)
5. Private field `#` (`l5/d5-private-field`)
6. Getter và setter (`l5/d6-getter-setter`)
7. `static` (`l5/d7-static`)
8. Composition — `Cart` chứa `Product` (`l5/d8-composition`)

```bash
node index.js
```

Mỗi demo bọc trong một khối `{}` riêng vì nhiều demo dùng lại cùng tên class
(`Person`, `Student`, `Product`) — `class` và `const` không khai báo lại được
trong cùng một phạm vi.

Đây là điểm khởi đầu của bài 6. Lab 05: xem branch `l5/lab-start`.

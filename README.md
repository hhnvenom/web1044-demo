# l5/d2-function-constructor — Function constructor

**Slide:** Bài 5 · demo `l5-d2`.

Cách viết cũ, trước khi ES6 có `class`. `new` tạo một object rỗng rồi gán nó cho `this`.
Quên `new` thì `this` trỏ vào global và biến nhận được là `undefined`.

```bash
node index.js
git diff l5/d1-mang-song-song l5/d2-function-constructor
```

Branch tiếp theo: `l5/d3-class-constructor`.

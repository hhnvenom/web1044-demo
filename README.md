# l8/d6-validator — Validate form bằng validator.js

**Slide:** Bài 8 · "validator.js" (demo `l8-d6`).

Thẻ script của thư viện phải đặt **trước** `js/app.js`, nếu không sẽ gặp
`Uncaught ReferenceError: validator is not defined`.

Code có kiểm tra `typeof validator === 'undefined'` để trang không vỡ khi mất mạng.
Validate phía client chỉ để **trải nghiệm** — an toàn thật phải validate ở server.

```bash
npx serve .
# rồi mở http://localhost:3000
git diff l8/d5-notification l8/d6-validator
```

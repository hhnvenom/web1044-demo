# WEB1044 — Lập trình cơ sở với JavaScript · Repo demo

Mã nguồn demo đi kèm bộ slide môn **WEB1044 (FPT Polytechnic)**. Mỗi demo là một branch;
trong một bài, demo sau commit nối tiếp demo trước nên `git diff <branch-trước> <branch-sau>`
chỉ hiện phần vừa thêm.

## Cách dùng

```bash
git clone https://github.com/hhnvenom/web1044-demo.git
cd web1044-demo
git checkout l1/d1-hello-console   # đổi sang branch của demo đang học
node index.js                      # lệnh chạy ghi trong README của từng branch
```

## Quy ước tên branch

`l<bài>/d<demo>-<slug>` cho demo · `l<bài>/lab-start` code phát cho sinh viên ·
`l<bài>/lab-solution` đáp án (giảng viên) · `l<bài>/end` trạng thái hoàn chỉnh cuối bài.

## Danh sách branch

| Branch | Bài | Nội dung | Chạy |
|---|---|---|---|
| `l1/d1-hello-console` | 1 | File JS đầu tiên: khai báo biến, `console.log`, chạy bằng Node | `node index.js` |
| `l1/d2-ep-kieu` | 1 | Ép kiểu ngầm định: `+` `-` `*` `==` | `node index.js` |
| `l1/d3-ep-kieu-tuong-minh` | 1 | Ép kiểu tường minh: `Number()` `String()` `Boolean()` `+x` `NaN` | `node index.js` |
| `l1/end` | 1 | Toàn bộ demo bài 1 (thêm `typeof`, `let/const/var`, falsy, `==`/`===`) | `node index.js` |
| `l1/lab-start` | 1 | Khung 4 bài của Lab 01 kèm đề bài trong comment | `node index.js` |
| `l1/lab-solution` | 1 | Đáp án Lab 01 (chỉ giảng viên) | `node index.js` |
| `l8/end` | 8 | Shop cà phê — thành phẩm cuối môn: render sản phẩm, giỏ hàng, dark mode, localStorage, form đăng ký | `npx serve .` |

Các bài 2–8 sẽ được bổ sung khi soạn slide tương ứng.

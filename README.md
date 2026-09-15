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
| `l1/d1-hello-console` | 1 | File JS đầu tiên: khai báo biến, `console.log` | `node index.js` |
| `l1/d2-ep-kieu` | 1 | Ép kiểu ngầm định: `+` `-` `*` `==` | `node index.js` |
| `l1/d3-ep-kieu-tuong-minh` | 1 | Ép kiểu tường minh: `Number()` `String()` `Boolean()` `NaN` | `node index.js` |
| `l1/end` | 1 | Toàn bộ demo bài 1 (`typeof`, `let/const/var`, falsy, `===`) | `node index.js` |
| `l1/lab-start` | 1 | Khung 4 bài của Lab 01 | `node index.js` |
| `l1/lab-solution` | 1 | Đáp án Lab 01 (chỉ giảng viên) | `node index.js` |
| `l2/d1-if-else` | 2 | `if...else` kiểm tra số chẵn / lẻ | `node index.js` |
| `l2/d2-if-else-nested` | 2 | `if` lồng nhau so với `else if` | `node index.js` |
| `l2/d3-switch-case` | 2 | `switch...case` và bẫy quên `break` | `node index.js` |
| `l2/d4-vong-lap-long` | 2 | Vòng lặp lồng nhau — bảng cửu chương | `node index.js` |
| `l2/d5-vong-lap-tung-buoc` | 2 | Chạy từng bước vòng lặp `for` và ba biến thể | `node index.js` |
| `l2/end` | 2 | Toàn bộ demo bài 2 (ternary, `while`, `break`/`continue`, tiền điện) | `node index.js` |
| `l2/lab-start` | 2 | Khung 6 bài của Lab 02 | `node bai1.js` |
| `l2/lab-solution` | 2 | Đáp án Lab 02 (chỉ giảng viên) | `node bai1.js` |
| `l3/d2-tach-ham` | 3 | Tách đoạn tính tiền điện của bài 2 thành hàm | `node index.js` |
| `l3/d3-cac-cach-khai-bao` | 3 | Declaration, expression và arrow function | `node index.js` |
| `l3/d8-ham-goi-ham` | 3 | `layHeSo` và `tinhLuong` — mỗi hàm một việc | `node index.js` |
| `l3/end` | 3 | Toàn bộ demo bài 3 (tham số, `return`, phạm vi biến, call stack) | `node index.js` |
| `l3/lab-start` | 3 | Khung 6 bài của Lab 03, kèm bộ test cho bài 3.4 | `node bai1.js` |
| `l3/lab-solution` | 3 | Đáp án Lab 03 (chỉ giảng viên) | `node bai1.js` |
| `l8/end` | 8 | Shop cà phê — thành phẩm cuối môn | `npx serve .` |

Các bài 4–7 sẽ được bổ sung khi soạn slide tương ứng.

Demo trong cùng một bài **commit nối tiếp nhau**, và `l<n>/end` là điểm khởi đầu của bài kế tiếp,
nên `git diff l2/d1-if-else l2/d2-if-else-nested` chỉ hiện phần vừa thêm.

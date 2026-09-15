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
| `l0/d2-kiem-tra-moi-truong` | 0 | Kiểm tra Node đã cài đúng chưa | `node index.js` |
| `l1/d1-hello-console` | 1 | File JS đầu tiên: khai báo biến, `console.log` | `node index.js` |
| `l1/d2-ep-kieu` | 1 | Ép kiểu ngầm định: `+` `-` `*` `==` | `node index.js` |
| `l1/d3-ep-kieu-tuong-minh` | 1 | Ép kiểu tường minh: `Number()` `String()` `Boolean()` `NaN` | `node index.js` |
| `l1/d4-cach-chay-js` | 1 | Bốn cách chạy JavaScript (console, script, file ngoài, Node) | `node index.js` |
| `l1/d5-let-const-var` | 1 | `let`, `const` và `var` rò rỉ ra ngoài khối | `node index.js` |
| `l1/d6-typeof` | 1 | `typeof`, bẫy `typeof null` và `typeof` mảng | `node index.js` |
| `l1/d7-gia-tri-falsy` | 1 | Sáu giá trị falsy | `node index.js` |
| `l1/d8-so-sanh-bang` | 1 | So sánh `==` và `===` | `node index.js` |
| `l1/end` | 1 | Toàn bộ demo bài 1 (`typeof`, `let/const/var`, falsy, `===`) | `node index.js` |
| `l1/lab-start` | 1 | Khung 4 bài của Lab 01 | `node index.js` |
| `l1/lab-solution` | 1 | Đáp án Lab 01 (chỉ giảng viên) | `node index.js` |
| `l2/d1-if-else` | 2 | `if...else` kiểm tra số chẵn / lẻ | `node index.js` |
| `l2/d2-if-else-nested` | 2 | `if` lồng nhau so với `else if` | `node index.js` |
| `l2/d3-switch-case` | 2 | `switch...case` và bẫy quên `break` | `node index.js` |
| `l2/d4-vong-lap-long` | 2 | Vòng lặp lồng nhau — bảng cửu chương | `node index.js` |
| `l2/d5-vong-lap-tung-buoc` | 2 | Chạy từng bước vòng lặp `for` và ba biến thể | `node index.js` |
| `l2/d6-toan-tu-logic` | 2 | Toán tử logic và toán tử ba ngôi | `node index.js` |
| `l2/d7-while-do-while` | 2 | `while` và `do...while` | `node index.js` |
| `l2/d8-break-continue` | 2 | `break` và `continue` | `node index.js` |
| `l2/end` | 2 | Toàn bộ demo bài 2 (ternary, `while`, `break`/`continue`, tiền điện) | `node index.js` |
| `l2/lab-start` | 2 | Khung 6 bài của Lab 02 | `node bai1.js` |
| `l2/lab-solution` | 2 | Đáp án Lab 02 (chỉ giảng viên) | `node bai1.js` |
| `l3/d2-tach-ham` | 3 | Tách đoạn tính tiền điện của bài 2 thành hàm | `node index.js` |
| `l3/d3-cac-cach-khai-bao` | 3 | Declaration, expression và arrow function | `node index.js` |
| `l3/d8-ham-goi-ham` | 3 | `layHeSo` và `tinhLuong` — mỗi hàm một việc | `node index.js` |
| `l3/end` | 3 | Toàn bộ demo bài 3 (tham số, `return`, phạm vi biến, call stack) | `node index.js` |
| `l3/lab-start` | 3 | Khung 6 bài của Lab 03, kèm bộ test cho bài 3.4 | `node bai1.js` |
| `l3/lab-solution` | 3 | Đáp án Lab 03 (chỉ giảng viên) | `node bai1.js` |
| `l4/d1-mang-co-ban` | 4 | Thêm và xoá phần tử: push/pop/unshift/shift | `node index.js` |
| `l4/d2-object-co-ban` | 4 | Object: truy cập, sửa, thêm thuộc tính | `node index.js` |
| `l4/d3-map-filter-reduce` | 4 | `map`, `filter`, `reduce` | `node index.js` |
| `l4/d4-sort` | 4 | `sort` và bẫy so sánh chuỗi | `node index.js` |
| `l4/d5-chain` | 4 | Nối chuỗi `filter` → `sort` → `map` | `node index.js` |
| `l4/end` | 4 | Toàn bộ demo bài 4 | `node index.js` |
| `l4/lab-start` | 4 | Khung 7 bài của Lab 04 | `node bai1.js` |
| `l4/lab-solution` | 4 | Đáp án Lab 04 (chỉ giảng viên) | `node bai1.js` |
| `l5/d1-mang-song-song` | 5 | Vấn đề của mảng song song | `node index.js` |
| `l5/d2-function-constructor` | 5 | Function constructor | `node index.js` |
| `l5/d3-class-constructor` | 5 | Chuyển sang `class` | `node index.js` |
| `l5/d4-class-student` | 5 | `class Student` đầy đủ | `node index.js` |
| `l5/d5-private-field` | 5 | Thuộc tính riêng `#` | `node index.js` |
| `l5/d6-getter-setter` | 5 | `get` và `set` | `node index.js` |
| `l5/d7-static` | 5 | Thành viên `static` | `node index.js` |
| `l5/d8-composition` | 5 | Kết hợp các class | `node index.js` |
| `l5/end` | 5 | Toàn bộ demo bài 5 | `node index.js` |
| `l5/lab-start` | 5 | Khung 6 bài của Lab 05 | `node bai1.js` |
| `l5/lab-solution` | 5 | Đáp án Lab 05 (chỉ giảng viên) | `node bai1.js` |
| `l6/d1-window-open` | 6 | BOM: `window.open` | `npx serve .` |
| `l6/d2-chon-phan-tu` | 6 | Chọn và sửa phần tử DOM | `npx serve .` |
| `l6/d3-tao-phan-tu` | 6 | Tạo phần tử mới | `npx serve .` |
| `l6/d4-render-san-pham` | 6 | Render danh sách sản phẩm từ mảng | `npx serve .` |
| `l6/d5-countdown` | 6 | Đồng hồ đếm ngược | `npx serve .` |
| `l6/end` | 6 | Trang shop hiển thị xong (nền của bài 7) | `npx serve .` |
| `l6/lab-start` | 6 | Khung Lab 06 | `npx serve .` |
| `l6/lab-solution` | 6 | Đáp án Lab 06 (chỉ giảng viên) | `npx serve .` |
| `l7/d1-add-event-listener` | 7 | `addEventListener` | `npx serve .` |
| `l7/d2-event-delegation` | 7 | Event delegation | `npx serve .` |
| `l7/d3-hieu-ung-an-hien` | 7 | Hiệu ứng ẩn hiện | `npx serve .` |
| `l7/d4-cart-events` | 7 | Sự kiện giỏ hàng | `npx serve .` |
| `l7/end` | 7 | Shop có giỏ hàng chạy được (nền của bài 8) | `npx serve .` |
| `l7/lab-start` | 7 | Khung Lab 07 | `npx serve .` |
| `l8/d1-local-storage` | 8 | `localStorage` cơ bản | `npx serve .` |
| `l8/d2-json` | 8 | `JSON.stringify` và `JSON.parse` | `node index.js` |
| `l8/d3-dark-mode` | 8 | Dark mode nhớ lựa chọn | `npx serve .` |
| `l8/d4-cart-persist` | 8 | Giỏ hàng không mất khi F5 | `npx serve .` |
| `l8/d5-notification` | 8 | Thông báo cho người dùng | `npx serve .` |
| `l8/d6-validator` | 8 | Kiểm tra dữ liệu form | `npx serve .` |
| `l8/lab-start` | 8 | Khung Lab 08 | `npx serve .` |
| `l8/end` | 8 | Shop cà phê — thành phẩm cuối môn | `npx serve .` |
| `asm/starter` | ASM | Khung khởi tạo Assignment (không có lời giải) | `npx serve .` |
| `asm/vi-du-hoan-chinh` | ASM | Assignment mẫu hoàn chỉnh — nhà sách | `npx serve .` |

Demo trong cùng một bài **commit nối tiếp nhau**, và `l<n>/end` là điểm khởi đầu của bài kế tiếp,
nên `git diff l2/d1-if-else l2/d2-if-else-nested` chỉ hiện phần vừa thêm.

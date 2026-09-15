// ======================================================
//  LAB 06 — BOM và DOM
//  Chạy: npx serve .   rồi mở http://localhost:3000
//  Dữ liệu sản phẩm nằm ở js/data.js
// ======================================================


// ------------------------------------------------------
//  LAB 6.1 — Cửa sổ thông tin sinh viên
//  Yêu cầu:
//    1. Tạo cửa sổ hiển thị MSSV, họ tên, ngành, lớp
//    2. Kích cỡ cửa sổ 600 × 400px
//    3. Hiển thị ngay giữa màn hình
//  Tiêu chí: đúng kích thước; căn giữa trên MỌI độ phân giải; nội dung đầy đủ.
//  Gợi ý: left = (screen.width - width) / 2
//  ĐỪNG hardcode top=200,left=300 — thử trên màn hình khác là lệch ngay.
// ------------------------------------------------------
function openStudentInfo() {
  // TODO: viết code của bạn
}


// ------------------------------------------------------
//  LAB 6.2 — Countdown khuyến mãi
//  Yêu cầu: hiển thị đủ bốn ô ngày / giờ / phút / giây theo mẫu.
//  Tiêu chí: bốn ô đúng; số có HAI chữ số (02 chứ không phải 2).
//  Bốn bước:
//    1. const ketThuc = new Date('2026-12-31')
//    2. const ms = ketThuc - new Date()
//    3. chia và lấy dư để ra ngày/giờ/phút/giây
//    4. String(giay).padStart(2, '0')
//  LƯU Ý: bài này chỉ HIỂN THỊ TĨNH. LAB 7.2 mới thêm setInterval cho nó chạy.
// ------------------------------------------------------
function renderCountdown() {
  // TODO: viết code của bạn
}


// ------------------------------------------------------
//  LAB 6.3 — Render danh sách sản phẩm
//  Yêu cầu: mỗi sản phẩm trong div.product gồm ảnh, tên h3, giá dạng xxx.xxxđ.
//  Tiêu chí: render BẰNG JAVASCRIPT từ mảng products, KHÔNG viết tay HTML.
//  Gợi ý: products.map(...).join('')  ·  p.price.toLocaleString('vi-VN')
//  Nút "Thêm giỏ hàng" chỉ cần CÓ, chưa cần chạy — bài 7 mới xử lý.
// ------------------------------------------------------
function renderProducts() {
  // TODO: viết code của bạn
}


// ------------------------------------------------------
//  LAB 6.4 — Bảng giỏ hàng
//  Yêu cầu: tạo mảng cart, hiển thị bảng, tính thành tiền từng dòng và tổng tiền.
//  Tiêu chí: đủ 5 cột; thành tiền = đơn giá × số lượng; tổng cộng đúng.
//  Tự chấm: 180.000 + 240.000 = 420.000đ
//  QUAN TRỌNG: tách renderCart() thành hàm riêng ngay từ bây giờ —
//  LAB 7.4 sẽ gọi lại nó sau mỗi lần giỏ hàng thay đổi.
// ------------------------------------------------------
const cart = [
  { name: 'Cà phê xanh', price: 180000, qty: 1 },
  { name: 'Cà phê Arabica', price: 120000, qty: 2 }
]

function renderCart() {
  // TODO: viết code của bạn
}


// ------------------------------------------------------
//  LAB 6.5 — Dùng AI gợi ý layout
//  Dùng mảng JSON của LAB 4 (bộ 100 sinh viên), nhờ AI gợi ý layout HTML,
//  rồi TỰ viết phần DOM render. Phân vai: AI lo HTML/CSS, bạn lo JavaScript.
//
//  LAB 6.6 — AI mô tả nghiệp vụ
//  Làm trên CHỦ ĐỀ ASSIGNMENT của bạn. Kết quả dùng thẳng cho Giai đoạn 1.
//
//  LAB 6.7 — Bài mở rộng
//    a) Ô tìm kiếm lọc sản phẩm theo tên (gọi hàm bằng tay, chưa cần sự kiện)
//    b) Hiện "Hết hàng" thay nút mua khi quantity = 0
//    c) Render danh sách sinh viên bài 4 thành bảng có sắp xếp
// ------------------------------------------------------


// ---------- Khởi động ----------
renderCountdown()
renderProducts()
renderCart()

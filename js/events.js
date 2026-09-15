// ======================================================
//  LAB 07 — Sự kiện và hiệu ứng
//  Làm bài vào file này. Chạy: npx serve .
// ======================================================

// ------------------------------------------------------------------
// LAB 7.1 — Hiệu ứng chào mừng
// Yêu cầu: khối #box ban đầu ẩn, sau 2 giây tự hiện, sau 5 giây tự ẩn.
// Tiêu chí: mượt, không nhảy đột ngột; dùng class + CSS transition,
//           KHÔNG đổi style bằng JS từng bước.
// Gợi ý: css/style.css đã có sẵn #box và #box.hien — chỉ cần bật/tắt class.
// Lưu ý: mốc 5 giây tính từ lúc TẢI TRANG, không phải từ lúc hiện.

// TODO 7.1


// ------------------------------------------------------------------
// LAB 7.2 — Countdown đếm ngược thật
// Yêu cầu: dùng lại bài 2 của Lab 06, thêm setInterval đếm ngược từng giây.
// Tiêu chí: 4 ô số cập nhật mỗi giây; luôn 2 chữ số; gọi clearInterval khi về 0.
// Lưu ý: không clearInterval thì về 0 nó đếm tiếp sang SỐ ÂM.
//        Nhớ lưu id trả về lúc tạo interval để còn dọn dẹp.

// TODO 7.2


// ------------------------------------------------------------------
// LAB 7.3 — Icon tim đổi màu
// Yêu cầu: thêm icon tim vào từng thẻ sản phẩm, click thì đổi màu.
// Tiêu chí: mỗi icon độc lập; dùng classList.toggle chứ không sửa style.color;
//           click lần hai trở lại màu cũ.
// Gợi ý: nhiều icon giống nhau thì dùng EVENT DELEGATION ở thẻ cha.

// TODO 7.3


// ------------------------------------------------------------------
// LAB 7.4 — Giỏ hàng chạy được   ← bài lớn nhất, dành 40 phút
// Yêu cầu: bấm "Thêm giỏ hàng" thì thêm vào mảng cart;
//          nút − và + đổi số lượng; nút Xoá bỏ sản phẩm khỏi mảng.
// Tiêu chí: thành tiền và tổng tiền cập nhật đúng sau mỗi thao tác;
//           thêm sản phẩm đã có thì CỘNG DỒN; xoá xong bảng vẫn đúng.
//
// Bốn bước:
//   1. Gắn MỘT listener ở thẻ cha của danh sách sản phẩm (delegation)
//   2. Dùng data-ten trên nút để biết sản phẩm nào
//   3. Sửa mảng cart: find để cộng dồn, filter để xoá
//   4. Gọi renderCart() sau MỖI thay đổi
//
// Ba tình huống dễ quên:
//   - Giảm số lượng về 0 → xoá khỏi giỏ hay giữ qty = 0? Chọn một và làm nhất quán.
//   - Giỏ trống → hiện "Giỏ hàng của bạn đang trống", đừng để bảng trắng.
//   - Thêm trùng → cộng dồn thành một dòng qty = 2, không tạo hai dòng.

let cart = []

function themVaoGio(ten, gia) {
  // TODO: find → cộng dồn hoặc push
  renderCart()
}

function doiSoLuong(ten, delta) {
  // TODO: tìm rồi cộng delta
  // nếu qty <= 0 thì xoá khỏi cart
  renderCart()
}

function xoaKhoiGio(ten) {
  // TODO: filter bỏ sản phẩm có tên trùng
  renderCart()
}

function renderCart() {
  // TODO: giỏ trống thì hiện thông báo rồi return
  // TODO: reduce để tính tổng, map để vẽ từng dòng
}

// TODO: hai listener delegation — một cho #danh-sach, một cho #gio


// ------------------------------------------------------------------
// LAB 7.5 / 7.6 — Dùng AI gợi ý hiệu ứng và UX
// 7.5: AI gợi ý hiệu ứng, bạn TỰ triển khai lại bằng JS và DOM.
// 7.6: AI gợi ý về UX cho flow bán hàng — nêu ít nhất 3 gợi ý và
//      TỰ ĐÁNH GIÁ cái nào khả thi trong phạm vi môn học.
//      Chép nguyên câu trả lời của AI là không đạt.

// TODO 7.5


// ------------------------------------------------------------------
// LAB 7.7 — Bài mở rộng (giảng viên giao thêm)
//   - Ô tìm kiếm lọc sản phẩm theo tên khi gõ (sự kiện input)
//   - Badge hiển thị tổng số món trên icon giỏ hàng
//   - Thông báo toast "Đã thêm vào giỏ", tự ẩn sau 2 giây

// TODO 7.7

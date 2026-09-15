// ============================================================
//  events.js — XỬ LÝ SỰ KIỆN      (buổi 7 · LAB 7.3, 7.4)
// ============================================================
//  Quy tắc vàng: sự kiện SỬA DỮ LIỆU trước, rồi GỌI LẠI HÀM RENDER.
//  Đừng sửa thẳng HTML trong DOM — làm vậy dữ liệu và màn hình sẽ lệch nhau.
// ============================================================

// TODO: tạo giỏ hàng ban đầu, đọc từ localStorage nếu có (buổi 8)
// const gioHang = new Cart(docGioHang())

// TODO: gắn listener cho #product-list bằng EVENT DELEGATION
//   - Gắn MỘT listener lên thẻ cha, không gắn cho từng nút
//   - Dùng e.target.closest('[data-add]') để biết bấm vào nút nào
//   - Lý do: sản phẩm được render lại liên tục, listener gắn cho nút cũ sẽ mất

// TODO: gắn listener cho #cart-items — tăng, giảm, xoá

// TODO: gắn listener cho #filters — lọc theo danh mục

// TODO (buổi 8): nút đổi dark mode, submit form đăng ký

// TODO: chạy render lần đầu khi trang vừa mở

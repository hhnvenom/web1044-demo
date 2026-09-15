// ============================================================
//  models.js — CLASS Product VÀ Cart      (buổi 5 · LAB 5.2, 5.3)
// ============================================================
//  Giai đoạn 1 của assignment yêu cầu:
//    - class Product có ÍT NHẤT 5 phương thức
//    - class Cart có addProduct, removeProduct, getTotal
// ============================================================

class Product {
  constructor(data) {
    // TODO: gán các thuộc tính từ data vào this
    // Gợi ý: this.id = data.id ... hoặc dùng destructuring
  }

  // TODO: getFormattedPrice() — trả về '120.000đ'
  // TODO: isInStock()        — còn hàng hay không
  // TODO: matchesCategory(c) — có thuộc danh mục c không
  // TODO: getSummary()       — chuỗi mô tả ngắn để in ra console
  // TODO: thêm một phương thức nữa tuỳ nghiệp vụ của bạn
}

class Cart {
  constructor(items) {
    // Mỗi phần tử trong items nên là { id, qty } — chỉ lưu id, KHÔNG lưu cả sản phẩm.
    // Lý do: giá sản phẩm có thể đổi, lưu id thì luôn lấy được giá mới nhất.
    this.items = items || []
  }

  // TODO: addProduct(id, qty)     — đã có thì CỘNG DỒN, chưa có thì thêm dòng mới
  // TODO: removeProduct(id)       — xoá hẳn khỏi giỏ
  // TODO: changeQuantity(id, d)   — tăng/giảm, về 0 thì xử lý rõ ràng
  // TODO: getTotal()              — tổng tiền, dùng timSanPham(id) để lấy giá
  // TODO: getCount()              — tổng số món, để hiện lên header
  // TODO: isEmpty()               — giỏ có trống không
}

// Kiểm tra nhanh trong console (Giai đoạn 1 BẮT BUỘC chạy thử phần này):
//   const gio = new Cart()
//   gio.addProduct(1)
//   gio.addProduct(1)
//   console.log(gio.getTotal())

// BÀI 5.3 — class Cart   ★ BÀI QUAN TRỌNG NHẤT CỦA LAB
// Yêu cầu:
//   1. Tạo class Cart lưu sản phẩm và số lượng người dùng đã chọn
//   2. Năm method: addProduct, removeProduct, updateProductQuantity, getTotal, getCartInfo
// Tiêu chí:
//   - Thêm sản phẩm ĐÃ CÓ thì cộng dồn số lượng, KHÔNG tạo dòng mới
//   - getTotal dùng reduce
//   - getCartInfo trả về danh sách đọc được
//
// Gợi ý:
//   - Cấu trúc lưu: #items = [{ product, qty }]
//   - addProduct: tìm bằng find trước, có rồi thì cộng qty
//   - getTotal: reduce((t, i) => t + i.product.price * i.qty, 0)
//
// Class Cart này DÙNG LẠI ở bài 6, 7, 8 và trong assignment.
// Làm cho chắc, đừng làm cho xong.

// TODO: viết class Cart của bạn dưới đây

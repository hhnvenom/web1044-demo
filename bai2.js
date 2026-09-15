// BÀI 5.2 — class Product
// Yêu cầu:
//   1. Tạo class Product với name, price, description, quantity
//   2. Viết đủ 5 phương thức:
//        getDiscountedPrice(percent)  → giá sau khi giảm X%
//        updateQuantity(amount)       → tăng hoặc giảm số lượng
//        isInStock()                  → còn hàng hay không (BOOLEAN)
//        getInfo()                    → thông tin chi tiết
//        totalValue()                 → price × quantity
// Tiêu chí: đủ 5 method · totalValue() tính đúng · có xử lý khi quantity về 0
//
// Ba điểm cần chú ý:
//   - getDiscountedPrice(20) TRẢ VỀ giá mới, KHÔNG sửa this.price
//   - updateQuantity(-5) nhận số âm để giảm — chặn không cho xuống dưới 0
//   - isInStock() trả về boolean, không phải chuỗi 'còn hàng'
// Gợi ý: dùng SETTER cho quantity để chặn giá trị âm.

// TODO: viết class Product của bạn dưới đây


// Bỏ comment để tự kiểm tra:
// const p = new Product('Arabica', 120000, 'Cà phê hạt', 10)
// console.log(p.getDiscountedPrice(20))   // 96000
// console.log(p.totalValue())             // 1200000
// p.updateQuantity(-10)
// console.log(p.isInStock())              // false

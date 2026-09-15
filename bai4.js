// BÀI 5.4 — Nhờ AI bổ sung method (ĐÁP ÁN MẪU)
//
// Prompt đã dùng:
//   "Đây là class Product của tôi: [dán code bai2.js].
//    Đề xuất thêm 5 method hữu ích cho một website bán hàng.
//    Với mỗi method, nói rõ khi nào cần dùng."
//
// AI đề xuất và nhận xét của tôi:
//
// 1. applyCoupon(code)        → CẦN. Website bán hàng nào cũng có mã giảm giá.
// 2. toJSON()                 → CẦN. Bài 8 lưu localStorage sẽ dùng đúng cái này.
// 3. clone()                  → THỪA ở môn này. Chưa có tình huống cần sao chép sản phẩm.
// 4. compareTo(other)         → THỪA. sort() đã có comparator rồi, không cần method riêng.
// 5. getFormattedPrice()      → CẦN. Đổi 120000 thành "120.000đ" dùng ở mọi chỗ hiển thị.
//
// Bài học: AI đề xuất đúng cú pháp nhưng không biết PHẠM VI môn học.
// Ba cái cần thì giữ, hai cái thừa thì bỏ — quyết định là của người viết code.

class Product {
  constructor(name, price) {
    this.name = name
    this.price = price
  }

  // Hai method được giữ lại sau khi cân nhắc
  getFormattedPrice() {
    return this.price.toLocaleString('vi-VN') + 'đ'
  }

  toJSON() {
    return { name: this.name, price: this.price }
  }
}

const p = new Product('Arabica', 120000)
console.log(p.getFormattedPrice())
console.log(JSON.stringify(p.toJSON()))

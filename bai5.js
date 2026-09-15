// BÀI 5.5 — Nhờ AI mô tả nghiệp vụ rồi tạo class (ĐÁP ÁN MẪU)
// Chủ đề mẫu: cửa hàng bán sách. Bài nộp của bạn làm trên chủ đề assignment của bạn.
//
// Prompt đã dùng:
//   "Tôi làm website bán sách. Mô tả nghiệp vụ chính: khách xem gì, lọc theo gì,
//    mua thế nào. Từ nghiệp vụ đó, đề xuất các class cần có kèm thuộc tính và method."
//
// Nghiệp vụ AI mô tả (đã rút gọn):
//   - Khách xem danh sách sách, lọc theo thể loại và khoảng giá
//   - Xem chi tiết một cuốn: tên, tác giả, giá, tồn kho, mô tả
//   - Thêm vào giỏ, đổi số lượng, xoá
//   - Đặt hàng: nhập tên, số điện thoại, địa chỉ
//
// Nhận xét: AI đề xuất thêm class Review và class Publisher.
// Tôi bỏ cả hai vì assignment chưa cần bình luận và nhà xuất bản chỉ là một chuỗi.

class Book {
  constructor(id, title, author, price, category, stock) {
    this.id = id
    this.title = title
    this.author = author
    this.price = price
    this.category = category
    this.stock = stock
  }
  isAvailable() { return this.stock > 0 }
  getInfo() { return this.title + ' — ' + this.author + ' · ' + this.price + 'đ' }
}

class BookStore {
  constructor(books) { this.books = books }
  byCategory(cat) { return this.books.filter(b => b.category === cat) }
  byPriceRange(min, max) { return this.books.filter(b => b.price >= min && b.price <= max) }
}

const kho = new BookStore([
  new Book(1, 'Nhà Giả Kim', 'Paulo Coelho', 79000, 'Văn học', 12),
  new Book(2, 'Sapiens', 'Yuval Harari', 189000, 'Lịch sử', 5),
  new Book(3, 'Đắc Nhân Tâm', 'Dale Carnegie', 86000, 'Kỹ năng', 0)
])

console.log(kho.byCategory('Văn học').map(b => b.getInfo()))
console.log(kho.byPriceRange(70000, 100000).map(b => b.title))
console.log(kho.books.filter(b => !b.isAvailable()).map(b => b.title))

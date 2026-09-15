// BÀI 5.6 — Bài mở rộng (GỢI Ý ĐÁP ÁN cho cả ba đề)

// 1. static đếm số Product đã tạo
class Product {
  static soLuong = 0
  constructor(name, price) {
    this.name = name
    this.price = price
    Product.soLuong++          // gọi qua TÊN CLASS, không phải this
  }
}
new Product('Arabica', 120000)
new Product('Robusta', 90000)
console.log('1. Đã tạo', Product.soLuong, 'sản phẩm')

// 2. private field cho Cart — không ai sửa thẳng danh sách từ ngoài
class Cart {
  #items = []
  add(p, qty) { this.#items.push({ product: p, qty }) }
  getTotal() { return this.#items.reduce((t, i) => t + i.product.price * i.qty, 0) }
  get soMon() { return this.#items.length }
}
const c = new Cart()
c.add(new Product('Arabica', 120000), 2)
console.log('2. Số món:', c.soMon, '· Tổng:', c.getTotal())
console.log('2. c.items từ ngoài:', c.items)    // undefined — không đụng được

// 3. class Order gộp Cart + thông tin khách hàng
class Order {
  constructor(cart, khachHang, soDienThoai) {
    this.cart = cart
    this.khachHang = khachHang
    this.soDienThoai = soDienThoai
    this.ngayDat = '2026-09-16'
  }
  tongTien() { return this.cart.getTotal() }
  toString() {
    return 'Đơn của ' + this.khachHang + ' (' + this.soDienThoai + ') · '
      + this.cart.soMon + ' món · ' + this.tongTien() + 'đ'
  }
}
const don = new Order(c, 'Nguyễn Văn A', '0912345678')
console.log('3.', don.toString())

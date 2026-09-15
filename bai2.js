// BÀI 5.2 — class Product (ĐÁP ÁN)
// Dùng setter cho quantity để chặn giá trị âm.

class Product {
  constructor(name, price, description, quantity) {
    this.name = name
    this.price = price
    this.description = description
    this.quantity = quantity        // đi qua setter bên dưới
  }

  get quantity() { return this._quantity }

  set quantity(value) {
    if (value < 0) {
      console.log('Số lượng không được âm, đặt về 0')
      this._quantity = 0
      return
    }
    this._quantity = value
  }

  // TRẢ VỀ giá mới, không sửa this.price
  getDiscountedPrice(percent) {
    return this.price * (100 - percent) / 100
  }

  // amount âm là giảm, dương là tăng
  updateQuantity(amount) {
    this.quantity = this._quantity + amount    // setter tự chặn khi xuống dưới 0
    return this._quantity
  }

  isInStock() {
    return this._quantity > 0                  // BOOLEAN, không phải chuỗi
  }

  getInfo() {
    return this.name + ' · ' + this.price + 'đ · còn ' + this._quantity + ' · ' + this.description
  }

  totalValue() {
    return this.price * this._quantity
  }
}

const p = new Product('Arabica', 120000, 'Cà phê hạt', 10)
console.log(p.getDiscountedPrice(20))   // 96000
console.log(p.totalValue())             // 1200000
p.updateQuantity(-10)
console.log(p.isInStock())              // false
console.log(p.getInfo())

// Lỗi hay gặp: getDiscountedPrice sửa thẳng this.price — gọi hai lần là sai số.

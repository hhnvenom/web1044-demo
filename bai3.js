// BÀI 5.3 — class Cart (ĐÁP ÁN)

class Product {
  constructor(name, price) {
    this.name = name
    this.price = price
  }
}

class Cart {
  #items = []

  addProduct(product, qty) {
    const co = this.#items.find(i => i.product.name === product.name)
    if (co) {
      co.qty += qty              // cộng dồn, KHÔNG tạo dòng mới
      return
    }
    this.#items.push({ product, qty })
  }

  removeProduct(name) {
    this.#items = this.#items.filter(i => i.product.name !== name)
  }

  updateProductQuantity(name, qty) {
    const item = this.#items.find(i => i.product.name === name)
    if (!item) return
    if (qty <= 0) {
      this.removeProduct(name)   // giảm về 0 thì xoá luôn
      return
    }
    item.qty = qty
  }

  getTotal() {
    return this.#items.reduce((t, i) => t + i.product.price * i.qty, 0)
  }

  getCartInfo() {
    if (this.#items.length === 0) return 'Giỏ hàng trống'
    return this.#items
      .map(i => i.product.name + ' x' + i.qty + ' = ' + i.product.price * i.qty + 'đ')
      .join(' | ')
  }
}

const arabica = new Product('Arabica', 120000)
const robusta = new Product('Robusta', 90000)

const cart = new Cart()
cart.addProduct(arabica, 2)
cart.addProduct(robusta, 1)
cart.addProduct(arabica, 3)        // cộng dồn thành 5, không tạo dòng mới

console.log(cart.getCartInfo())    // Arabica x5 = 600000đ | Robusta x1 = 90000đ
console.log(cart.getTotal())       // 690000

cart.updateProductQuantity('Arabica', 1)
console.log(cart.getTotal())       // 210000

cart.removeProduct('Robusta')
console.log(cart.getCartInfo())    // Arabica x1 = 120000đ

cart.removeProduct('Arabica')
console.log(cart.getCartInfo())    // Giỏ hàng trống

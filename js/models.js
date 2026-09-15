// ============================================================
//  models.js — CLASS Product VÀ Cart   (buổi 5)
// ============================================================

class Product {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.price = data.price
    this.imgUrl = data.imgUrl
    this.description = data.description
    this.category = data.category
    this.quantity = data.quantity
  }

  // 1. Giá đã định dạng: 79000 -> "79.000đ"
  getFormattedPrice() {
    return this.price.toLocaleString('vi-VN') + 'đ'
  }

  // 2. Còn hàng không
  isInStock() {
    return this.quantity > 0
  }

  // 3. Có thuộc danh mục đang lọc không ('all' nghĩa là lấy hết)
  matchesCategory(category) {
    return category === 'all' || this.category === category
  }

  // 4. Tìm kiếm theo từ khoá, không phân biệt hoa thường
  matchesKeyword(keyword) {
    const kw = (keyword || '').trim().toLowerCase()
    if (kw === '') return true
    return this.name.toLowerCase().includes(kw)
  }

  // 5. Dòng mô tả ngắn để in ra console khi kiểm tra
  getSummary() {
    return this.name + ' — ' + this.getFormattedPrice() +
      ' (' + this.category + ', còn ' + this.quantity + ')'
  }

  // 6. Nhãn tình trạng kho, dùng khi render thẻ sản phẩm
  getStockLabel() {
    if (!this.isInStock()) return 'Hết hàng'
    if (this.quantity < 5) return 'Sắp hết'
    return 'Còn hàng'
  }
}

class Cart {
  // items là mảng { id, qty }. Chỉ lưu id — giá luôn lấy mới nhất từ PRODUCTS.
  constructor(items) {
    this.items = Array.isArray(items) ? items : []
  }

  // Đã có thì CỘNG DỒN, chưa có thì thêm dòng mới
  addProduct(id, qty) {
    const soLuong = qty || 1
    const dong = this.items.find(i => i.id === id)
    if (dong) {
      dong.qty += soLuong
    } else {
      this.items.push({ id: id, qty: soLuong })
    }
  }

  removeProduct(id) {
    this.items = this.items.filter(i => i.id !== id)
  }

  // Tăng hoặc giảm. Giảm về 0 thì xoá hẳn dòng đó.
  changeQuantity(id, delta) {
    const dong = this.items.find(i => i.id === id)
    if (!dong) return
    dong.qty += delta
    if (dong.qty <= 0) this.removeProduct(id)
  }

  getTotal() {
    return this.items.reduce(function (tong, dong) {
      const sp = timSanPham(dong.id)
      return sp ? tong + sp.price * dong.qty : tong
    }, 0)
  }

  getCount() {
    return this.items.reduce((tong, dong) => tong + dong.qty, 0)
  }

  isEmpty() {
    return this.items.length === 0
  }

  clear() {
    this.items = []
  }
}

// BÀI 4.5 — Tự nghĩ bài toán rồi giải (GỢI Ý ĐÁP ÁN)
// Đề: cửa hàng cần biết những sản phẩm sắp hết hàng (tồn dưới 5) để nhập thêm,
//     và tổng số tiền cần bỏ ra nếu nhập mỗi loại đủ 20 cái.

const kho = [
  { name: 'Laptop', price: 1200, qty: 3 },
  { name: 'Mouse', price: 30, qty: 20 },
  { name: 'Keyboard', price: 75, qty: 4 },
  { name: 'Monitor', price: 300, qty: 12 }
]

const sapHet = kho.filter(p => p.qty < 5)
console.log('Sắp hết:', sapHet.map(p => p.name + ' (còn ' + p.qty + ')'))

const tienNhap = sapHet.reduce((t, p) => t + p.price * (20 - p.qty), 0)
console.log('Tiền nhập thêm cho đủ 20 mỗi loại:', tienNhap)

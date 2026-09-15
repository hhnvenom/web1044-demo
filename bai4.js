// BÀI 4.4 — Sắp xếp products theo giá (ĐÁP ÁN)
const products = [
  { name: 'Laptop', price: 1200 },
  { name: 'Mouse', price: 30 },
  { name: 'Keyboard', price: 75 },
  { name: 'Monitor', price: 300 }
]

products.sort((a, b) => a.price - b.price)
products.forEach(p => console.log(p.name, p.price))
// Mouse 30 · Keyboard 75 · Monitor 300 · Laptop 1200

// Không có comparator thì sort đổi thành chuỗi: 1200 đứng trước 30 vì '1' < '3'.

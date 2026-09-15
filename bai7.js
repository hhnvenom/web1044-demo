// BÀI 4.7 — Bài mở rộng (GỢI Ý ĐÁP ÁN cho cả ba đề)
const products = [
  { name: 'Laptop', price: 1200, quantity: 3 },
  { name: 'Mouse', price: 30, quantity: 20 },
  { name: 'Keyboard', price: 75, quantity: 10 },
  { name: 'Monitor', price: 300, quantity: 5 }
]

// 1. Tổng giá trị tồn kho
const tonKho = products.reduce((t, p) => t + p.price * p.quantity, 0)
console.log('1. Tổng tồn kho:', tonKho)

// 2. Nhóm sinh viên theo xếp loại
const students = [
  { name: 'An', score: 8.2 }, { name: 'Bình', score: 7.5 },
  { name: 'Chi', score: 9.1 }, { name: 'Hà', score: 5.5 },
  { name: 'Khánh', score: 3.9 }
]
const nhom = { gioi: [], kha: [], trungBinh: [], yeu: [] }
students.forEach(s => {
  if (s.score >= 8) nhom.gioi.push(s.name)
  else if (s.score >= 6.5) nhom.kha.push(s.name)
  else if (s.score >= 5) nhom.trungBinh.push(s.name)
  else nhom.yeu.push(s.name)
})
console.log('2.', nhom)

// 3. Đắt nhất và rẻ nhất trong MỘT lần duyệt
const bien = products.reduce((kq, p) => ({
  dat: p.price > kq.dat.price ? p : kq.dat,
  re: p.price < kq.re.price ? p : kq.re
}), { dat: products[0], re: products[0] })
console.log('3. Đắt nhất:', bien.dat.name, '· Rẻ nhất:', bien.re.name)

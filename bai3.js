// BÀI 4.3 — Danh sách sinh viên (ĐÁP ÁN)
const students = [
  { name: 'An', score: 8.2 },
  { name: 'Bình', score: 7.5 },
  { name: 'Chi', score: 9.1 },
  { name: 'Dũng', score: 6.0 },
  { name: 'Giang', score: 8.8 },
  { name: 'Hà', score: 5.5 },
  { name: 'Khánh', score: 5.9 },
  { name: 'Linh', score: 7.0 },
  { name: 'Minh', score: 9.4 },
  { name: 'Ngọc', score: 6.7 }
]

// a) lọc điểm > 8
const gioi = students.filter(s => s.score > 8)
console.log('a)', gioi.map(s => s.name))

// b) tìm sinh viên tên Chi
console.log('b)', students.find(s => s.name === 'Chi'))

// c) mảng chỉ gồm tên
console.log('c)', students.map(s => s.name))

// d) điểm trung bình
const tong = students.reduce((t, s) => t + s.score, 0)
console.log('d)', (tong / students.length).toFixed(2))

// e) sắp xếp giảm dần (dùng bản sao để giữ mảng gốc)
const theoDiem = [...students].sort((a, b) => b.score - a.score)
console.log('e)', theoDiem.map(s => s.name + ' ' + s.score))

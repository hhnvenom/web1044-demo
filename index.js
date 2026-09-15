// ======================================================
//  Bài 4 · Demo 1 — Mảng cơ bản: thêm và xoá phần tử
//  Chạy: node index.js
// ======================================================

const list = ['Trứng', 'Thịt', 'Rau']
console.log('Ban đầu:', list)

list.push('Sữa')          // thêm CUỐI
console.log('sau push:', list)

list.unshift('Bánh mì')   // thêm ĐẦU
console.log('sau unshift:', list)

const cuoi = list.pop()   // xoá CUỐI, TRẢ VỀ phần tử vừa xoá
console.log('pop trả về:', cuoi, '→', list)

const dau = list.shift()  // xoá ĐẦU, TRẢ VỀ phần tử vừa xoá
console.log('shift trả về:', dau, '→', list)

// pop và shift TRẢ VỀ phần tử vừa xoá — đây là yêu cầu d của LAB 4.1.
console.log('length:', list.length, '· phần tử cuối:', list[list.length - 1])

// ======================================================
//  Demo 2 — Object: truy cập, sửa, thêm thuộc tính
// ======================================================
const sv = {
  ten: 'An',
  diem: 8.2,
  lop: 'PH12345'
}

console.log(sv.ten)        // truy cập bằng dấu chấm
console.log(sv['diem'])    // hoặc bằng ngoặc vuông

sv.diem = 9.0              // sửa
sv.email = 'an@fpt.edu.vn' // thêm thuộc tính mới
console.log(sv)

// Object dùng khi mỗi phần tử có NHIỀU thuộc tính khác loại nhau.
// Mảng dùng khi nhiều phần tử CÙNG loại.

// ======================================================
//  Demo 3 — map, filter, reduce
// ======================================================
const products = [
  { name: 'Cà phê Arabica', price: 120000 },
  { name: 'Cà phê Robusta', price: 90000 },
  { name: 'Cà phê xanh', price: 180000 }
]

// map — biến đổi từng phần tử, trả về mảng MỚI cùng độ dài
const tenSP = products.map(p => p.name)
console.log(tenSP)

// filter — giữ lại phần tử thoả điều kiện, mảng mới NGẮN hơn hoặc bằng
const dat = products.filter(p => p.price > 100000)
console.log(dat)

// reduce — gộp cả mảng thành MỘT giá trị
const tongTien = products.reduce((tong, p) => tong + p.price, 0)
console.log('Tổng:', tongTien)

// Cả ba đều KHÔNG sửa mảng gốc
console.log('mảng gốc vẫn còn', products.length, 'phần tử')

// ======================================================
//  Demo 4 — sort và cái bẫy sắp xếp theo chuỗi
// ======================================================
const so = [10, 9, 100, 25]

console.log([...so].sort())                 // [10, 100, 25, 9] — SAI
console.log([...so].sort((a, b) => a - b))  // [9, 10, 25, 100] — đúng

// sort() mặc định đổi mọi phần tử thành CHUỖI rồi so sánh từng ký tự,
// nên "100" đứng trước "25" vì ký tự '1' < '2'.
// Với số LUÔN truyền comparator (a, b) => a - b.

const sanPham = [
  { name: 'Laptop', price: 1200 },
  { name: 'Mouse', price: 30 },
  { name: 'Keyboard', price: 75 },
  { name: 'Monitor', price: 300 }
]
const theoGia = [...sanPham].sort((a, b) => a.price - b.price)
console.log(theoGia.map(p => p.name))   // Mouse, Keyboard, Monitor, Laptop

// Lưu ý: sort() sửa NGAY mảng gốc. Dùng [...mang] để giữ bản gốc.

// ======================================================
//  Demo 5 — Nối chuỗi phương thức
// ======================================================
const students = [
  { name: 'An', score: 8.2 }, { name: 'Bình', score: 7.5 },
  { name: 'Chi', score: 9.1 }, { name: 'Khánh', score: 5.9 },
  { name: 'Minh', score: 9.4 }
]

const ketQua = students
  .filter(s => s.score > 8)              // lọc trước cho mảng ngắn lại
  .sort((a, b) => b.score - a.score)     // rồi sắp xếp
  .map(s => s.name + ': ' + s.score)     // cuối cùng mới định dạng

console.log(ketQua)

// Thứ tự quan trọng: lọc trước thì sort và map chạy trên ít phần tử hơn.
// Mỗi bước trả về mảng mới nên nối tiếp được.

// ======================================================
//  Phần còn lại của bài 4
// ======================================================

console.log('--- splice và slice ---')
const a = ['A', 'B', 'C', 'D', 'E']
const cat = a.slice(1, 3)          // lấy ra, KHÔNG đổi mảng gốc
console.log(cat, '· gốc:', a)
const xoa = a.splice(1, 2)         // xoá tại chỗ, ĐỔI mảng gốc
console.log(xoa, '· gốc:', a)

console.log('--- duyệt mảng ---')
const diem = [8, 6.5, 9]
for (const d of diem) console.log('for...of:', d)
diem.forEach((d, i) => console.log('forEach:', i, d))

console.log('--- find và findIndex ---')
// products ở Demo 3 chưa có id, nên dùng bản có id để minh hoạ find
const dsSP = [
  { id: 1, name: 'Cà phê Arabica', price: 120000 },
  { id: 2, name: 'Cà phê Robusta', price: 90000 },
  { id: 3, name: 'Cà phê xanh', price: 180000 }
]
console.log(dsSP.find(p => p.id === 2))
console.log(dsSP.findIndex(p => p.id === 2))
console.log(dsSP.find(p => p.id === 99))      // undefined khi không thấy

console.log('--- mảng đối tượng: tổng tồn kho ---')
const kho = [
  { name: 'Laptop', price: 1200, qty: 3 },
  { name: 'Mouse', price: 30, qty: 20 },
  { name: 'Keyboard', price: 75, qty: 10 }
]
const tongKho = kho.reduce((t, p) => t + p.price * p.qty, 0)
console.log('Tổng giá trị tồn kho:', tongKho)

console.log('--- JSON ---')
const chuoi = JSON.stringify(dsSP[0])
console.log(chuoi)
console.log(JSON.parse(chuoi).name)

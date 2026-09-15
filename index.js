// Bài 1 · Demo 1 — File JS đầu tiên
// Chạy: node index.js

let hoTen = 'Nguyen Van A'
console.log(hoTen)

// Thử thêm vài biến khác rồi chạy lại
const maSV = 'PS12345'
let tuoi = 19
console.log(maSV, tuoi)

// ---------- Demo 2 — Ép kiểu ngầm định (implicit coercion) ----------
// JavaScript tự đổi kiểu khi trộn hai kiểu khác nhau. Nó không báo lỗi, nó cứ đoán.

console.log('--- + với chuỗi: nối ---')
console.log("10" + 5)        // "105"  — có chuỗi => đổi tất cả thành chuỗi rồi nối

console.log('--- - * / : đổi thành số rồi tính ---')
console.log("10" - 5)        // 5
console.log("5" * "2")       // 10

console.log('--- các trường hợp lạ ---')
console.log(true + 1)        // 2      — true thành 1
console.log([] + {})         // "[object Object]"
console.log(5 == "5")        // true   — == đổi kiểu trước khi so sánh

// ---------- Demo 3 — Ép kiểu tường minh (explicit coercion) ----------
// Tự mình đổi kiểu để không phụ thuộc vào "đoán" của JavaScript.

console.log('--- Number / String / Boolean ---')
console.log(Number("20"))     // 20
console.log(String(123))      // "123"
console.log(Boolean(""))      // false — chuỗi rỗng là falsy

console.log('--- dấu + đứng trước cũng đổi thành số ---')
console.log(+"123")           // 123

console.log('--- không đổi được thì ra NaN ---')
console.log(Number("abc"))    // NaN
console.log(Number("10") + 5) // 15 — cách sửa cho bug "10" + 5

// ======================================================
//  Demo 4 — Bốn cách chạy JavaScript
//  Đây là cách 4: chạy file .js bằng Node (chính file này).
// ======================================================
console.log("Xin chào WEB1044")
console.log(2 + 3)
console.log("2" + 3)   // mồi nhử cho phần ép kiểu

// ======================================================
//  Demo 5 — let, const và var
// ======================================================
const diem = 8.5
// diem = 9        // ← bỏ comment dòng này xem lỗi gì
console.log(diem)

let soLan = 0
soLan = soLan + 1  // let thì gán lại được
console.log(soLan)

// var rò rỉ ra ngoài khối {}
if (true) {
  var a = 'var'
  let b = 'let'
}
console.log(a)     // chạy được
// console.log(b)  // ← lỗi: b is not defined

// Đây là lý do var gây lỗi khó tìm trong file dài.

// ======================================================
//  Demo 6 — typeof và hai kết quả gây bất ngờ
// ======================================================
console.log(typeof "PS12345")
console.log(typeof 1000.5)
console.log(typeof true)
console.log(typeof undefined)
console.log(typeof null)        // ← "object" — lỗi lịch sử của JS từ 1995
console.log(typeof [1, 2, 3])   // ← "object" — mảng cũng là object

// Muốn kiểm tra mảng phải dùng Array.isArray()
console.log(Array.isArray([1, 2, 3]))   // true
console.log(Array.isArray('chuỗi'))     // false

// ======================================================
//  Demo 7 — Sáu giá trị falsy
// ======================================================
console.log(Boolean(false))
console.log(Boolean(0))
console.log(Boolean(""))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean(NaN))

// Mọi thứ còn lại đều true — kể cả những cái trông có vẻ rỗng
console.log(Boolean("0"))      // chuỗi "0"
console.log(Boolean([]))       // mảng rỗng
console.log(Boolean({}))       // object rỗng
console.log(Boolean(" "))      // một dấu cách

// Mảng rỗng là true — chỗ này hay làm sai khi kiểm tra "giỏ hàng có trống không".
// Bài 4 sẽ gặp lại: phải dùng gioHang.length === 0.

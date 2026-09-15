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

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

// ---------- Phần còn lại của bài 1 ----------

console.log('--- let / const / var ---')
const diem = 8.5
// diem = 9              // TypeError: Assignment to constant variable
let soLan = 0
soLan = soLan + 1        // let gán lại được
console.log(diem, soLan)

if (true) {
  var a = 'var'          // var rò rỉ ra ngoài khối
  let b = 'let'          // let chỉ sống trong khối {}
}
console.log(a)
// console.log(b)        // ReferenceError: b is not defined

console.log('--- typeof ---')
console.log(typeof "PS12345")     // string
console.log(typeof 1000.5)        // number
console.log(typeof true)          // boolean
console.log(typeof undefined)     // undefined
console.log(typeof null)          // object  ← bug lịch sử của JavaScript
console.log(typeof [1, 2, 3])     // object  ← mảng cũng là object

console.log('--- 6 giá trị falsy ---')
console.log(Boolean(false), Boolean(0), Boolean(""), Boolean(null), Boolean(undefined), Boolean(NaN))
console.log('--- nhìn giống falsy nhưng là truthy ---')
console.log(Boolean("0"), Boolean([]), Boolean({}), Boolean(" "))

console.log('--- == vs === ---')
console.log(5 == "5", 5 === "5")             // true false
console.log(0 == false, 0 === false)         // true false
console.log(null == undefined, null === undefined) // true false

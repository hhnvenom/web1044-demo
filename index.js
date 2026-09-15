// ==========================================================
//  Bài 8 · Demo 2 — JSON.stringify và JSON.parse
//  Slide: "Lưu object bằng JSON" (demo l8-d2)
//  Chạy: node index.js
// ==========================================================

const cart = [
  { ten: 'Cà phê Arabica', gia: 120000, qty: 2 },
  { ten: 'Cà phê xanh',    gia: 180000, qty: 1 }
]

// localStorage CHỈ lưu được chuỗi
const chuoi = JSON.stringify(cart)
console.log(typeof chuoi, chuoi)

const lai = JSON.parse(chuoi)
console.log(typeof lai, lai[0].ten)

// ---- Cái bẫy: lưu thẳng object mà không stringify ----
console.log('--- nếu quên stringify ---')
console.log('' + cart)          // [object Object],[object Object] — mất sạch dữ liệu

// ---- JSON.parse với dữ liệu hỏng thì ném lỗi, luôn bọc try/catch ----
console.log('--- dữ liệu hỏng ---')
try {
  JSON.parse('{ khong phai json }')
} catch (e) {
  console.log('Bắt được lỗi:', e.name)
}

// ---- stringify có tham số làm đẹp ----
console.log(JSON.stringify(cart[0], null, 2))

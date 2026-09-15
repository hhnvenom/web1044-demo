// BÀI 1.3 — Tìm và sửa lỗi ép kiểu (ĐÁP ÁN)

console.log("10" + 5)
// Kết quả: "105" (chuỗi) | Nguyên nhân: + gặp chuỗi nên NỐI thay vì cộng | Cách sửa: Number("10") + 5
//   ← ĐÂY LÀ DÒNG BẤT THƯỜNG DUY NHẤT — người viết muốn cộng số nhưng nhận được chuỗi.

console.log("10" - 5)
// Kết quả: 5 (số) | Nguyên nhân: - chỉ có nghĩa với số nên JS đổi "10" thành 10 | Đúng ý định.

console.log(Number("20"))
// Kết quả: 20 (số) | Ép kiểu tường minh, đúng ý định.

console.log(String(123))
// Kết quả: "123" (chuỗi) | Ép kiểu tường minh, đúng ý định.

console.log(Boolean(""))
// Kết quả: false | Chuỗi rỗng là một trong 6 giá trị falsy | Đúng ý định (nhưng dễ gây khó hiểu).

console.log(+"123")
// Kết quả: 123 (số) | Dấu + đứng trước một toán hạng = Number() | Đúng ý định.

// Code đã sửa cho dòng 1: ép kiểu TRƯỚC khi tính
const a = "10"
const b = 5
console.log(Number(a) + b)   // 15
console.log(+a + b)          // 15 — cách viết ngắn

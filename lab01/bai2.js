// BÀI 1.2 — Xác định kiểu dữ liệu (ĐÁP ÁN)

let salary = 1000.5
var isActive = true
let nothing = null
const notDefined = undefined

console.log(typeof salary)      // number
console.log(typeof isActive)    // boolean
console.log(typeof nothing)     // object   ← bẫy: typeof null là "object" (bug lịch sử của JS)
console.log(typeof notDefined)  // undefined

// Đề xuất khai báo đúng hơn:
// salary:     dùng let nếu lương có thể thay đổi, hợp lý. Nếu không đổi thì const.
// isActive:   KHÔNG dùng var — var rò rỉ phạm vi ra ngoài khối và cho phép khai báo lại.
//             Đổi thành let isActive = true (giá trị có thể bật/tắt).
// nothing:    null là "cố ý để trống" — chấp nhận được, nhưng nên đặt tên rõ nghĩa hơn
//             (ví dụ: let selectedProduct = null).
// notDefined: const gán undefined là vô nghĩa: const không gán lại được nên biến này
//             mãi mãi undefined. Nếu chưa có giá trị thì dùng let và để trống: let notDefined

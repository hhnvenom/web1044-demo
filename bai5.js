// BÀI 3.5 — Viết hàm calculator (ĐÁP ÁN)

function calculator(a, b, phepTinh) {
  switch (phepTinh) {
    case '+':
      return a + b
    case '-':
      return a - b
    case '*':
      return a * b
    case '/':
      if (b === 0) return 'Lỗi: không chia được cho 0'   // chặn TRƯỚC khi chia
      return a / b
    default:
      return 'Phép tính không hỗ trợ: ' + phepTinh
  }
}

console.log(calculator(15.5, 2, '*'))   // 31
console.log(calculator(10, 3, '+'))     // 13
console.log(calculator(10, 0, '/'))     // Lỗi: không chia được cho 0
console.log(calculator(5, 3, '%'))      // Phép tính không hỗ trợ: %

// Nếu không chặn, 10 / 0 ra Infinity và chương trình chạy tiếp với số vô nghĩa.
console.log(10 / 0, 0 / 0, typeof (10 / 0))

// BÀI 3.1 — Viết hàm kiểm tra số chẵn (ĐÁP ÁN)

function isEven(n) {
  return n % 2 === 0        // TRẢ VỀ boolean, không console.log bên trong
}

console.log(isEven(4))      // true
console.log(isEven(7))      // false
console.log(isEven(0))      // true   — 0 là số chẵn
console.log(isEven(-3))     // false  — số âm vẫn đúng công thức

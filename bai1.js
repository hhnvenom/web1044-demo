// BÀI 2.1 — Kiểm tra số chẵn và lẻ (ĐÁP ÁN)

const so = 7

if (so % 2 === 0) {
  console.log(so + ' là số chẵn')
} else {
  console.log(so + ' là số lẻ')
}

// Trường hợp biên: 0 là số chẵn, số âm vẫn đúng công thức
for (let i = -2; i <= 2; i++) {
  console.log(i + (i % 2 === 0 ? ' → chẵn' : ' → lẻ'))
}

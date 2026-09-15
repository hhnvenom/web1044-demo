// LAB 01 — Biến, kiểu dữ liệu và ép kiểu
// Chạy toàn bộ: node index.js   |  Chạy từng bài: node lab01/bai1.js
const bai = ['bai1', 'bai2', 'bai3', 'bai4']
for (const b of bai) {
  console.log(`\n===== ${b.toUpperCase()} =====`)
  require(`./lab01/${b}.js`)
}

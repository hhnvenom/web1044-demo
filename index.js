// ======================================================
//  Bài 0 — Kiểm tra môi trường đã cài đúng chưa
//  Chạy: node index.js
//  Chạy được file này nghĩa là Node.js đã cài xong.
// ======================================================

console.log('Node.js:', process.version)
console.log('Hệ điều hành:', process.platform)
console.log('Thư mục hiện tại:', process.cwd())

const major = Number(process.version.slice(1).split('.')[0])
if (major >= 18) {
  console.log('✓ Phiên bản Node đủ mới cho môn này')
} else {
  console.log('✗ Node quá cũ — hãy cài bản LTS tại https://nodejs.org')
}

console.log('')
console.log('Kiểm tra thêm trong terminal:')
console.log('  node -v     → phiên bản Node')
console.log('  npm -v      → phiên bản npm')
console.log('  code -v     → phiên bản VS Code')
console.log('Ra được ba dòng số là môi trường đã sẵn sàng.')

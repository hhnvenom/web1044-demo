// BÀI 4.6 — Dùng AI sinh dữ liệu giả (ĐÁP ÁN MẪU)
// Đây là dữ liệu AI sinh ra, rút gọn còn 12 phần tử cho dễ đọc.
// Bài nộp của bạn phải có đủ 100.

const sinhVien = [
  { name: 'Nguyễn Văn An', score: 8.2, lop: 'PH12345' },
  { name: 'Trần Thị Bình', score: 7.5, lop: 'PH12345' },
  { name: 'Lê Minh Chi', score: 9.1, lop: 'PH12346' },
  { name: 'Phạm Quốc Dũng', score: 6.0, lop: 'PH12346' },
  { name: 'Hoàng Thu Giang', score: 8.8, lop: 'PH12347' },
  { name: 'Vũ Ngọc Hà', score: 5.5, lop: 'PH12345' },
  { name: 'Đặng Gia Khánh', score: 5.9, lop: 'PH12346' },
  { name: 'Bùi Mỹ Linh', score: 7.0, lop: 'PH12347' },
  { name: 'Đỗ Nhật Minh', score: 9.4, lop: 'PH12345' },
  { name: 'Ngô Bảo Ngọc', score: 6.7, lop: 'PH12346' },
  { name: 'Dương Tấn Phát', score: 7.8, lop: 'PH12347' },
  { name: 'Lý Thanh Quỳnh', score: 4.9, lop: 'PH12345' }
]

// Chạy lại đúng các yêu cầu của LAB 4.3 trên bộ dữ liệu mới
console.log('Số sinh viên:', sinhVien.length)
console.log('Điểm > 8:', sinhVien.filter(s => s.score > 8).map(s => s.name))
console.log('Trung bình:', (sinhVien.reduce((t, s) => t + s.score, 0) / sinhVien.length).toFixed(2))
console.log('Top 3:', [...sinhVien].sort((a, b) => b.score - a.score).slice(0, 3).map(s => s.name))

// Đúng kỹ thuật này dùng để sinh dữ liệu SẢN PHẨM cho Assignment.

// BÀI 1.4 — Bài mở rộng (gợi ý đáp án cho đề mẫu)
// Đề mẫu: nhập giá và số lượng dưới dạng chuỗi (giả lập input từ form), tính thành tiền.

const giaNhap = "25000"      // input từ form luôn là chuỗi
const soLuongNhap = "3"

const gia = Number(giaNhap)
const soLuong = Number(soLuongNhap)

if (Number.isNaN(gia) || Number.isNaN(soLuong)) {
  console.log('Dữ liệu không hợp lệ')
} else {
  console.log(`Thành tiền: ${gia * soLuong} đ`)   // 75000 đ
}

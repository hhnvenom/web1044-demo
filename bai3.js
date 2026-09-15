// BÀI 3.3 — Viết hàm tính lương (ĐÁP ÁN)
// Hai hàm: layHeSo tra bảng, tinhLuong dùng lại nó.

const LUONG_CO_BAN = 5000000
const NGAY_CONG_QUY_DINH = 24

function layHeSo(chucVu) {
  switch (chucVu) {
    case 'intern':  return 1.0
    case 'staff':   return 1.5
    case 'senior':  return 2.0
    case 'manager': return 3.0
    default:        return 0      // chức vụ không hợp lệ
  }
}

function tinhLuong(chucVu, ngayCong) {
  const heSo = layHeSo(chucVu)
  if (heSo === 0) return 'Chức vụ không hợp lệ: ' + chucVu
  return heSo * ngayCong * LUONG_CO_BAN / NGAY_CONG_QUY_DINH
}

console.log(tinhLuong('senior', 22))     // 9166666.666...
console.log(tinhLuong('intern', 24))     // 5000000
console.log(tinhLuong('giam-doc', 24))   // Chức vụ không hợp lệ

// Thêm chức vụ mới chỉ sửa layHeSo, tinhLuong không đụng tới.

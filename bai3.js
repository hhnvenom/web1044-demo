// BÀI 2.3 — Tính lương theo chức vụ và ngày công (ĐÁP ÁN)

const chucVu = 'senior'
const ngayCong = 22
const LUONG_CO_BAN = 5000000
const NGAY_CONG_QUY_DINH = 24

let heSo

switch (chucVu) {
  case 'intern':
    heSo = 1.0
    break
  case 'staff':
    heSo = 1.5
    break
  case 'senior':
    heSo = 2.0
    break
  case 'manager':
    heSo = 3.0
    break
  default:
    heSo = 0
}

if (heSo === 0) {
  console.log('Chức vụ không hợp lệ: ' + chucVu)
} else {
  const luong = heSo * ngayCong * LUONG_CO_BAN / NGAY_CONG_QUY_DINH
  console.log('Lương thực nhận: ' + luong + 'đ')   // 9166666.666...
}

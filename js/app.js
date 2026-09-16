// ======================================================
//  Bài 6 · Demo 1 — window.open: mở cửa sổ mới, căn giữa
// ======================================================

function openStudentInfo() {
  const width = 600
  const height = 400

  // Tính vị trí chính giữa màn hình
  const left = (screen.width - width) / 2
  const top = (screen.height - height) / 2

  const opts =
    `width=${width},height=${height},` +
    `top=${top},left=${left}`

  const w = window.open('', 'StudentInfo', opts)

  w.document.write(`<h1>Thông tin sinh viên</h1>`)
  w.document.close()
}

// ------------------------------------------------------
// Vài đối tượng BOM khác — chỉ đọc, không đổi gì
// ------------------------------------------------------
document.getElementById('thong-tin').innerHTML =
  '<p>screen — màn hình: ' + screen.width + ' x ' + screen.height + '</p>' +
  '<p>location — địa chỉ trang: ' + location.href + '</p>' +
  '<p>navigator — trình duyệt: ' + navigator.userAgent.slice(0, 40) + '...</p>'

// location.href = 'https://fpt.edu.vn' sẽ CHUYỂN TRANG — bỏ comment để thử.
// history.back() quay lại trang trước.

// ======================================================
//  Demo 2 — Chọn phần tử trong trang
// ======================================================
const tieuDe = document.getElementById('tieu-de')
console.log(tieuDe)

// querySelector → phần tử ĐẦU TIÊN khớp
console.log(document.querySelector('.gia'))

// querySelectorAll → TẤT CẢ phần tử khớp
console.log(document.querySelectorAll('.gia'))

tieuDe.textContent = 'Menu hôm nay'

// querySelectorAll trả về DANH SÁCH — phải duyệt mới sửa được từng cái
document.querySelectorAll('.gia').forEach(function (el) {
  el.style.fontWeight = 'bold'
})

// ------------------------------------------------------
//  textContent hay innerHTML
// ------------------------------------------------------
const chuoi = '<b>Cà phê</b> Arabica'

document.getElementById('a').textContent = chuoi
document.getElementById('b').innerHTML   = chuoi

// textContent hiện nguyên văn thẻ <b>. innerHTML chạy nó như HTML.
// Dữ liệu do NGƯỜI DÙNG nhập thì luôn dùng textContent — tránh rủi ro XSS.

// ------------------------------------------------------
//  Đổi style và class
// ------------------------------------------------------
const p1 = document.getElementById('p1')
const p2 = document.getElementById('p2')

p1.style.color = 'red'
p2.classList.add('noi-bat')

// Ưu tiên classList: CSS lo hình thức, JS chỉ bật tắt trạng thái.
// classList có add, remove, toggle và contains.

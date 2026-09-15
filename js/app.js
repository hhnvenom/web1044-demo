// ======================================================
//  Bài 6 · Demo 1 — window.open: mở cửa sổ mới, căn giữa
// ======================================================

function openStudentInfo() {
  const width = 600
  const height = 400

  // Tính vị trí chính giữa màn hình
  const left = (screen.width - width) / 2
  const top = (screen.height - height) / 2

  const w = window.open('', 'StudentInfo',
    `width=${width},height=${height},top=${top},left=${left}`)

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
console.log(document.getElementById('tieu-de'))
console.log(document.querySelector('.gia'))       // phần tử ĐẦU TIÊN
console.log(document.querySelectorAll('.gia'))    // TẤT CẢ

document.getElementById('tieu-de').textContent = 'Menu hôm nay'

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
document.getElementById('p1').style.color = 'red'
document.getElementById('p2').classList.add('noi-bat')

// Ưu tiên classList: CSS lo hình thức, JS chỉ bật tắt trạng thái.
// classList có add, remove, toggle và contains.

// ======================================================
//  Demo 3 — Tạo phần tử mới và gắn vào trang
// ======================================================
const div = document.createElement('div')
div.textContent = 'Cà phê Arabica'
div.classList.add('product')
document.body.appendChild(div)

// Ba dòng đầu chỉ tạo object TRONG BỘ NHỚ.
// Không có appendChild thì không ai nhìn thấy gì — đây là lỗi hay gặp nhất của bài.

// ======================================================
//  Demo 4 — Render mảng products ra giao diện
//  (products nằm ở js/data.js, nạp trước file này)
// ======================================================
const ds = document.getElementById('ds')

ds.innerHTML = products.map(p => `
  <div class="product">
    <h3>${p.name}</h3>
    <p>${p.price.toLocaleString('vi-VN')}đ</p>
  </div>
`).join('')

// map của bài 4 + template string + join('') = ba dòng render cả mảng.
// Thiếu join('') thì mảng tự nối bằng dấu phẩy, giao diện lòi ra dấu ",".
// toLocaleString('vi-VN') đổi 120000 thành 120.000.

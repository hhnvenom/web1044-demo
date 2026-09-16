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

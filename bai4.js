// BÀI 3.4 — Viết hàm chuẩn hoá câu (ĐÁP ÁN)
// Làm đúng bốn bước, không dùng regex (môn này chưa học).

function chuanHoaCau(chuoi) {
  // Bước 1 — xoá khoảng trắng hai đầu
  const b1 = chuoi.trim()

  // Bước 2 — gộp nhiều dấu cách liên tiếp thành một
  let b2 = ''
  let truoc = ' '
  for (let i = 0; i < b1.length; i++) {
    const c = b1[i]
    if (c === ' ' && truoc === ' ') continue
    b2 += c
    truoc = c
  }

  // Bước 3 — dấu câu dính chữ trước, cách chữ sau một dấu cách
  let b3 = ''
  for (let i = 0; i < b2.length; i++) {
    const c = b2[i]
    if (c === '.' || c === '!' || c === '?') {
      while (b3.length > 0 && b3[b3.length - 1] === ' ') b3 = b3.slice(0, -1)
      b3 += c
      if (i < b2.length - 1) b3 += ' '
    } else {
      b3 += c
    }
  }

  // Chèn dấu cách ở bước 3 có thể sinh ra khoảng trắng đôi — gộp lại lần nữa
  let b3b = ''
  truoc = ' '
  for (let i = 0; i < b3.length; i++) {
    const c = b3[i]
    if (c === ' ' && truoc === ' ') continue
    b3b += c
    truoc = c
  }
  b3b = b3b.trim()

  // Bước 4 — viết hoa chữ đầu mỗi câu
  let ketQua = ''
  let dauCau = true
  for (let i = 0; i < b3b.length; i++) {
    const c = b3b[i]
    if (dauCau && c !== ' ') {
      ketQua += c.toUpperCase()
      dauCau = false
    } else {
      ketQua += c
    }
    if (c === '.' || c === '!' || c === '?') dauCau = true
  }

  return ketQua
}

// ------------------------------------------------------------------
// BỘ TEST
const cases = [
  ['  xin chao   cac ban. ', 'Xin chao cac ban.'],
  ['hom nay  troi dep qua   !', 'Hom nay troi dep qua!'],
  ['toi  di hoc ve ? ', 'Toi di hoc ve?'],
  ['', ''],
  ['   ', '']
]

cases.forEach(([vao, mongDoi]) => {
  const ra = chuanHoaCau(vao)
  console.log(ra === mongDoi ? 'ĐẠT' : 'SAI', '|', JSON.stringify(ra))
})

// Chuỗi đầy đủ trong đề bài
console.log(chuanHoaCau('  xin chao   cac ban.   hom nay  troi dep qua   !toi  di hoc ve ? '))

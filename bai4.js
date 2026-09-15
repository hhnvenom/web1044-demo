// BÀI 3.4 — Viết hàm chuẩn hoá câu
// Yêu cầu:
//   1. Viết hoa chữ cái đầu mỗi câu
//   2. Xoá khoảng trắng thừa ở đầu, giữa và cuối chuỗi
//   3. Chuẩn hoá dấu câu: . ! ? dính chữ TRƯỚC, cách chữ SAU một dấu cách
// Tiêu chí: chạy đúng với chuỗi mẫu; xử lý được nhiều dấu cách liên tiếp
//
// Input:  "  xin chao   cac ban.   hom nay  troi dep qua   !toi  di hoc ve ? "
// Output: "Xin chao cac ban. Hom nay troi dep qua! Toi di hoc ve?"
//
// Chia thành bốn bước, in ra kiểm tra sau MỖI bước:
//   1. trim() xoá khoảng trắng hai đầu
//   2. gộp nhiều dấu cách thành một
//   3. chuẩn hoá dấu câu
//   4. viết hoa chữ đầu mỗi câu
// Công cụ: trim() · split(' ') · join(' ') · toUpperCase() · slice(1) · chuoi[0]

// TODO: viết hàm chuanHoaCau của bạn dưới đây


// ------------------------------------------------------------------
// BỘ TEST — chạy `node bai4.js`, mọi dòng phải ra ĐẠT
const cases = [
  ['  xin chao   cac ban. ', 'Xin chao cac ban.'],
  ['hom nay  troi dep qua   !', 'Hom nay troi dep qua!'],
  ['toi  di hoc ve ? ', 'Toi di hoc ve?'],
  ['', ''],
  ['   ', '']
]

if (typeof chuanHoaCau === 'function') {
  cases.forEach(([vao, mongDoi]) => {
    const ra = chuanHoaCau(vao)
    console.log(ra === mongDoi ? 'ĐẠT' : 'SAI', '|', JSON.stringify(ra))
  })
} else {
  console.log('Chưa có hàm chuanHoaCau — viết hàm rồi chạy lại.')
}

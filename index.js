// ======================================================
//  Bài 4 · Demo 1 — Mảng cơ bản: thêm và xoá phần tử
//  Chạy: node index.js
// ======================================================

const list = ['Trứng', 'Thịt', 'Rau']
console.log('Ban đầu:', list)

list.push('Sữa')          // thêm CUỐI
console.log('sau push:', list)

list.unshift('Bánh mì')   // thêm ĐẦU
console.log('sau unshift:', list)

const cuoi = list.pop()   // xoá CUỐI, TRẢ VỀ phần tử vừa xoá
console.log('pop trả về:', cuoi, '→', list)

const dau = list.shift()  // xoá ĐẦU, TRẢ VỀ phần tử vừa xoá
console.log('shift trả về:', dau, '→', list)

// pop và shift TRẢ VỀ phần tử vừa xoá — đây là yêu cầu d của LAB 4.1.
console.log('length:', list.length, '· phần tử cuối:', list[list.length - 1])

// BÀI 4.1 — Thao tác với shoppingList (ĐÁP ÁN)
const shoppingList = ['Trứng', 'Thịt', 'Rau']

shoppingList.push('Sữa')                    // a
shoppingList.unshift('Bánh mì')             // b
shoppingList.pop()                          // c — xoá cuối
const daXoa = shoppingList.shift()          // d — xoá đầu, GIỮ lại giá trị
console.log('Món vừa xoá:', daXoa)          // Bánh mì
console.log('Phần tử cuối:', shoppingList[shoppingList.length - 1])  // Rau
console.log(shoppingList)                   // [ 'Trứng', 'Thịt', 'Rau' ]

// Câu d là chỗ hay sai: shift() TRẢ VỀ phần tử vừa xoá, phải hứng vào biến.

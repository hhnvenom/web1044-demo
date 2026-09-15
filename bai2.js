// BÀI 4.2 — evenNumbers và doubledEvenNumbers (ĐÁP ÁN)
const numbers = [3, 8, 15, 4, 22, 7, 10, 1]

const evenNumbers = numbers.filter(n => n % 2 === 0)
const doubledEvenNumbers = evenNumbers.map(n => n * 2)

console.log('numbers:', numbers)                        // giữ nguyên
console.log('evenNumbers:', evenNumbers)                // [8, 4, 22, 10]
console.log('doubledEvenNumbers:', doubledEvenNumbers)  // [16, 8, 44, 20]

// filter và map đều trả về mảng MỚI nên numbers không đổi.

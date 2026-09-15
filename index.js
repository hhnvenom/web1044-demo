// ======================================================
//  BÀI 5 — OOP CƠ BẢN · demo trên slide
//  Chạy: node index.js
//
//  Mỗi demo bọc trong một khối {} riêng vì nhiều demo dùng lại
//  cùng tên class (Person, Student, Product). class và const
//  không khai báo lại được trong cùng một phạm vi.
// ======================================================

// ------------------------------------------------------
//  Demo 1 — Mảng song song vỡ ra sao  (slide "Code xấu vỡ ra sao")
// ------------------------------------------------------
{
  const ten  = ['An', 'Bình', 'Chi']
  const tuoi = [19, 20, 19]
  const diem = [8.2, 7.5, 9.1]

  // Bình thôi học — xoá khỏi danh sách
  ten.splice(1, 1)
  // ... quên xoá ở hai mảng còn lại

  console.log(ten[1], tuoi[1], diem[1])
  // 'Chi' 20 7.5  ← dữ liệu của ba người khác nhau!

  // Chương trình KHÔNG báo lỗi. Ba mảng phải luôn đồng bộ,
  // nhưng không có gì bắt buộc điều đó.
}

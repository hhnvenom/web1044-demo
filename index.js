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

// ------------------------------------------------------
//  Demo 2 — Function constructor  (slide "Tạo đối tượng bằng hàm tạo")
// ------------------------------------------------------
{
  function Person(n, a) {
    this.name = n
    this.age = a
  }

  const p = new Person('Nam', 30)
  console.log(p.name, p.age)
  console.log(p)

  // Thử bỏ new rồi chạy lại: this trỏ vào global, p là undefined.
}

// ------------------------------------------------------
//  Demo 3 — Từ object literal đến class  (slide "Từ object literal đến class")
// ------------------------------------------------------
{
  // Bước 1 — object literal: viết một lần, dùng một lần
  {
    const person = {
      name: 'Nam',
      age: 30,
      greet() {
        console.log('Chào, tôi là ' + this.name)
      }
    }
    person.greet()
  }

  // Bước 2 và 3 — bọc thành class rồi tạo instance bằng new
  class Person {
    constructor(name, age) {
      this.name = name
      this.age = age
    }
    greet() {
      console.log('Chào, tôi là ' + this.name)
    }
  }

  const person = new Person('Nam', 30)
  person.greet()

  // Bước 4 — một class, tạo bao nhiêu object cũng được
  const a = new Person('An', 19)
  const b = new Person('Bình', 20)

  a.greet()
  b.greet()
}

// ------------------------------------------------------
//  Demo 3b — constructor chạy khi nào  (slide "constructor chạy khi nào")
// ------------------------------------------------------
{
  class Student {
    constructor(name, age) {
      console.log('constructor chạy!')
      this.name = name
      this.age = age
    }
    info() {
      return this.name + ' - ' + this.age + ' tuổi'
    }
  }

  const s1 = new Student('Lan', 20)
  const s2 = new Student('Hùng', 21)
  console.log(s1.info())
  console.log(s2.info())
}

// ------------------------------------------------------
//  Demo 4 — Mỗi instance có dữ liệu riêng  (slide "Mỗi instance có bộ thuộc tính riêng")
// ------------------------------------------------------
{
  class Student {
    constructor(name, score) {
      this.name = name
      this.score = score
    }
  }

  const a = new Student('An', 8.2)
  const b = new Student('Bình', 7.5)

  a.score = 9.0            // chỉ đổi của a
  console.log(a.score, b.score)   // 9  7.5
}

// ------------------------------------------------------
//  Demo 4b — Class Student đầy đủ  (slide "Giải lại bài toán đầu buổi")
//  Bản đầy đủ: có thêm info() và danh sách ds mà slide không đủ chỗ hiện.
// ------------------------------------------------------
{
  class Student {
    constructor(maSV, name, age, score) {
      this.maSV = maSV
      this.name = name
      this.age = age
      this.score = score
    }
    xepLoai() {
      if (this.score >= 8) return 'Giỏi'
      if (this.score >= 6.5) return 'Khá'
      return this.score >= 5 ? 'Trung bình' : 'Yếu'
    }
    capNhatDiem(diemMoi) { this.score = diemMoi }
    info() {
      return this.maSV + ' · ' + this.name + ' · ' + this.score + ' · ' + this.xepLoai()
    }
  }

  const ds = [
    new Student('PS001', 'An', 19, 8.2),
    new Student('PS002', 'Bình', 20, 7.5),
    new Student('PS003', 'Chi', 19, 9.1)
  ]

  const gioi = ds.filter(s => s.xepLoai() === 'Giỏi')
  console.log(gioi.map(s => s.name))      // [ 'An', 'Chi' ]

  // Xoá Bình: xoá cả object, hai người còn lại không hề bị lệch dữ liệu
  ds.splice(1, 1)
  ds.forEach(s => console.log(s.info()))

  // Thi lại: cập nhật điểm qua method, không sửa thẳng thuộc tính
  ds[0].capNhatDiem(9.5)
  console.log(ds[0].info())
}

// BÀI 5.1 — Category bằng function constructor (ĐÁP ÁN)

function Category(id, name) {
  this.id = id
  this.name = name
  this.info = function () {
    return 'Category [ID: ' + this.id +
           ', Name: ' + this.name + ']'
  }
}

let category1 = new Category(1, 'Electronics')
console.log(category1.info())
console.log(category1)

// Viết lại bằng class để so sánh — ngắn hơn và method nằm trên prototype
// nên mọi instance dùng chung một bản, không copy lại cho từng object.
class Category2 {
  constructor(id, name) {
    this.id = id
    this.name = name
  }
  info() {
    return 'Category [ID: ' + this.id +
           ', Name: ' + this.name + ']'
  }
}

const category2 = new Category2(2, 'Books')
console.log(category2.info())

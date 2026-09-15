// ============================================================
//  data.js — DỮ LIỆU SẢN PHẨM       (buổi 4 · LAB 4.6)
// ============================================================
//  Đây là "kho hàng" của website. Mọi thứ khác đọc từ đây.
//
//  YÊU CẦU ASSIGNMENT:
//    - Ít nhất 6 sản phẩm
//    - Chia ít nhất 2 danh mục
//    - Mỗi sản phẩm đủ 7 trường như mẫu bên dưới
//
//  Hai sản phẩm bên dưới chỉ là KHUÔN MẪU.
//  THAY BẰNG 6 SẢN PHẨM CỦA CHỦ ĐỀ BẠN.
//
//  Mẹo: LAB 4.6 dạy dùng AI sinh dữ liệu giả. Prompt gợi ý:
//    "Sinh mảng JavaScript gồm 6 object sản phẩm cho cửa hàng <chủ đề của bạn>,
//     mỗi object có id, name, price (VNĐ), imgUrl, description, category, quantity.
//     Chia làm 2 danh mục. Chỉ trả về code."
// ============================================================

const PRODUCTS = [
  {
    id: 1,
    name: 'Tên sản phẩm 1',
    price: 120000,
    imgUrl: '📦',                 // thay bằng 'img/sp1.jpg' khi đã có ảnh
    description: 'Mô tả ngắn cho sản phẩm 1',
    category: 'Danh mục A',
    quantity: 10
  },
  {
    id: 2,
    name: 'Tên sản phẩm 2',
    price: 95000,
    imgUrl: '📦',
    description: 'Mô tả ngắn cho sản phẩm 2',
    category: 'Danh mục B',
    quantity: 5
  }
  // TODO: thêm ít nhất 4 sản phẩm nữa, đủ 2 danh mục
]

// Danh sách danh mục, tự suy ra từ PRODUCTS — thêm sản phẩm là tự có danh mục mới
const CATEGORIES = [...new Set(PRODUCTS.map(p => p.category))]

// Tìm một sản phẩm theo id. Giỏ hàng chỉ lưu id nên cần hàm này để tra ngược.
function timSanPham(id) {
  return PRODUCTS.find(p => p.id === id)
}

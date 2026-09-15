// ============================================================
//  data.js — DỮ LIỆU SẢN PHẨM   (buổi 4)
//  Chủ đề: NHÀ SÁCH — 6 đầu sách, 2 danh mục
// ============================================================
//  Mỗi sản phẩm đủ 7 trường theo yêu cầu assignment:
//  id · name · price · imgUrl · description · category · quantity
//
//  imgUrl ở đây dùng emoji cho gọn. Trong bài của bạn hãy để ảnh thật
//  trong thư mục img/ rồi đổi thành 'img/sach1.jpg'.
// ============================================================

const PRODUCTS = [
  {
    id: 1,
    name: 'Nhà Giả Kim',
    price: 79000,
    imgUrl: '📕',
    description: 'Hành trình đi tìm kho báu của cậu bé chăn cừu Santiago.',
    category: 'Văn học',
    quantity: 12
  },
  {
    id: 2,
    name: 'Đắc Nhân Tâm',
    price: 96000,
    imgUrl: '📗',
    description: 'Nghệ thuật thu phục lòng người của Dale Carnegie.',
    category: 'Kỹ năng',
    quantity: 8
  },
  {
    id: 3,
    name: 'Tuổi Trẻ Đáng Giá Bao Nhiêu',
    price: 68000,
    imgUrl: '📘',
    description: 'Rosie Nguyễn viết về học, làm và đi trong tuổi trẻ.',
    category: 'Kỹ năng',
    quantity: 15
  },
  {
    id: 4,
    name: 'Dế Mèn Phiêu Lưu Ký',
    price: 52000,
    imgUrl: '📙',
    description: 'Tác phẩm kinh điển của Tô Hoài cho thiếu nhi.',
    category: 'Văn học',
    quantity: 20
  },
  {
    id: 5,
    name: 'Sapiens — Lược Sử Loài Người',
    price: 189000,
    imgUrl: '📓',
    description: 'Yuval Noah Harari kể lại 70.000 năm lịch sử loài người.',
    category: 'Văn học',
    quantity: 4
  },
  {
    id: 6,
    name: 'Atomic Habits',
    price: 145000,
    imgUrl: '📔',
    description: 'Xây thói quen tốt bằng những thay đổi rất nhỏ.',
    category: 'Kỹ năng',
    quantity: 0
  }
]

// Danh mục tự suy ra từ dữ liệu — thêm sách danh mục mới là nút lọc tự hiện
const CATEGORIES = [...new Set(PRODUCTS.map(p => p.category))]

// Giỏ hàng chỉ lưu id, nên cần hàm tra ngược ra sản phẩm
function timSanPham(id) {
  return PRODUCTS.find(p => p.id === id)
}

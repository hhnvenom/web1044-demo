// ============================================================
//  render.js — ĐỔ DỮ LIỆU RA HTML   (buổi 6)
// ============================================================
//  Hàm render chỉ ĐỌC dữ liệu rồi vẽ ra màn hình, không sửa dữ liệu.
//  Muốn đổi gì thì sửa mảng/giỏ trước, rồi gọi lại render.
// ============================================================

function dinhDangTien(so) {
  return so.toLocaleString('vi-VN') + 'đ'
}

// ---------- Danh sách sản phẩm ----------
function renderSanPham(danhSach) {
  const box = document.getElementById('product-list')
  if (!box) return

  if (danhSach.length === 0) {
    box.innerHTML = '<p class="empty">Không có sách nào trong danh mục này.</p>'
    return
  }

  // map ra chuỗi HTML rồi gán MỘT lần — nhanh hơn appendChild từng cái
  box.innerHTML = danhSach.map(function (p) {
    const sp = new Product(p)
    return '' +
      '<article class="card">' +
        '<div class="emoji">' + sp.imgUrl + '</div>' +
        '<span class="tag">' + sp.category + '</span>' +
        '<h3>' + sp.name + '</h3>' +
        '<p class="desc">' + sp.description + '</p>' +
        '<div class="row">' +
          '<span class="price">' + sp.getFormattedPrice() + '</span>' +
          '<span class="stock ' + (sp.isInStock() ? '' : 'out') + '">' + sp.getStockLabel() + '</span>' +
        '</div>' +
        '<button class="btn btn-primary" data-add="' + sp.id + '"' +
          (sp.isInStock() ? '' : ' disabled') + '>' +
          (sp.isInStock() ? 'Thêm vào giỏ' : 'Hết hàng') +
        '</button>' +
      '</article>'
  }).join('')
}

// ---------- Nút lọc danh mục ----------
function renderDanhMuc(dangChon) {
  const box = document.getElementById('filters')
  if (!box) return

  const tatCa = ['all'].concat(CATEGORIES)
  box.innerHTML = tatCa.map(function (c) {
    const nhan = c === 'all' ? 'Tất cả' : c
    const active = c === dangChon ? ' active' : ''
    return '<button class="btn btn-sm' + active + '" data-filter="' + c + '">' + nhan + '</button>'
  }).join('')
}

// ---------- Giỏ hàng ----------
function renderGioHang(cart) {
  const box = document.getElementById('cart-items')
  const tong = document.getElementById('cart-total')

  if (tong) tong.textContent = dinhDangTien(cart.getTotal())
  if (!box) return

  // Giỏ trống phải có thông báo, không để vùng trắng
  if (cart.isEmpty()) {
    box.innerHTML = '<p class="empty">Giỏ hàng đang trống. Chọn một cuốn sách đi!</p>'
    return
  }

  box.innerHTML = cart.items.map(function (dong) {
    const p = timSanPham(dong.id)
    if (!p) return ''
    const sp = new Product(p)
    return '' +
      '<div class="cart-item">' +
        '<div class="emoji">' + sp.imgUrl + '</div>' +
        '<div class="info">' +
          '<div class="name">' + sp.name + '</div>' +
          '<div class="sub">' + sp.getFormattedPrice() + ' × ' + dong.qty +
            ' = <b>' + dinhDangTien(sp.price * dong.qty) + '</b></div>' +
        '</div>' +
        '<div class="qty">' +
          '<button class="btn btn-sm" data-qty="-1" data-id="' + sp.id + '">−</button>' +
          '<span>' + dong.qty + '</span>' +
          '<button class="btn btn-sm" data-qty="1" data-id="' + sp.id + '">+</button>' +
          '<button class="btn btn-sm" data-remove="' + sp.id + '" title="Xoá">🗑</button>' +
        '</div>' +
      '</div>'
  }).join('')
}

// ---------- Số món trên header ----------
function capNhatHeader(cart) {
  const badge = document.getElementById('cart-count')
  if (badge) badge.textContent = cart.getCount()
}

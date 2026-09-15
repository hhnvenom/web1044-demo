// Cách 3 — file JS ngoài, nhúng vào HTML bằng <script src="js/app.js">
console.log('Xin chào từ file js/app.js')
document.body.insertAdjacentHTML('beforeend', '<p>File JS ngoài đã chạy.</p>')

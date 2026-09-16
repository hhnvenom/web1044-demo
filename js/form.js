const email = document.getElementById('email')
const nut = document.getElementById('gui')
const MAU = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function kiemTra() {
  const ok = MAU.test(email.value)

  nut.disabled = !ok
  nut.style.background = ok ? '#16a34a' : '#cbd2dd'
  nut.style.cursor = ok ? 'pointer' : 'not-allowed'
}

email.addEventListener('input', kiemTra)
kiemTra()

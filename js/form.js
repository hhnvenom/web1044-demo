const email = document.getElementById('email')
const nutGui = document.getElementById('gui')

function kiemTra() {
  const hopLe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)

  nutGui.disabled = !hopLe
  nutGui.style.background = hopLe ? '#16a34a' : '#cbd2dd'
  nutGui.style.cursor = hopLe ? 'pointer' : 'not-allowed'
}

email.addEventListener('input', kiemTra)
kiemTra()

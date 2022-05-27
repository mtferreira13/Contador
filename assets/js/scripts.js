let count = 0

const current_Number = document.getElementById('currentNumber')

// Ainda falta acrescentar o disabled do botão //
function increment() {
  count++
  current_Number.innerHTML = count

  if (count >= 0) {
    document.getElementById('currentNumber').style.color = '#ffffff'
  }
}

// Ainda falta acrescentar o disabled do botão //
function decrement() {
  count--
  current_Number.innerHTML = count

  if (count < 0) {
    document.getElementById('currentNumber').style.color = '#FF0000'
  }
}

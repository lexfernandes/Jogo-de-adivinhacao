const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

function handleClick(event) {
  event.preventDefault()
  // vai pegar  um número no input da pagina
  const inputNumber = document.querySelector("#inputNumber")
  // vai comprar se o input é igual o número random na constante lado de fora.
  if (Number(inputNumber.value) == randomNumber) {
    document.querySelector(".screen1").classList.add("hide") // adiciona o hide na div screen1
    document.querySelector(".screen2").classList.remove("hide") // remove o hide na div screen2
    document.querySelector(".screen2 h2").innerText = `Você adivinhou o número em ${xAttempts} tentativas`
  }
  xAttempts++
}

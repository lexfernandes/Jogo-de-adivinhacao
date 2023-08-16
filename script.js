const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// função callback
function handleTryClick(event) {
  event.preventDefault()
  // vai pegar  um número no input da pagina
  const inputNumber = document.querySelector("#inputNumber")
  // vai comparar se o input é igual o número random na constante lado de fora.
  if (Number(inputNumber.value) == randomNumber) {
    document.querySelector(".screen1").classList.add("hide") // adiciona o hide na div screen1
    document.querySelector(".screen2").classList.remove("hide") // remove o hide na div screen2
    document.querySelector(
      ".screen2 h2"
    ).innerText = `Você adivinhou o número em ${xAttempts} tentativas`
  }
  inputNumber.value = ""
  xAttempts++
}
// eventos
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

btnTry.addEventListener("click", handleTryClick)

btnReset.addEventListener("click", function () {
  document.querySelector(".screen1").classList.remove("hide") // adiciona o hide na div screen1
  document.querySelector(".screen2").classList.add("hide") // remove o hide na div screen2
  xAttempts = 1
})

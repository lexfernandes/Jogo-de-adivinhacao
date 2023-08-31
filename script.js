// variaveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
// criação de um número randômico.
const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Eventos
// aguardando usuário clicar em tentar para chamar a função handleTryClick.
btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", handleReset)
document.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    handleReset()
  }
})
// funções Callback
function handleTryClick(event) {
  // não faça o padrão
  event.preventDefault()
  // vai pegar  um número no input da pagina
  const inputNumber = document.querySelector("#inputNumber")
  // vai comparar se o input é igual o número random na constante lado de fora.
  if (Number(inputNumber.value) == randomNumber) {
    // input.value serve para pegar o valor do input.
    screen1.classList.add("hide") // adiciona o hide na div screen1
    screen2.classList.remove("hide") // remove o hide na div screen2
    // adiciona o texto na segunda tela com número de tentativas
    screen2.querySelector(
      "h2"
    ).innerText = `Você adivinhou o número em ${xAttempts} tentativas`
  }
  // esvazia o imput para vazio
  inputNumber.value = ""
  // contador de tentativas para mostrar na segunda tela.
  xAttempts++
}
function handleReset() {
  document.querySelector(".screen1").classList.remove("hide") // adiciona o hide na div screen1
  document.querySelector(".screen2").classList.add("hide") // remove o hide na div screen2
  xAttempts = 1
}

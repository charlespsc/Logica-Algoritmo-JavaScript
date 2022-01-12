function mostraPromocao () {
    // cria referência aos elementos manipulados pelo programa
    var inMedicamento = document.getElementById("inMedicamento")
    var inPreco = document.getElementById("inPreco")
    var outMedicamento = document.getElementById("outMedicamento")
    var outPreco = document.getElementById("outPreco")

    // obtém conteúdo dos campos de entrada
    var medicamento = inMedicamento.value
    var preco = Number(inPreco.value)

    // calcula valor da entrada e das parcelas
    var desconto = Math.round(preco) * 2

    // altera o conteúdo dos parágrafos de resposta
    outMedicamento.textContent = "Promoção de " + medicamento
    outPreco.textContent = "Leve 2 por apenas R$: " + desconto.toFixed(2)
}
// cria uma referência ao elemento btVerPromocao (botão)
var btPromocao = document.getElementById("btPromocao")
// registra um evento associado ao botão, para carregar uma função
btPromocao.addEventListener("click", mostraPromocao)
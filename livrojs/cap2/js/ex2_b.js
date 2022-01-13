function calcularValor() {
    // cria referência aos elementos da página
    var inValor = document.getElementById("inValor")
    var inTempo = document.getElementById("inTempo")
    var outPreco = document.getElementById("outPreco")

    // obtém conteúdo dos campos de entrada
    var valor = Number(inValor.value)
    var tempo = Number(inTempo.value)

    // Calcula valor a ser pago por 15 min
    var preco = Math.ceil(tempo / 15) * valor
    // altera o conteúdo da linha de resposta
    outPreco.textContent = "Valor a pagar R$: " + preco.toFixed(2)
}
// cria referência ao elemento btCalcular 
var btCalcular = document.getElementById("btCalcular")
// registra um evento associado ao botão, para carregar a função
btCalcular.addEventListener("click", calcularValor)
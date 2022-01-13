function verPromocao() {
    // cria referência aos elementos manipulados pelo programa
    var inProduto = document.getElementById("inProduto")
    var inPreco = document.getElementById("inPreco")
    var outPromocao = document.getElementById("outPromocao")
    var outPrecoTerceiro = document.getElementById("outPrecoTerceiro")

    // obtém conteúdo dos campos de entrada
    var produto = inProduto.value
    var preco = Number(inPreco.value)

    /* Para aumentar suas vendas no setor de higiene, 
    cada etiqueta de produto deve exibir uma mensagem anunciando 50% de desconto
    (para um item) na compra de três unidades do produto.*/
    // Calculos
    var terceiro =  preco / 2 // igual a 50%
    var total =  (preco * 2) + terceiro  

    // altera o conteúdo dos parágrafos de resposta
    outPromocao.textContent = produto + " - Promoção: Leve 3 por R$: " + total.toFixed(2)
    outPrecoTerceiro.textContent = "Leve 2 por apenas R$: " + terceiro.toFixed(2)
}
// cria uma referência ao elemento btPromocao (botão)
var btPromocao = document.getElementById("btPromocao")
// registra um evento associado ao botão, para carregar uma função
btPromocao.addEventListener("click", verPromocao)
function calculoParImpar() {
    // cria uma referência aos elementos da página
    var inNumero = document.getElementById("inNumero")
    var outResposta = document.getElementById("outResposta")

    var numero = Number(inNumero.value)      // obtém conteúdo do campo inNumero

    // se não preencheu ou Not-a-Number (NaN)
    if (numero == 0 || isNaN(numero)) {
        alert("Informe um número válido...") // exibe alerta
        inNumero.focus()                     // posiciona no campo inNumero
        return                               // retorna
    }
       
    // se resto da divisão do número por 2 for igual a 0 
    if (numero % 2 == 0) {
        outResposta.textContent = "Resposta: " + numero + " é Par." 
    } else {
        outResposta.textContent = "Resposta: " + numero + " é Ímpar."
    }
}
// cria referência ao elemento btVerificar e carregar function
var btVerificar = document.getElementById("btVerificar")
btVerificar.addEventListener("click", calculoParImpar)
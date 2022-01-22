function Parquimetro() {
    // Cria referências aos elementos da página
    var inValor = document.getElementById("inValor")
    var outTempo = document.getElementById("outTempo")
    var outTroco = document.getElementById("outTroco")

    //Obtém os conteúdos dos campos de edição da página
    var valor = Number(inValor.value)

    // se não preencheu ou Not-a-Number (NaN)
    if (inValor == "" || isNaN(valor)) {
        alert("Informe um valor válido de moedas") // exibe alerta
        inValor.focus()
        return
    }

    // caso valor insuficiente
    if (valor < 1.00) {
        alert("Valor Insuficiente (no mínimo, R$ 1.00)");
        inValor.focus();
        return;
    }

    // Variáveis: 
    var tempo
    var troco

    // Criar condições 
    if (valor >= 3.00) {
        tempo = 120
        troco = valor - 3.00
    } else if (valor >= 1.75) {
        tempo = 60
        troco = valor - 1.75
    } else {
        tempo = 30
        troco = valor - 1.00
    }
    
    // Respostas
    outTempo.textContent = "Tempo: " + tempo + " min"
    if (troco > 0) {
        outTroco.textContent = "Troco R$: " + troco.toFixed(2)
    }  
}
// Cria uma referência ao elemento btVerificar (botão)
var btConfirmar = document.getElementById("btConfirmar")
// Registra um evento associado ao botão, para carregar uma função
btConfirmar.addEventListener("click", Parquimetro)
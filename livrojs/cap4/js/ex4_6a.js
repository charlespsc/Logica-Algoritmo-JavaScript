function verificarPrimo() {
    // cria referência aos elementos da página
    var inNumero = document.getElementById("inNumero")
    var outResposta = document.getElementById("outResposta")

    var num = Number(inNumero.value)    // obtém o número informado

    // verifica se preencheu corretamente o campo inNumero
    if (num == 0 || isNaN(num)) {
        alert("Número Inválido...")
        inNumero.focus()
        return
    }

    var numDivisores = 0    // declara e inicializa contador

    // percorre todos os possíveis divisores do número
    for (var i = 1; i <= num; i++) {
        // verifica se i (1, 2, 3 ...) é divisor do num
        if (num % i == 0) {
            numDivisores++  // se é, incrementa contador
        }
    }

    // se possível apenas 2 divisores, é primo
    if (numDivisores == 2) {
        outResposta.textContent = num + " É primo"
    } else {
        outResposta.textContent = num + " Não é primo"
    }

    // declara e inicializa a variável tipo flag
    var temDivisor = 0

    // percorre os possíveis divisores do num
    for (var i = 2; i <= num / 2; i++) {
        if (num % i == 0){
            temDivisor = 1 // muda o flag
            break // sai da repetição
        }
    }

    // se num > 1 e não possui divisor
    if (num > 1 && !temDivisor){
        outResposta.textContent = num + " É primo"
    } else {
        outResposta.textContent = num + " Não é primo"
    }
}
// referencia elemento e após associa function ao evento click
var btVerificarPrimo = document.getElementById("btVerificarPrimo")
btVerificarPrimo.addEventListener("click", verificarPrimo)
function calculaVelocidade() {
    // Cria referências aos elementos da página
    var inVelPermitida = document.getElementById("inVelPermitida")
    var inVelCondutor = document.getElementById("inVelCondutor")
    var outSituacao = document.getElementById("outSituacao")

    //Obtém os conteúdos dos campos de edição da página
    var VelPermitida = Number(inVelPermitida.value)
    var VelCondutor = Number(inVelCondutor.value)
    var maisVinte = VelPermitida * 1.20

    // Cria as condições:
    // se não preencheu ou Not-a-Number (NaN)
    if (inVelPermitida.value == "" || isNaN(VelPermitida) || inVelCondutor.value == "" || isNaN(VelCondutor)) {
        alert("Informe as velocidades corretamente...") // exibe alerta
        inVelPermitida.focus()   
        return                
    }
    if (VelCondutor <= VelPermitida) {
        outSituacao.textContent = "Situação: Sem Multa!"
        outSituacao.style.color = "blue"
    } else {
        if (VelCondutor <= maisVinte) {
            outSituacao.textContent = "Situação: Multa Leve!"
            outSituacao.style.color = "orange"
        } else {
            outSituacao.textContent = "Situação: Multa Grave!"
            outSituacao.style.color = "red"
        }
    }
}
// Cria uma referência ao elemento btVerificar (botão)
var btVerificar = document.getElementById("btVerificar")
// Registra um evento associado ao botão, para carregar uma função
btVerificar.addEventListener("click", calculaVelocidade)
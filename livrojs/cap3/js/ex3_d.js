function Triangulos() {
    // Cria referências aos elementos da página
    var inLadoA = document.getElementById("inLadoA")
    var inLadoB = document.getElementById("inLadoB")
    var inLadoC = document.getElementById("inLadoC")
    var outTriangulo = document.getElementById("outTriangulo")
    var outTipo = document.getElementById("outTipo")

    //Obtém os conteúdos dos campos de edição da página
    var ladoA = Number(inLadoA.value)
    var ladoB = Number(inLadoB.value)
    var ladoC = Number(inLadoC.value)

  // valida os dados de entrada
  if (ladoA == 0 || ladoB == 0 || ladoC == 0 || isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC)) {
    alert("Informe lados válidos para o triângulo!")
    inLadoA.focus()
    return
  }
// cria as condições para exibir a resposta
if (ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB) {
    outTriangulo.textContent = "Lados não podem formar um triângulo"
  } else {
    outTriangulo.textContent = "Lados podem formar um triângulo"
    if (ladoA == ladoB && ladoA == ladoC) {
      outTipo.textContent = "Tipo: Equilátero"
    } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
      outTipo.textContent = "Tipo: Isósceles"    
    } else {
      outTipo.textContent = "Tipo: Escaleno"          
    }
  }
}
var btVerificaLados = document.getElementById("btVerificaLados");
btVerificaLados.addEventListener("click", Triangulos);
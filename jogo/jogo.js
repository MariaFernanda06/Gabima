var Todasperguntas = []
Todasperguntas = JSON.parse(localStorage.getItem('bdPerguntas'))
if (Todasperguntas == null) {
    Todasperguntas = []
}
var listaSort = []

var respCerta = 0
var i
var Pontuacao = 0

function CarregarJogo() {

    
    if (listaSort.length == Todasperguntas.length) {
        document.getElementById('pagFinal').style.display = "flex"
        document.getElementById('pontoFinal').innerHTML = `Seu número de pontos foi: ${Pontuacao}`
        Mostrar()
        return
    }

    do {
        i = parseInt(Math.random() * Todasperguntas.length)
    } while (listaSort.indexOf(i) != -1)
    listaSort.push(i)


    document.getElementById("resultadopergunta").innerHTML = Todasperguntas[i].pergunta
    document.getElementById("img").src = Todasperguntas[i].link
    document.getElementById("btnR1").innerHTML = Todasperguntas[i].R1
    document.getElementById("btnR2").innerHTML = Todasperguntas[i].R2
    document.getElementById("btnR3").innerHTML = Todasperguntas[i].R3
    document.getElementById("btnR4").innerHTML = Todasperguntas[i].R4

}
const escondersection = document.getElementById('pagFinal')
const esconderH1 = document.getElementById('idH1')
const esconderP = document.getElementById('pontoFinal')

function Mostrar() {
    escondersection.classList.add('pagFinal')
    escondersection.classList.remove('hide')
    esconderH1.classList.remove('hide')
    esconderP.classList.remove('hide')
}

CarregarJogo()

function responder(valor) {
    if (valor == Todasperguntas[i].opc) {
        alert('Parabéns você acertou')
        Pontuacao++
        document.getElementById('score').innerHTML = `Score: ${Pontuacao}`
        CarregarJogo()
    } else {
        alert('Que pena, você errou !')
        CarregarJogo()
    }
}
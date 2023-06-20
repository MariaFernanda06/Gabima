var Todasperguntas = []
//localStorage.setItem('bdPerguntas', JSON.stringify(Todasperguntas))
Todasperguntas = JSON.parse(localStorage.getItem('bdPerguntas'))
if (Todasperguntas == null) {
    Todasperguntas = []
}

function CadastrarQuiz() {
    var pergunta = document.getElementById('pergunta').value
    var link = document.getElementById('link').value
    var R1 = document.getElementById('R1').value
    var R2 = document.getElementById('R2').value
    var R3 = document.getElementById('R3').value
    var R4 = document.getElementById('R4').value
    var opc = document.getElementById('opc').value

    var Perguntasquiz = {
        pergunta: pergunta,
        link: link,
        R1: R1,
        R2: R2,
        R3: R3,
        R4: R4,
        opc: opc,
        sorteada: 0
    }

    if (confirm('Você deseja cadastrar essa pergunta ?')) {
        Todasperguntas.push(Perguntasquiz)
        localStorage.setItem('bdPerguntas', JSON.stringify(Todasperguntas))
    }

    document.getElementById('pergunta').value = ''
    document.getElementById('link').value = ''
    document.getElementById('R1').value = ''
    document.getElementById('R2').value = ''
    document.getElementById('R3').value = ''
    document.getElementById('R4').value = ''
    document.getElementById('opc').value = ''

}



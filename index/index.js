function Jogador(){
    localStorage.setItem('player',  document.getElementById('nameUser').value)

    location.href = '../jogo/jogo.html'
}
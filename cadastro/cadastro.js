var listaUsuarios = []

listaUsuarios = JSON.parse(localStorage.getItem('bdUsuariosquiz'))
if (listaUsuarios == null) {
    listaUsuarios = []
}

console.log(listaUsuarios)

function validarCadastro(login, senha, confirmarSenha) {
    if (senha != confirmarSenha) {
        alert('Verifique suas senhas pois estão diferentes')
        return false
    }

    if (login != '' && senha != '' && confirmarSenha != '') {
        return true
    } else {
        return false
    }
}

function botaoCadastrar() {
    var login = document.getElementById("login").value
    var senha = document.getElementById("senha").value
    var confirmarSenha = document.getElementById("confirmarSenha").value

    var possoCadastrar = validarCadastro(login, senha, confirmarSenha)
    if (possoCadastrar == false) {
        alert('Verifique os dados antes de cadastrar')
        return
    }

    var usuario = {
        login: login,
        senha: senha
    }
    listaUsuarios.push(usuario)

    localStorage.setItem('bdUsuariosquiz', JSON.stringify(listaUsuarios))

    document.getElementById("login").value = ''
    document.getElementById("senha").value = ''
    document.getElementById("confirmarSenha").value = ''
    document.getElementById("login").focus()

    alert('Usuário cadastrado com sucesso. Faça o login.')

    location.href = '/login/login.html'
}
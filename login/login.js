var listaUsuarios = []

listaUsuarios = JSON.parse(localStorage.getItem('bdUsuariosquiz'))
if (listaUsuarios == null) {
    listaUsuarios = []
}

console.log(listaUsuarios);

function botaoEntrar() {
    var login = document.getElementById("login").value
    var senha = document.getElementById("senha").value

    if (validarUsuario(login, senha)) {
        alert('Bem vindo ao sistema')
        location.href = '../cadastro de perguntas/perguntas.html'
    } else {
        alert('VERIFIQUE SEU USUÁRIO E SENHA OU SE CADASTRE')
    }
}

function validarUsuario(login, senha) {
    var encontrado = false

    listaUsuarios.forEach(item => {
        console.log(encontrado);

        if (item.login == login && item.senha == senha) {
            encontrado = true
        }
    })


    return encontrado
}

function botaoCadastrar() {
    location.href = '../cadastro/cadastro.html'
}

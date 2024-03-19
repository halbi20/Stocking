const inputUsuario = document.getElementById('usuario')
const inputSenha = document.getElementById('senha')
const botaoLogin = document.getElementById('botaologin')
const ContainerMensagemLogin = document.getElementById('cabecalhoCartaoLogin')
const MensagemLogin = document.getElementById('MensagemLogin')

botaoLogin.addEventListener('click', login)

function login() {
    const usuario = inputUsuario.value;
    const senha = inputSenha.value;

    if(usuario && senha){
        axios.post('/login', {Login: usuario, Password: senha})
        .then(
            result => {
               console.log('LOGIN SUCEDIDO');
               ContainerMensagemLogin.style.background = 'green';
               MensagemLogin.innerText = 'Login Bem Sucedido'
               const userId = result.data.possivelUsuario.Id
               console.log(userId);
               vaiPraTelaInicial(userId)

                localStorage.setItem('idUsuario',userId)
            }
        )
        .catch(
            error => {
                console.log('Login Falhou');
                ContainerMensagemLogin.style.background = 'red';
                MensagemLogin.innerText = 'Login Falhou'
            }
        )
    }
}

function vaiPraTelaInicial(idUsuario){
    window.open('/telaInicial/' + idUsuario)
    window.close()
    
}





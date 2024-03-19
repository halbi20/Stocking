const inputUsuario = document.getElementById('usuario');
const inputSenha = document.getElementById('senha');
const botaoCadastrar = document.getElementById('botaoCadastro');
const ContainerMensagemCadastro = document.getElementById('cabecalhoCartaoCadastro');
const MensagemCadastro = document.getElementById('MensagemCadastro')

botaoCadastrar.addEventListener('click', cadastrar)

function cadastrar(){
    const usuario = inputUsuario.value
    const senha = inputSenha.value


    if(!inputUsuario.value){
        console.log("Usuario vazio");
        ContainerMensagemCadastro.style.background = 'red';
        MensagemCadastro.innerText = "Cadastro Falhou: Usuario Vazio"
        return
    }
    if(!inputSenha.value){
        console.log("Senha Vazia");
        ContainerMensagemCadastro.style.background = 'red';
        MensagemCadastro.innerText = "Cadastro Falhou: Senha Vazio"
        return
    }

    axios.post('/cadastro-usuario', {Login: usuario, Password: senha})
    .then(
        result => {
            ContainerMensagemCadastro.style.background = 'green';
            MensagemCadastro.innerText = "Cadastro Bem Sucedido"
            console.log("Usuario cadastrado com sucesso");
        }
    )
    .catch(
        error => {
            ContainerMensagemCadastro.style.background = 'red';
            MensagemCadastro.innerText = "Cadastro Falhou"
            console.log("Cadastro Falhou");
        }
    )
}

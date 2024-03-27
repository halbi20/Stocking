const inputNome = document.getElementById('nome')
const inputPrecoDeCusto = document.getElementById('precoDeCusto')
const inputPrecoDeVenda = document.getElementById('precoDeVenda')
const inputEstoque = document.getElementById('estoque')
const inputCodigoDeBarras = document.getElementById('codigoDeBarras')
const buttonSalvar = document.getElementById('btnSalvar')
const buttonCancelar = document.getElementById('btnCancelar')
const userId = localStorage.getItem('idUsuario')

// Salvando Produto

buttonSalvar.addEventListener('click', salvarProduto)

function salvarProduto(){
    const nome = inputNome.value
    const precoDeCusto = inputPrecoDeCusto.value
    const precoDeVenda = inputPrecoDeVenda.value
    const estoque = inputEstoque.value
    const codigoDeBarras = inputCodigoDeBarras.value

    axios.post('/cadastro-produtos', {Nome: nome, PrecoDeCusto: precoDeCusto, PrecoDeVenda: precoDeVenda, Estoque: estoque, UsuarioId: userId, CodigoDeBarras: codigoDeBarras})
    .then(
        result => {
            console.log("Produto Cadastrado com sucesso");
            window.open('/telaInicial/' + userId)
            window.close()
        }
    )
    .catch(
        error => {
            console.log("Falhou");
            console.log(error);
        }
    )
}

// Voltar pag Inicial

buttonCancelar.addEventListener('click', voltarPagInicial)

function voltarPagInicial(){
    window.open('/telaInicial/' + userId)
    window.close()
}
const inputNome = document.getElementById('nome')
const inputPrecoDeCusto = document.getElementById('precoDeCusto')
const inputPrecoDeVenda = document.getElementById('precoDeVenda')
const inputEstoque = document.getElementById('estoque')
const buttonSalvar = document.getElementById('btnSalvar')
const buttonCancelar = document.getElementById('btnCancelar')
const userId = localStorage.getItem('idUsuario')

let idDoProduto = null

window.onload = () =>{
    const urlDoNavegador = window.location.href;
    const idDoProdutoVindoDaUrl = urlDoNavegador.split('EditProduto/')[1]

    if (idDoProdutoVindoDaUrl){
        idDoProduto = idDoProdutoVindoDaUrl
        axios.get('/consultar-produto-peloid/' +  idDoProduto)
        .then(
            result => {
                const produtoRes = result.data
                inputNome.value = produtoRes.Nome
                inputPrecoDeCusto.value = produtoRes.PrecoDeCusto
                inputPrecoDeVenda.value = produtoRes.PrecoDeVenda
                inputEstoque.value = produtoRes.Estoque
            }
        )
        .catch (
            error =>{
                console.log(error);
            }
        )
    }
}


// Salvando Produto

buttonSalvar.addEventListener('click', salvarProduto)

function salvarProduto(){
    const nome = inputNome.value
    const precoDeCusto = inputPrecoDeCusto.value
    const precoDeVenda = inputPrecoDeVenda.value
    const estoque = inputEstoque.value
    const urlDoNavegador = window.location.href;
    const idDoProdutoVindoDaUrl = urlDoNavegador.split('EditProduto/')[1]

    axios.put('/atualizar', {Id: idDoProdutoVindoDaUrl, Nome: nome, PrecoDeCusto: precoDeCusto, PrecoDeVenda: precoDeVenda, Estoque: estoque, UsuarioId: userId})
    .then(
        result => {
            console.log("Produto Editado com sucesso");
            window.open('/telaInicial/' + userId)
            window.close()
        }
    )
    .catch(
        error => {
            console.log("Falhou");
        }
    )
}

// Voltar pag Inicial

buttonCancelar.addEventListener('click', voltarPagInicial)

function voltarPagInicial(){
    window.open('/telaInicial/' + userId)
    window.close()
}
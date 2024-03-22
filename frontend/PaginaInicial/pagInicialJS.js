// Deslogar
const btnDeslogar = document.getElementById('btnDeslogar')

btnDeslogar.addEventListener('click', Deslogar)

function Deslogar(){
    window.open('http://localhost:4000')
    window.close()
}
// BOTÃO NOVO PRODUTO

const btnNovoProduto = document.getElementById('newProduct')

btnNovoProduto.addEventListener('click', AbrirPagCadastroProduto)

function AbrirPagCadastroProduto(){
    window.open('../PagCadastroProduto/CadastroProduto.html')
    window.close()
}

// LISTAGEM PRODUTOS

const listaProdutos = document.getElementById('listaProdutos')



window.onload = () =>{
    const urlDoNavegador = window.location.href;
    const idDoUsuarioVindoDaURL = urlDoNavegador.split('telaInicial/')[1]

    carregar(idDoUsuarioVindoDaURL)
}

function carregar(idUsuario) {
    axios.get('/consultar-produtos-usuario/' + idUsuario)
    .then(result => {
        this.produtos = result.data
        this.produtos.forEach(produto =>{
            criarListagem(produto)
        })

    })
    .catch(error =>{
        console.log(error);
    })
}

function criarListagem(produto) {
    const linha = document.createElement('li')
    listaProdutos.appendChild(linha)
    const cardProduto = document.createElement('div')
    cardProduto.className = 'cardProduto' 
    linha.appendChild(cardProduto)
    const nomeProduto = document.createElement('span')
    const precoDeCustoProduto = document.createElement('span')
    const precoDeVendaProduto = document.createElement('span')
    const estoqueProduto = document.createElement('span')


    const btnEditar = document.createElement('button')
    btnEditar.innerHTML = "Editar"
    const idProduto = produto.Id
    btnEditar.addEventListener('click', function(){
        irPraTelaEditar(idProduto)
        
    })

    const produtoNome = produto.Nome
    const divConteinerBtnExcluir = document.createElement('div')
    divConteinerBtnExcluir.className = "conteinerBtnExcluir"
    const btnExcluir = document.createElement('i')
    btnExcluir.className = "gg-trash"
    btnExcluir.addEventListener('click', function(){
        areYouSureBoutThat(produtoNome, idProduto)
    })
    divConteinerBtnExcluir.appendChild(btnExcluir)



    cardProduto.appendChild(nomeProduto)
    cardProduto.appendChild(precoDeCustoProduto)
    cardProduto.appendChild(precoDeVendaProduto)
    cardProduto.appendChild(estoqueProduto)
    cardProduto.appendChild(btnEditar)
    cardProduto.appendChild(divConteinerBtnExcluir)



    nomeProduto.innerText = produtoNome
    precoDeCustoProduto.innerHTML = ("R$" + produto.PrecoDeCusto)
    precoDeVendaProduto.innerHTML = ("R$" + produto.PrecoDeVenda)
    estoqueProduto.innerHTML = produto.Estoque
}


function irPraTelaEditar(idDoProduto){
    window.open('http://localhost:4000/edit-produto/' + idDoProduto)
    window.close()
}

function areYouSureBoutThat(nomeProduto, idDoProduto){
    var confirmar = confirm("tem certeza que deseja deletar o produto: " + nomeProduto + "?")
    if(confirmar){
        deletarProduto(idDoProduto)
        console.log("Produto deletado com sucesso");
    }
    else{
        console.log("Produto não deletado");
    }
}

function deletarProduto(idDoProduto){
    axios.delete('/delete-produto/' + idDoProduto)
    .then(() =>{
        location.reload()})
    .catch((error) => {console.log(error)})
}
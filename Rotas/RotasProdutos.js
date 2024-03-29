const controllers = require('../Controllers/ControllersProdutos')
const express = require('express')


class RotasProdutos {
    static inicializarRotasProdutos(app){
        app.post('/cadastro-produtos', express.urlencoded({extended:false}),controllers.CadastroProduto)
        app.get('/consultar-produtos', express.urlencoded({extended:false}),controllers.ConsultarTodosOsProdutos)
        app.get('/consultar-produto-peloid/:id', express.urlencoded({extended: false}), controllers.ConsultarProdutosPeloId)
        app.get('/consultar-produtos-usuario/:usuarioId', express.urlencoded({extended:false}), controllers.ConsultarProdutosDoUsuario)
        app.get('/consultar-produtos-usuario-por-nomecodigo/:usuarioId/:nomeCodigo', express.urlencoded({extended:false}), controllers.ConsultarProdutosPeloNomeCodigo)
        app.put('/atualizar', express.urlencoded({extended: false}), controllers.AtualizarProduto)
        app.get('/edit-produto/:id', express.urlencoded({extended:false}), controllers.telaEdicao)
        app.delete('/delete-produto/:id', express.urlencoded({extended:false}), controllers.deletarProdutos)
    }
}

module.exports = RotasProdutos
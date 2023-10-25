const controllers = require('../Controllers/ControllersProdutos')
const express = require('express')

class RotasProdutos {
    static inicializarRotasProdutos(app){
        app.post('/cadastro-produtos', express.urlencoded({extended:false}),controllers.CadastroProduto)
        app.get('/consultar-produtos', express.urlencoded({extended:false}),controllers.ConsultarTodosOsProdutos)
        app.get('/consultar-produtos-usuario/:usuarioId', express.urlencoded({extended:false}), controllers.ConsultarProdutosDoUsuario)
        app.put('/atualizar', express.urlencoded({extended: false}), controllers.AtualizarProduto)
    }
}

module.exports = RotasProdutos
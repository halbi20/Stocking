const controllers = require('../Controllers/ControllersUsuarios')
const express = require('express')

class RotasUsuarios {   
    static inicializarRotasUsuarios(app) {
        app.post('/login',express.urlencoded({extended: false}), controllers.login)
        app.post('/cadastro-usuario', express.urlencoded({extended: false}), controllers.cadastroUsuario)
        app.get('/obtem-usuarios', express.urlencoded({extended: false}), controllers.obtemTodosOsUsuarios)
    }
}

module.exports = RotasUsuarios






const RotasProdutos = require('./RotasProdutos');
const RotasUsuarios = require('./RotasUsuarios')

class Rotas {
    static inicializarRotas(app){
        RotasUsuarios.inicializarRotasUsuarios(app);
        RotasProdutos.inicializarRotasProdutos(app);
    }
}

module.exports = Rotas
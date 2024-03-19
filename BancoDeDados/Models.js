const { Sequelize } = require('sequelize');
const {sequelize} = require('./conectBD')

const Usuarios = sequelize.define('Usuarios', {
    Id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Login: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    Password: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

const Produtos = sequelize.define('Produtos', {
    Id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    PrecoDeCusto: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    PrecoDeVenda: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    UsuarioId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'Usuarios',
            key: 'Id'
        }
    },
    Estoque: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
    }
})

async function gerarModelUsuarios(){
    await Usuarios.sync();
}

async function gerarModelProdutos(){
    await Produtos.sync();
}

sequelize.sync();

gerarModelUsuarios();
gerarModelProdutos();

Usuarios.hasMany(Produtos, {foreignKey:'UsuarioId'});
Produtos.belongsTo(Usuarios, {foreignKey:'UsuarioId'});

module.exports = {Usuarios, Produtos}
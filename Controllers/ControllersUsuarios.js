const {Usuarios} = require('../BancoDeDados/Models')

class ControllersUSuarios {
    login = async (req, res) => {
        const login = req.body;

        const possivelUsuario = await Usuarios.findOne(
            {
                where: {
                    Login: login.Login,
                    Password: login.Password
                }
            }
        );
        if (!possivelUsuario || possivelUsuario.length < 1) {
            return res.status(401).json({message: 'ACESSO INVÁLIDO. POR FAVOR, INFORME CORRETAMENTE SUAS CREDENCIAIS'})
        }
        return res.status(200).json({possivelUsuario})
    }
    cadastroUsuario = async (requisicao, resposta) => {
        const usuarioSalvo = await Usuarios.create(requisicao.body) 
        return resposta.status(200).json({usuarioSalvo})
    }
    
    obtemTodosOsUsuarios = async (requisicao, resposta) => {
        return resposta.status(200).json(await Usuarios.findAll())
    }
    paginaInicial = (req,res) => {
        res.set('Content-Type', 'text/html')
        res.sendFile('C:/Users/Heitor/Desktop/Projeto/frontend/PaginaInicial/pagInicial.html')
    }
}

module.exports = new ControllersUSuarios


// PRA EXCLUIR
// Usuarios.destroy({
//     where: {
//     id: 1
//     }
//     }).then(numeroRegistrosExcluidos => console.log('foram excluidos' + numeroRegistrosExcluidos + ' registros')
//      .catch(error => console.log(error))
const {Produtos, Usuarios} = require('../BancoDeDados/Models')
const RotasProdutos = require('../Rotas/RotasProdutos')

class ControllersProdutos {
    CadastroProduto = async (req, res) => {
        const Produto = req.body;

        if(!Produto.Nome) {
            return res.status(400).json({message: 'O PRODUTO DEVE TER UM NOME'})
        }

        return res.status(200).json(await Produtos.create(Produto));
    }

    ConsultarTodosOsProdutos = async (req, res) => {
        let ProdutosConsultados = []

        try {
            ProdutosConsultados = await Produtos.findAll({
                include: [Usuarios]
            })
        } catch (error) {
            console.log(error);
        }
        return res.status(200).json(ProdutosConsultados);
    }

    ConsultarProdutosDoUsuario = async (req,res) =>{
        let ProdutosConsultados = []

        try {
            const usuarioId = req.params.usuarioId;

            ProdutosConsultados = await Produtos.findAll({
                include: [{
                    model: Usuarios,
                    where: {Id: usuarioId}
                }]
            })
        } catch (error) {
            console.log(error);
        }

        return res.status(200).json(ProdutosConsultados);
    }

    AtualizarProduto = async (req,res) =>{
        const Produto = req.body

        if(!Produto.Id) {
            return res.status(400).json({message: 'O ID DO PRODUTO É OBRIGATORIO'})
        }

        const ProdutoModel = await Produtos.findByPk(Produto.Id)

        if(!ProdutoModel){
            return res.status(404).json({message: 'PRODUTO NÃO ENCONTRADO'})
        }

        if(!Produto.Nome) {
            return res.status(400).json({message: 'O PRODUTO DEVE TER UM NOME'})
        }

        return res.status(200).json(await ProdutoModel.update(Produto));
    }
}

module.exports = new ControllersProdutos     
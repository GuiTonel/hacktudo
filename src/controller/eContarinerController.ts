import EnderecoController from "./enderecoController"
import EContainerModel from "../model/eContainerModel"
import TipoUserContoller from "./tipoUserController"

const enderecoController = new EnderecoController()

class EContainerController {
    static async getIdContainerByCity( nomeCidade : String ){
        return await enderecoController.getIdUserByCityAndType( 'C', nomeCidade.toUpperCase())
    }

    async insertEContainer( eContainerReq ) {
        const eContainerModel = new EContainerModel({
            nome: eContainerReq.nome,
            cpnj: eContainerReq.cnpj,
            qtdProduto: 0
        })

        await TipoUserContoller.insertType( eContainerModel._id, 'C' )

        await EnderecoController.insertEndereco( eContainerReq.endereco, eContainerModel._id )

        return ( await eContainerModel.save() ).toJSON()
    }
}

export default EContainerController
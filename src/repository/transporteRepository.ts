import transporteModel from '../model/transporteModel'

class TransporteRepository extends transporteModel {
    static async getByIdVenda(idVenda){
        return await transporteModel.findOne( { idVenda: idVenda } ).exec()
    }

    static async getByHashProduto( hashProduto ) {
        return await transporteModel.findOne( { hashProduto: hashProduto } ).exec()
    }
}

export default TransporteRepository
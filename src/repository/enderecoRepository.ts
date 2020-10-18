import enderecoModel from '../model/enderecoModel'

class EnderecoRepository extends enderecoModel {
    async getIdUserByCityAndType( tipoUsuario, cidade ) {
        return (await enderecoModel.findOne( { cidade: cidade, tipoUsuario: tipoUsuario }).select('idUsuario -_id').exec()).toJSON().idUsuario   
    }
    async getEnderecoByUserId( userId ) {
        return await enderecoModel.findOne({ idUsuario: userId} ).exec()
    }
}

export default EnderecoRepository
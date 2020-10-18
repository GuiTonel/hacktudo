import EnderecoRepository from "../repository/enderecoRepository";
import EnderecoModel from "../model/enderecoModel";

const enderecoRepository = new EnderecoRepository()

class EnderecoController {
    async getIdUserByCityAndType(tipoUsuario, cidade) {
        return await enderecoRepository.getIdUserByCityAndType( tipoUsuario, cidade )
    }

    static async insertEndereco( endereco, userId ) {
        const enderecoModel = new EnderecoModel({
            rua: endereco.rua,
            numero: endereco.numero,
            bairro: endereco.bairro,
            cidade: endereco.cidade,
            estado: endereco.estado,
            cep: endereco.cep,
            complemento: endereco.complemento,
            idUsuario: userId,
            tipoUsuario: endereco.tipoUsuario
        })

        await enderecoModel.save()
    }

    static async getEnderecoByUserId( userId ){
        return (await enderecoRepository.getEnderecoByUserId(userId)).toJSON()
    }
}

export default EnderecoController
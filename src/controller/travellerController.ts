import viagemRepository from '../repository/viagemRepository'
import TravellerRepository from '../repository/travellerRepository'

import travellerModel from '../model/travellerModel'
import tipoUserModel from '../model/tipoUserModel'
import TipoUserContoller from './tipoUserController'
import EnderecoController from './enderecoController'

class TravellerController {
    static async escolherMelhorViajanteDisponivel( cidadeRemetente, cidadeDestinatario, dataDeposito ){
        const travellerId = await viagemRepository.getTravellerIdByDateAndCity( dataDeposito, cidadeDestinatario, cidadeRemetente )

        return travellerId
    }

    static async getTravellerById( id ) {
        return await TravellerRepository.findOne(id)
    }

    async insertTraveller(travellerReq){
        const traveller = new travellerModel({
            nomeTraveller: travellerReq.nome,
            cpf: travellerReq.cpf,
            rate: null,
            veiculo: travellerReq.veiculo
        })

        await TipoUserContoller.insertType( traveller._id, 'T' )

        await EnderecoController.insertEndereco( travellerReq.endereco, traveller._id )

        return (await traveller.save()).toJSON()
    }
}

export default TravellerController
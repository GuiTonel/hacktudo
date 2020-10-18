import viagemModel from '../model/viagemModel'

class viagemRepository {
    static async getTravellerIdByDateAndCity( dataInicial: Date, cidadeDestinatario, cidadeRemetente ) {
        const month = dataInicial.getMonth()
        const day = dataInicial.getDay() 

        return (await viagemModel.findOne( { diaInicio: { $gt : day}, mes: month, cidadePartida: cidadeRemetente, cidadeChegada: cidadeDestinatario }, 'idTraveller -_id' ).sort( '-diaInicio' ).exec()).toJSON().idTraveller
    }
}

export default viagemRepository
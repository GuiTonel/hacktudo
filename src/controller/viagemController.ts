import viagemModel from "../model/viagemModel";

class ViagemController extends viagemModel {
    static async inserirViagem(viagemReq, idTraveller){
        
        const dia = new Date( viagemReq.data ).getDay()
        const mes = new Date( viagemReq.data ).getMonth()

        const viagem = new viagemModel({
            idTraveller: idTraveller,
            diaInicio: dia,
            mes: mes,
            cidadePartida: viagemReq.cidadePartida,
            cidadeChegada: viagemReq.cidadeChegada
        })

        return (await viagem.save()).toJSON()
    }
}

export default ViagemController
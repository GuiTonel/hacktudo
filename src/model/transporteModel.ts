import mongoose from 'mongoose'


const transportSchema = new mongoose.Schema({
    nomeVendedor:String,
    nomeComprador: String,
    hashProduto: {
        type: String,
        unique: true        
    },
    idVenda: Number,
    ocupacaoAtual: {
        type: String,
        default: 'V'
    },
    proximaOcupacao: {
        type: String,
        default: 'CR'
    },
    travellerId: mongoose.Types.ObjectId,
    eContainerDestinatarioId: mongoose.Types.ObjectId,
    eContainerRemententeId: mongoose.Types.ObjectId,
    dataDeposito: Date
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

export default mongoose.model('Transporte', transportSchema)
import mongoose from 'mongoose'

const enderecoSchema = new mongoose.Schema({
    rua: String,
    numero: Number,
    bairro: String,
    cidade: {
        type: String,
        uppercase: true
    },
    estado: {
        type: String,
        uppercase: true
    },
    cep: Number,
    complemento: String,
    idUsuario: mongoose.Types.ObjectId,
    tipoUsuario: String
})


export default mongoose.model('Endereco', enderecoSchema)
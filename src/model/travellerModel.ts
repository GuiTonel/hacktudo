import mongoose from 'mongoose'

const travellerSchema = new mongoose.Schema({
    nomeTraveller: String,
    cpf: String,
    rate: Number,
    veiculo: String
})

export default mongoose.model('Traveller', travellerSchema)
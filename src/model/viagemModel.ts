import mongoose from "mongoose";

const viagemSchema = new mongoose.Schema({
    idTraveller: mongoose.Types.ObjectId,
    diaInicio: Number,
    mes: Number,
    cidadePartida: String,
    cidadeChegada: String
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

export default mongoose.model('Viagem', viagemSchema)
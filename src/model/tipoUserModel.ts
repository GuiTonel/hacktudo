import mongoose from "mongoose";

const tipoUserSchema = new mongoose.Schema({
    idUsuario: mongoose.Types.ObjectId,   
    tipoUsuario: String
})

export default mongoose.model('tipoUser', tipoUserSchema)
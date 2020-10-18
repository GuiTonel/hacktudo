import mongoose from "mongoose";

const eContainerSchema = new mongoose.Schema({
    nome: String,
    cpnj: String,
    qtdProduto: Number 
})

export default mongoose.model('eContainer', eContainerSchema)
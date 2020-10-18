import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema({
    nomeProduto: String,
    qtdProduto: Number,
    corProduto: String,
    pesoProduto: Number,
    hashProduto: {
        type: String,
        unique: true
    },
    idVenda: Number,
    entregue: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at' 
    }
})

export default mongoose.model('Produto', produtoSchema)
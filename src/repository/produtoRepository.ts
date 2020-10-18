import produtoModel from "../model/produtoModel";

class ProdutoRepository extends produtoModel {
    async getProdutoHashByIdTransporte( idTransporte ) {
        return await produtoModel.findOne( { 'idTransporte': idTransporte}, 'hashProduto' ).exec()
    }

    async getProdutoByHash( hashProduto ) {
        return await produtoModel.findOne( { 'hashProduto': hashProduto } ).exec()
    }
}

export default ProdutoRepository
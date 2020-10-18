import qrcode  from 'qrcode'
import ProdutoRepository from '../repository/produtoRepository'
import produtoModel from '../model/produtoModel'

const produtoRepository = new ProdutoRepository()

class produtoController {
    
    static async generateQrcodeByHash(hashProduto: string){      
        return await qrcode.toDataURL( hashProduto, { errorCorrectionLevel: 'M' } ).then( url => {
            return url
        })
    }

    
    static async getHashProdutoByIdTransporte( idTransporte ){
        return await produtoRepository.getProdutoHashByIdTransporte( idTransporte )
    }

    static async getProdutoByHash( hashProduto ) {
        return await produtoRepository.getProdutoByHash(hashProduto)
    }

    static async insertProduto(produtoReq, idVenda){
        const produto = new produtoModel({
            nomeProduto: produtoReq.nome,
            qtdProduto: produtoReq.qtd,
            corProduto: produtoReq.cor,
            pesoProduto: produtoReq.peso,
            hashProduto: produtoReq.hashProduto,
            idVenda: idVenda
        })

        return ( await produto.save() ).toJSON()
    }

    static async setProdutoEntregue( hashProduto ){
        return await produtoRepository.updateOne( { hashProduto: null, entregue: true } ).where( { hashProduto: hashProduto } ).exec()
    }
}

export default produtoController
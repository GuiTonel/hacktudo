import { Router } from 'express'

import Path from 'path'

import TransporteController from '../controller/transporteController'

const transporteController  = new TransporteController()

const router = Router()

router.post( '/gerarinfos/:idvenda', async (req, res)=> {
    await transporteController.gerarInfos( {
        idVenda: Number(req.params.idvenda),
        compradorReq: req.body.comprador,
        vendedorReq: req.body.vendedor,
        produtoReq: req.body.produto,
        dataDeposito: new Date(req.body.dataDeposito)
    } )
    
    return res.status(200).sendFile(Path.resolve('src/tmp/output.pdf'))

} )

router.put( '/atualizarstatus/:hashproduto', async (req, res) =>{
    return res.status(200).json(await transporteController.atualizarStatus( req.params.hashproduto ))
} )

router.get('/getstatus/:hashproduto', async (req, res) => {
    return res.status(200).json(await transporteController.getStatusByHash( req.params.hashproduto ))
})

export default router
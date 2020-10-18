import {Router} from 'express'
import produtoController from '../controller/produtoController'

const router = Router()

router.post('/insert/:idvenda', async ( req, res ) => {
    const produto = await produtoController.insertProduto(req.body.produto, req.params.idvenda)

    return res.status(200).json(produto)
})

export default router
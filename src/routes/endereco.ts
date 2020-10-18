import {Router} from 'express'
import EnderecoController from '../controller/enderecoController'

const router = Router()

router.get('/selecionar/:idUsuario', async (req, res) => {
    const endereco = await EnderecoController.getEnderecoByUserId(req.params.idUsuario)

    return  res.status(200).json( endereco )
} )

export default router
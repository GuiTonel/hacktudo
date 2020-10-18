import { Router } from 'express'
import ViagemController from '../controller/viagemController'

const router = Router()

router.post('/inserir/:idTraveller', async (req, res)=>{

    const viagem = await ViagemController.inserirViagem(req.body.viagem, req.params.idTraveller)

    return res.status(200).send(viagem)
})

export default router
import { Router } from 'express'
import TravellerController from '../controller/travellerController'

const router = Router()

const travellerController = new TravellerController()

router.post('/insert', async (req, res)=>{

    const traveller = await travellerController.insertTraveller(req.body.traveller)

    res.status(200).json(traveller)
})

export default router
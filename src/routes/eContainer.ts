import { Router } from 'express'

import eContainerModel from '../model/eContainerModel'
import EContainerController from '../controller/eContarinerController'


const router = Router()
const eContainerController = new EContainerController()

router.post( '/insert', async (req, res) => {
    const eContainer = await eContainerController.insertEContainer(req.body.eContainer)

    return res.status(200).json(eContainer)
} )

export default router
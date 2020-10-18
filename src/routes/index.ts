import express from 'express'

import routerTransporte from './transporte'
import routerTraveller from './travellerEcho'
import routerEContainer from './eContainer'
import routerProduto from './produto'
import routeViagem from './viagem'
import routerEndereco from './endereco'

const routes = express.Router()

routes.use('/transporte', routerTransporte)
routes.use('/traveller', routerTraveller)
routes.use('/econtainer', routerEContainer )
routes.use('/produto', routerProduto)
routes.use('/viagem', routeViagem)
routes.use('/endereco', routerEndereco)

export default routes

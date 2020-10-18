import Hashids from 'hashids/cjs'
import pdf from 'pdf-creator-node'
import fs from 'fs'

import Transporte from '../model/transporteModel'
import TransporteRepository from '../repository/transporteRepository'

import produtoController from './produtoController'

import TravellerController from './travellerController'
import EContainerController from './eContarinerController'
import etapas from '../etapaTransporteEnum'
import eContainerModel from '../model/eContainerModel'
import travellerModel from '../model/travellerModel'

interface requestTransporte {
    idVenda: number;
    vendedorReq;
    compradorReq;
    produtoReq;
    dataDeposito: Date
}

const hashids = new Hashids('', 6)

class TransporteController {
    async gerarInfos({ idVenda, compradorReq, vendedorReq, produtoReq, dataDeposito }: requestTransporte) {

        const hashProduto = hashids.encode(idVenda).toUpperCase()
        
        produtoReq.hashProduto = hashProduto

        const produtoQrCode = await produtoController.generateQrcodeByHash(hashProduto)

        await produtoController.insertProduto( produtoReq, idVenda )

        await this.salvarInfosTransporte({ idVenda, compradorReq, vendedorReq, produtoReq, dataDeposito })

        const template = fs.readFileSync('./src/templates/PDF/index.html', 'utf-8')

        const document = {
            // TODO TEMPLATE
            html: template,
            data: {
                url: produtoQrCode,
                hash: hashProduto,
                recebedorNome: compradorReq.nome.toUpperCase(),
                idVenda: String(idVenda),
                endDest: JSON.stringify(compradorReq.endereco),
                endRem: JSON.stringify(vendedorReq.endereco)
                // ruaDestinatario: compradorReq.endereco.rua
            },
            path: './src/tmp/output.pdf'
        }

        await pdf.create( document )

        return

    }

    async salvarInfosTransporte({ idVenda, compradorReq, vendedorReq, produtoReq, dataDeposito }: requestTransporte) {
        const transporte = new Transporte({
            nomeVendedor: vendedorReq.nome,
            nomeComprador: compradorReq.nome,
            hashProduto: produtoReq.hashProduto,
            idVenda: idVenda,
            travellerId: await TravellerController.escolherMelhorViajanteDisponivel(vendedorReq.endereco.cidade, compradorReq.endereco.cidade, dataDeposito),
            eContainerDestinatarioId: await EContainerController.getIdContainerByCity( compradorReq.endereco.cidade ),
            eContainerRemententeId: await EContainerController.getIdContainerByCity( vendedorReq.endereco.cidade ),
            dataDeposito: dataDeposito
        })

        return console.log((await transporte.save()).toJSON())
    }

    async atualizarStatus( hashProduto ) {
        var transporte
        var transportJSON
        try{
            transporte = await TransporteRepository.getByHashProduto( hashProduto )
            transportJSON = transporte.toJSON()
        } catch {
            return { error: 'Produto não cadastrado ou entrega finalizada!' }
        }

        const next = etapas.findIndex( (etapa) => etapa == transportJSON.proximaOcupacao )

        if ( next + 1 >= etapas.length ) {
            await produtoController.setProdutoEntregue( hashProduto )
            await transporte.updateOne({ hashProduto: null }).exec()
        } else {
            await transporte.updateOne({
                ocupacaoAtual: transportJSON.proximaOcupacao,
                proximaOcupacao: etapas[next+1]
            }).exec()
        
        }

        return transporte.toJSON()
    }

    async getStatusByHash( hashProduto ) {
        try{
            const transporte = await TransporteRepository.getByHashProduto( hashProduto )
            const produto = await produtoController.getProdutoByHash( hashProduto )
            const eContainerDest = await eContainerModel.findById( transporte.toJSON().eContainerDestinatarioId )
            const eContainerRem = await eContainerModel.findById( transporte.toJSON().eContainerRemententeId )
            const traveller = await travellerModel.findById( transporte.toJSON().travellerId )

            return {
                transporte: transporte.toJSON(),
                produto: produto.toJSON(),
                eContainerDest: eContainerDest.toJSON(),
                eContainerRem: eContainerRem.toJSON(),
                traveller: traveller.toJSON()
            }
        } catch (err) {
            return { error: err }
        } 

    }
}

export default TransporteController
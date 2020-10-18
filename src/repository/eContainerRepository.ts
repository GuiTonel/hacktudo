import ContainerModel from '../model/eContainerModel'

class EContainerRepository extends ContainerModel {
    static async getContainerById( idContainer ){
        return await ContainerModel.findById( idContainer )
    }
}
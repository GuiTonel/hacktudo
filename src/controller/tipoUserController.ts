import tipoUserModel from "../model/tipoUserModel";

class TipoUserContoller extends tipoUserModel {
    static async insertType( id, type ){
        return await new tipoUserModel({
            idUsuario: id,   
            tipoUsuario: type
        }).save()
    }
}

export default TipoUserContoller
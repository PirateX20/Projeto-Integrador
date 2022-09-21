export class Entrevista {
    private _idEmpresa:string;
    private _idEmpregado:string;
    private _idEntrevista:string;
    private _dataEntrevista: Date;

    constructor(idEmpresa:string,idEmpregado:string,idEntrevista:string,dataEntrevista:Date){
        this._idEmpresa=idEmpresa;
        this._idEmpregado=idEmpregado;
        this._idEntrevista=idEntrevista;
        this._dataEntrevista=dataEntrevista;
    }

    public get idEmpresa(){
        return this._idEmpresa;
    }

    public get idEmpregado(){
        return this._idEmpregado;
    }

    public get idEntrevista(){
        return this._idEntrevista;
    }

    public get dataEntrevista(): Date {
        return this._dataEntrevista;
    }
    public set dataEntrevista(value: Date) {
        this._dataEntrevista = value;
    }
}

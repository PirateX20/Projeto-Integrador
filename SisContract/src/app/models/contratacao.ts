import { Empregado } from "./empregado";
import { Entrevista } from "./entrevista";

export class Contratacao{
    private _entrevista: any;
    private _idContratacao: string;
    private _dataContrata: Date;
    private _dataDemissao: Date;
    private _empregado: any;

    constructor(entrevista:any,idEmpregado:string,dataContrata:Date){
        this._entrevista=entrevista;
        this._empregado=idEmpregado;
        this.dataContrata=dataContrata;
    }

    public get idContratacao(): string {
        return this._idContratacao;
    }

    public get entrevista(): any {
        return this._entrevista;
    }
    public set entrevista(value: any) {
        this._entrevista = value;
    }

    public get dataContrata(): Date {
        return this._dataContrata;
    }
    public set dataContrata(value: Date) {
        this._dataContrata = value;
    }

    public get dataDemissao(): Date {
        return this._dataDemissao;
    }
    public set dataDemissao(value: Date) {
        this._dataDemissao = value;
    }

    public get empregado(): any {
        return this._empregado;
    }
    public set empregado(value: any) {
        this._empregado = value;
    }

}

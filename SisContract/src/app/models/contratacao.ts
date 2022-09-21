import { Empregado } from "./empregado";
import { Entrevista } from "./entrevista";

export class Contratacao{
    private _entrevista: Entrevista;
    private _idContratacao: string;
    private _dataContrata: Date;
    private _dataDemissao: Date;
    private _empregado: Empregado;

    constructor(entrevista:Entrevista,idContratacao:string,dataContrata:Date){
        this._entrevista=entrevista;
        this._idContratacao=idContratacao;
        this.dataContrata=dataContrata;
    }

    public get idContratacao(): string {
        return this._idContratacao;
    }

    public get entrevista(): Entrevista {
        return this._entrevista;
    }
    public set entrevista(value: Entrevista) {
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

    public get empregado(): Empregado {
        return this._empregado;
    }
    public set empregado(value: Empregado) {
        this._empregado = value;
    }

    mudaStatus(){
        if((this._entrevista.idEmpregado===this._empregado.id)&&(this._empregado.status=="desempregado")){
            this._empregado.status = "contratado";
        }else if((this._entrevista.idEmpregado===this._empregado.id)&&(this._empregado.status=="contratado")){
            this._empregado.status = "desempregado";
        }
    }
}

import { Empregado } from "./empregado";
import { Entrevista } from "./entrevista";

export class Contratacao{
    private _empresa: any;
    private _idContratacao: string;
    private _dataContrata: Date;
    private _dataDemissao: Date;
    private _empregado: any;

    constructor(empresa:any,idEmpregado:string,dataContrata:Date){
        this._empresa=empresa;
        this._empregado=idEmpregado;
        this.dataContrata=dataContrata;
    }

    public get idContratacao(): string {
        return this._idContratacao;
    }

    public get empresa(): any {
        return this._empresa;
    }
    public set empresa(value: any) {
        this._empresa = value;
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

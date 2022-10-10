import { Endereco } from "./endereco";

export class Empresa{
    private _id:string;
    private _email: string;
    private _senha: string;
    private _nome: string;
    private _endereco: any;
    private _documento: any;
    private _cargos: string;

    public get id():string{
        return this._id;
    }

    constructor(email:string,senha:string,nome:string,documento:string){
        this._email=email;
        this._senha=senha;
        this._nome=nome;
        this._documento=documento;
    }

    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }

    public get senha(): string {
        return this._senha;
    }
    public set senha(value: string) {
        this._senha = value;
    }

    public get nome(): string {
        return this._nome;
    }
    public set nome(value: string) {
        this._nome = value;
    }

    public get endereco(): any {
        return this._endereco;
    }
    public set endereco(value: any) {
        this._endereco = value;
    }

    public get documento(): any {
        return this._documento;
    }
    public set documento(value: any) {
        this._documento = value;
    }

    public get cargos(): string {
        return this._cargos;
    }
    public set cargos(value: string) {
        this._cargos = value;
    }

}

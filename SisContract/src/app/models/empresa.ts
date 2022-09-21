import { Usuario } from "../interface/usuario";
import { Endereco } from "./endereco";

export class Empresa implements Usuario{
    private _id:string;
    _email: string;
    _senha: string;
    _nome: string;
    _endereco: Endereco;
    private _cnpj: string;
    private _cargos: string[];

    public get id():string{
        return this._id;
    }

    constructor(email:string,senha:string,nome:string,cnpj:string){
        this._email=email;
        this._senha=senha;
        this._nome=nome;
        this._cnpj=cnpj;
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

    public get endereco(): Endereco {
        return this._endereco;
    }
    public set endereco(value: Endereco) {
        this._endereco = value;
    }

    public get cnpj(): string {
        return this._cnpj;
    }
    public set cnpj(value: string) {
        this._cnpj = value;
    }

    public get cargos():string[]{
        return this._cargos;
    }

    addCargo(cargo : string){
        this._cargos.push(cargo);
    }

}

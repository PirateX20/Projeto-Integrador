import { Usuario } from "../interface/usuario";
import { Endereco } from "./endereco";

export class Empregado implements Usuario{
    private _id:string;
    _email: string;
    _senha: string;
    _nome: string;
    _endereco: Endereco;
    private _areaAtuacao: string;
    private _cpf: string;
    private _escolaridade: string;
    private _experiencia: string;
    private _especializacoes: string;
    private _status: string;

    public get id():string{
        return this._id;
    }

    constructor(email:string,senha:string,nome:string,cpf:string){
        this._email=email;
        this._senha=senha;
        this._nome=nome;
        this._cpf=cpf;
        this._status = "desempregado";
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

    public get areaAtuacao(): string {
        return this._areaAtuacao;
    }
    public set areaAtuacao(value: string) {
        this._areaAtuacao = value;
    }

    public get cpf(): string {
        return this._cpf;
    }
    public set cpf(value: string) {
        this._cpf = value;
    }

    public get escolaridade(): string {
        return this._escolaridade;
    }
    public set escolaridade(value: string) {
        this._escolaridade = value;
    }

    public get experiencia(): string {
        return this._experiencia;
    }
    public set experiencia(value: string) {
        this._experiencia = value;
    }

    public get especializacoes(): string {
        return this._especializacoes;
    }
    public set especializacoes(value: string) {
        this._especializacoes = value;
    }

    public get status(): string {
        return this._status;
    }
    public set status(value: string) {
        this._status = value;
    }
}

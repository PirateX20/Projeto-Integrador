export class Endereco {
    private _rua: string;
    private _bairro: string;
    private _cidade: string;
    private _numero: number;
    private _cep: string;
    private _id:string;

    constructor(rua:string,bairro:string,cidade:string,numero:number,cep:string){
        this._rua=rua;
        this._bairro=bairro;
        this._cidade=cidade;
        this._numero=numero;
        this._cep=cep;
    }

    public get rua(): string {
        return this._rua;
    }
    public set rua(value: string) {
        this._rua = value;
    }

    public get bairro(): string {
        return this._bairro;
    }
    public set bairro(value: string) {
        this._bairro = value;
    }

    public get cidade(): string {
        return this._cidade;
    }
    public set cidade(value: string) {
        this._cidade = value;
    }

    public get numero(): number {
        return this._numero;
    }
    public set numero(value: number) {
        this._numero = value;
    }

    public get cep(): string {
        return this._cep;
    }
    public set cep(value: string) {
        this._cep = value;
    }

    public get id():string{
        return this._id;
    }
}

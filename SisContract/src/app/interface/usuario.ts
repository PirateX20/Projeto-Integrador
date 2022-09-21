import { Endereco } from "../models/endereco";

export interface Usuario {
    _email:string;
    _senha:string;
    _nome:string;
    _endereco:Endereco;
}

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Empresa } from '../models/empresa';
import { Auth, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private PATH : string = "empresa";

  constructor(private _auth: Auth,private _angularFirestore: AngularFirestore, private _angularFireStorage: AngularFireStorage) { }

  cadastroEmpresa(empresa : Empresa){
    return this._angularFirestore.collection(this.PATH).add({
      email:empresa.email,
      senha:empresa.senha,
      nome:empresa.nome,
      documento:empresa.documento,
    });
  }

  updateInfosEmpresa(empresa:Empresa,id:string){
    return this._angularFirestore.collection(this.PATH).doc(id).update({
      email:empresa.email,
      senha:empresa.senha,
      nome:empresa.nome,
      documento:empresa.documento,
      endereco:empresa.endereco,
      cargos: empresa.cargos
    });
  }

  logout(){
    return signOut(this._auth);
  }

}

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Empresa } from '../models/empresa';
import { Auth, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private PATH : string = "empresa";
  auth = getAuth();
  user = this.auth.currentUser;

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
      cargos: empresa.cargos
    });
  }

  updateInfos(empresa:Empresa,id:string){
    return this._angularFirestore.collection(this.PATH).doc(id).update({
      nome: empresa.nome,
      cargos: empresa.cargos
    })
  }

  updateConfig(empresa:Empresa,id:string){
    return this._angularFirestore.collection(this.PATH).doc(id).update({
      email:empresa.email,
      senha: empresa.senha,
      documento: empresa.documento
    })
  }

  getEmpresas(){
    return this._angularFirestore.collection(this.PATH).snapshotChanges();
  }

  getEmpresa(id:string){
    return this._angularFirestore.collection(this.PATH).doc(id).valueChanges();
  }

  async loginFB(email:any,senha:any){
    this.auth = getAuth();
    return signInWithEmailAndPassword(this.auth,email,senha)
  }

  async registerFB(empresa:Empresa){
    const ususrio = await createUserWithEmailAndPassword(this.auth,empresa.email,empresa.senha);
    this._angularFirestore.collection(this.PATH).doc(ususrio.user.uid).set({
      email:empresa.email,
      senha:empresa.senha,
      nome:empresa.nome,
      documento:empresa.documento,
    })
  }

  deleteEmpresa(id:any){
    return this._angularFirestore.collection(this.PATH).doc(id).delete();
  }

  logout(){
    return signOut(this._auth);
  }

}

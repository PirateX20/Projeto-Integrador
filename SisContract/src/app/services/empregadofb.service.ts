import { Injectable } from '@angular/core';
import { finalize, switchMap } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Empregado } from '../models/empregado';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { createUserWithEmailAndPassword, getAuth, signOut, updateProfile } from 'firebase/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import { collection, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { collectionData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EmpregadoService {
  private PATH: string = "empregado";
  auth = getAuth();
  user = this.auth.currentUser;

  constructor(private _auth: Auth,private _angularFirestore: AngularFirestore,
     private _angularFireStorage: AngularFireStorage) { }

  cadastroEmpregado(empregado : Empregado){
    return this._angularFirestore.collection(this.PATH).add({
      email:empregado.email,
      senha:empregado.senha,
      nome:empregado.nome,
      documento:empregado.documento,
    });
  }

  updateInfosEmpregado(empregado:Empregado,id:string){
    return this._angularFirestore.collection(this.PATH).doc(id).update({
      email:empregado.email,
      senha:empregado.senha,
      nome:empregado.nome,
      documento:empregado.documento,
      areaAtuacao:empregado.areaAtuacao,
      escolaridade:empregado.escolaridade,
      experiencia:empregado.experiencia,
      especializacoes:empregado.especializacoes,
      status:empregado.status
    });
  }

  updateinfos(empregado:Empregado,id:string){
    return this._angularFirestore.collection(this.PATH).doc(id).update({
      nome:empregado.nome,
      areaAtuacao:empregado.areaAtuacao,
      escolaridade:empregado.escolaridade,
      experiencia:empregado.experiencia,
      especializacoes:empregado.especializacoes,
    })
  }

  updateConfig(empregado:Empregado,id:string){
    return this._angularFirestore.collection(this.PATH).doc(id).update({
      email:empregado.email,
      senha: empregado.senha,
      documeno: empregado.documento
    })
  }

  async registerFB(empregado:Empregado){
    const ususrio = await createUserWithEmailAndPassword(this.auth,empregado.email,empregado.senha);
    this._angularFirestore.collection(this.PATH).doc(ususrio.user.uid).set({
      email:empregado.email,
      senha:empregado.senha,
      nome:empregado.nome,
      documento:empregado.documento,
      status:'Desempregado'
    })
  }

  async loginFB(email:any,senha:any){
    this.auth = getAuth();
    return signInWithEmailAndPassword(this.auth,email,senha)
  }

  getEmpregado(id:string){
    return this._angularFirestore.collection(this.PATH).doc(id).valueChanges();
  }

  getEmpregados(){
    return this._angularFirestore.collection(this.PATH).snapshotChanges();
  }

  logout(){
    return signOut(this._auth);
  }

  deleteEmpregado(id:any){
    return this._angularFirestore.collection(this.PATH).doc(id).delete();
  }

  empregadoLogged(){
    this.auth = getAuth();
    return this.auth.currentUser;
  }

}

import { Injectable } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Empregado } from '../models/empregado';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class EmpregadoService {
  private PATH: string = "empregado";

  constructor(private _auth: Auth,private _angularFirestore: AngularFirestore, private _angularFireStorage: AngularFireStorage) { }

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
      endereco:empregado.endereco,
      areaAtuacao:empregado.areaAtuacao,
      escolaridade:empregado.escolaridade,
      experiencia:empregado.experiencia,
      especializacoes:empregado.especializacoes,
    });
  }

  async registerFB({email,senha}){
    try{  
      const user = await createUserWithEmailAndPassword(
        this._auth,
        email,
        senha
      );
      return user;
    } catch(e){
      return null;
    }
  }

  async loginFB({email,senha}){
    try{  
      const user = await signInWithEmailAndPassword(
        this._auth,
        email,
        senha
      );
      return user;
    } catch(e){
      return null;
    }
  }

  logout(){
    return signOut(this._auth);
  }

}

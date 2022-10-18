import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ContratacaoService {
  private PATH: string = "contratacao"
  constructor(private _angularFirestore: AngularFirestore) { }

  contratar(idEntrevista:any,idEmpregado:any,data:any){
    return this._angularFirestore.collection(this.PATH).add({
      entrevista: idEntrevista,
      empregado: idEmpregado,
      dataContrata: data
    });
  }

  getContratacao(id:any){
    return this._angularFirestore.collection(this.PATH).doc(id).valueChanges();
  }

  getContratacoes(){
    return this._angularFirestore.collection(this.PATH).snapshotChanges();
  }

}

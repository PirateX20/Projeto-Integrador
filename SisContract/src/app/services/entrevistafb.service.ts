import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class EntrevistaService {
  private PATH: string = "entrevista";
  constructor(private _angularFirestore: AngularFirestore) { }

  agendarEntrevista(idEntrevista:any,dataEntrevista:any){
    return this._angularFirestore.collection(this.PATH).doc(idEntrevista).update({
      dataEntrevista: dataEntrevista
    });
  }

  solicitar(idEmpresa:string,idEmpregado:string,nomeEmpregado:string,nomeEmpresa:string){
    return this._angularFirestore.collection(this.PATH).add({
      empresa: idEmpresa,
      empregado: idEmpregado,
      nomeEmpresa: nomeEmpresa,
      nomeEmpregado: nomeEmpregado
    });
  }

  getEntrevista(id:string){
    return this._angularFirestore.collection(this.PATH).doc(id).snapshotChanges();
  }

  getEntrevistas(){
    return this._angularFirestore.collection(this.PATH).snapshotChanges();
  }

  deleteEntrevista(id:any){
    return this._angularFirestore.collection(this.PATH).doc(id).delete();
  }

}

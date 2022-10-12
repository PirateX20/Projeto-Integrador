import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class EntrevistaService {
  private PATH: string = "entrevista";
  constructor(private _angularFirestore: AngularFirestore) { }

  agendarEntrevista(idEmpresa:string,idEmpregado:string,dataEntrevista:any){
    return this._angularFirestore.collection(this.PATH).add({
      empresa: idEmpresa,
      empregado: idEmpregado,
      entrevista: dataEntrevista
    });
  }

  getEntrevista(id:string){
    return this._angularFirestore.collection(this.PATH).doc(id).valueChanges();
  }

  getEntrevistas(){
    return this._angularFirestore.collection(this.PATH).snapshotChanges();
  }

  deleteEntrevista(id:any){
    return this._angularFirestore.collection(this.PATH).doc(id).delete();
  }

}

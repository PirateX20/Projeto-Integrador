import { Component, OnInit } from '@angular/core';
import { getDoc, getFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { getAdditionalUserInfo, getAuth } from 'firebase/auth';
import { getuid } from 'process';
import { Empregado } from 'src/app/models/empregado';
import { EmpregadoService } from 'src/app/services/empregadofb.service';

@Component({
  selector: 'app-informacoes',
  templateUrl: './informacoes.page.html',
  styleUrls: ['./informacoes.page.scss'],
})
export class InformacoesPage implements OnInit {
  isSubmitted: boolean;
  formEdit: FormGroup;
  empregado:any;
  idCurrent: any;
  e:Empregado;
  auth = getAuth();
  user = this.auth.currentUser;

  constructor(public menuCtrl: MenuController,
    private alertController: AlertController,
    private formBuilder: FormBuilder,
    private _empregadoFBS: EmpregadoService,
    private _router : Router) { }

  ngOnInit() {
    this.openUser();
    this.menuCtrl.enable(true);
    this.formEdit = this.formBuilder.group({
      nome:["",[Validators.required]],
      areaAtuacao:["",[Validators.required]],
      escolaridade: ["",[Validators.required]],
      experiencia:["",[Validators.required]],
      especializacoes:["",[Validators.required]]
    })
  }

  submitForm(): Boolean{
    this.isSubmitted = true;
    if(!this.formEdit.valid){
      this.presentAlert('SisContract', 'Error', 'Todos os campos são Obrigatórios!');
      return false;
    }else{
      //this.docTamanho();
      this.editar();
    }
  }

  async presentAlert(header: string, subHeader: string, message: string) {
    const alert = await this.alertController.create({
      header,
      subHeader,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }

  editar(){
    this._empregadoFBS.updateinfos(this.formEdit.value,this.idCurrent).then(()=>{
      this.presentAlert("SisContract", "Informações", "Informações alteradas com sucesso!");
      this.formEdit.reset();
    })
  }

  openUser(){
    if(this.user !== null){
      const userId = this.user.uid
      this.idCurrent = userId
      this._empregadoFBS.getEmpregado(userId).subscribe(res=>{
        this.empregado = res;
        this.formEdit.controls['nome'].setValue(this.empregado.nome);
        this.formEdit.controls['areaAtuacao'].setValue(this.empregado.areaAtuacao);
        this.formEdit.controls['escolaridade'].setValue(this.empregado.escolaridade);
        this.formEdit.controls['experiencia'].setValue(this.empregado.experiencia);
        this.formEdit.controls['especializacoes'].setValue(this.empregado.especializacoes);
        
        //console.log(this.empregado.nome);
      });
    }else{
      this._router.navigate(['/home']);
    }
  }

  onClick(){
    this.presentAlert('SisContract', 'Para os campo escolaridade, experiencia e especializacoes', 'Separe as Informações com virgulas(,).');
  }


}

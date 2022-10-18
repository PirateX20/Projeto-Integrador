import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { getAuth } from 'firebase/auth';
import { Empregado } from 'src/app/models/empregado';
import { Entrevista } from 'src/app/models/entrevista';
import { ContratacaoService } from 'src/app/services/contratacaofb.service';
import { EmpregadoService } from 'src/app/services/empregadofb.service';
import { EmpresaService } from 'src/app/services/empresafb.service';
import { EntrevistaService } from 'src/app/services/entrevistafb.service';

@Component({
  selector: 'app-curriculos',
  templateUrl: './curriculos.page.html',
  styleUrls: ['./curriculos.page.scss'],
})
export class CurriculosPage implements OnInit {
  
  idCurrent: any;
  empregados:Empregado[];
  //entrevistas:Entrevista[];
  listaCandidatos:any;
  teste:any;
  empregado:any
  data:string
  auth = getAuth();
  user = this.auth.currentUser;

  constructor(
    public menuCtrl: MenuController,
    private alertController: AlertController,
    private _empregadoFBS: EmpregadoService,
    private _empresaFBS: EmpresaService,
    private _router : Router,
    private _entrevistaFBS: EntrevistaService,
    private _contratoFBS: ContratacaoService
  ) { }

  ngOnInit() {
    this.data=new Date().toISOString();
    this.openUser();
    this.openEmpregado();
    this.openEntrevista();
    this.menuCtrl.enable(true);
  }

  handleChange(event) {
    const query = event.target.value.toLowerCase();
    //this.results = this.data.filter(d => d.toLowerCase().indexOf(query) > -1);
  }

  ver(algo:any){
    this.teste = algo
    this._empregadoFBS.getEmpregado(algo.empregado).subscribe(res=>{
      this.empregado = res;
    })
    this.setOpen(true);
  }

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  openUser(){
    if(this.user !== null){
      const email = this.user.email
      const userId = this.user.uid
      this.idCurrent= userId;
    }else{
      this._router.navigate(['/home']);
    }
  }

  contratar(contrato:any){
    const email = this.user.email
    const userId = this.user.uid
    
    this._contratoFBS.contratar(userId,contrato.empregado,this.data).then(()=>{
      this._empregadoFBS.updateStatus(contrato.empregado,contrato.nomeEmpresa).then(()=>{
        this.presentAlert("SisContract", "Contratação", "Usuário contratado com sucesso!");
      })
    })
  }

  rejeitar(rejeitar:any){
    let aEntrevista: Entrevista = rejeitar;
    let id = aEntrevista.idEntrevista
    console.log(id+"identrevista");
  }

  entrevistar(candidato: Empregado){
    this.presentAlert("SisContract", "Entrevista", "Entre em contato por: "+candidato.email);
  }

  openEmpregado(){
    this._empregadoFBS.getEmpregados().subscribe(res=>{
      this.empregados = res.map(e=>{
        return{
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Empregado
        }as Empregado;
      })
    })
  }

  openEntrevista(){
    const userId = this.user.uid
    this._entrevistaFBS.getEntrevista(userId).subscribe(res=>{
      this.listaCandidatos = res
    })
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
}

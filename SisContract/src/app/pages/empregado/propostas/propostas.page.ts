import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { getAuth } from 'firebase/auth';
import { Empresa } from 'src/app/models/empresa';
import { Entrevista } from 'src/app/models/entrevista';
import { EmpregadoService } from 'src/app/services/empregadofb.service';
import { EmpresaService } from 'src/app/services/empresafb.service';
import { EntrevistaService } from 'src/app/services/entrevistafb.service';

@Component({
  selector: 'app-propostas',
  templateUrl: './propostas.page.html',
  styleUrls: ['./propostas.page.scss'],
})
export class PropostasPage implements OnInit {
  auth = getAuth();
  idteste:any;
  user = this.auth.currentUser;
  empresas:Empresa[];
  empregado:any;
  entrevistas:any;
  teste:any;
  quadroEntrevista:any;
  constructor(
    public menuCtrl: MenuController,
    private alertController: AlertController,
    private _empregadoFBS: EmpregadoService,
    private _router : Router,
    private _empresaFBS: EmpresaService,
    private _entrevistaFBS:EntrevistaService,
  ) {
    this.openEmpresas();
    //console.log(this.entrevistas)
    this.openEntrevistas();
  }

  ngOnInit() {
    this.openUser();
    this.menuCtrl.enable(true);
  }

  public data = ['Amsterdam', 'Buenos Aires', 'Cairo', 'Geneva', 'Hong Kong', 'Istanbul', 'London', 'Madrid', 'New York', 'Panama City'];
  public results = [...this.data];

  handleChange(event) {
    const query = event.target.value.toLowerCase();
    let a:any = [...this.empresas]
    this.results = this.data.filter(d => d.toLowerCase().indexOf(query) > -1);
  }

  ver(algo:any){
    this.teste = algo
    this.setOpen(true);
  }

  openUser(){
    if(this.user !== null){
      const email = this.user.email
      const userId = this.user.uid
      this.idteste = this.user.uid
      //console.log(this.idteste);
      this._empregadoFBS.getEmpregado(this.idteste).subscribe(res=>{
        this.empregado = res;
        //console.log(this.empregado.id);
      });
    }else{
      //this._router.navigate(['/home']);
    }
  }

  openEmpresas(){
    this._empresaFBS.getEmpresas().subscribe(res=>{
      this.empresas = res.map(e=>{
        return{
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Empresa
        }as Empresa;
      })
    })
  }

  openEntrevistas(){
    const email = this.user.email
    const userId = this.user.uid
    this._entrevistaFBS.getEntrevistaEmpregado(userId).subscribe(res=>{
      this.entrevistas = res
    })
  }

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  infos(emp:any){
    this.quadroEntrevista = emp
    if(!this.quadroEntrevista.dataEntrevista){
      //this.presentAlert("SisContract","Solicitação para a empresa "+this.quadroEntrevista.nomeEmpresa,"Ainda sem retorno.")
      this.presentAlert("SisContract","Solicitação para a empresa "+this.quadroEntrevista.nomeEmpresa,"Aguarde instruções em seu e-mail")
    }else{
      this.presentAlert("SisContract","Solicitação para a empresa "+this.quadroEntrevista.nomeEmpresa,
      "Entrevista para a data: "+this.quadroEntrevista.dataEntrevista)
    }
  }

  envia(empresa:any){
    console.log(empresa.id);
    this._entrevistaFBS.solicitar(empresa.id,this.idteste,this.empregado.nome,empresa.nome).then(()=>{
      this.presentAlert("SisContract", "Sucesso!", "Solicitação enviada!");
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

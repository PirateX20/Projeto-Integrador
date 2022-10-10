import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { redirectUnauthorizedTo, redirectLoggedInTo, canActivate } from '@angular/fire/auth-guard';

const redirectLoggedInToHomeEmpregado = () => redirectLoggedInTo(['empregadohome']);
const redirectLoggedInToHomeEmpresa = () => redirectLoggedInTo(['empresahome']);
const redirectUnauthorizedToHome = () => redirectLoggedInTo(['']);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pages/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'empregadohome',
    loadChildren: () => import('./pages/empregado/home/home.module').then( m => m.HomePageModule),
  },
  {
    path: 'empresahome',
    loadChildren: () => import('./pages/empresa/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'empregadopropostas',
    loadChildren: () => import('./pages/empregado/propostas/propostas.module').then( m => m.PropostasPageModule)
  },
  {
    path: 'empregadoinformacoes',
    loadChildren: () => import('./pages/empregado/informacoes/informacoes.module').then( m => m.InformacoesPageModule)
  },
  {
    path: 'empregadoconfigs',
    loadChildren: () => import('./pages/empregado/configs/configs.module').then( m => m.ConfigsPageModule)
  },
  {
    path: 'empresainformacoes',
    loadChildren: () => import('./pages/empresa/informacoes/informacoes.module').then( m => m.InformacoesPageModule)
  },
  {
    path: 'empresaCurriculos',
    loadChildren: () => import('./pages/empresa/curriculos/curriculos.module').then( m => m.CurriculosPageModule)
  },
  {
    path: 'empresaconfigs',
    loadChildren: () => import('./pages/empresa/configs/configs.module').then( m => m.ConfigsPageModule)
  },
  {
    path: 'empregadocurriculos',
    loadChildren: () => import('./pages/empregado/curriculos/curriculos.module').then( m => m.CurriculosPageModule)
  }






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

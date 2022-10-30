import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'navegacao',
    loadChildren: () => import('./page/navegacao/navegacao.module').then( m => m.NavegacaoPageModule)
  },
  {
    path: 'navegacao2',
    loadChildren: () => import('./page/navegacao2/navegacao2.module').then( m => m.Navegacao2PageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./page/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'toast',
    loadChildren: () => import('./page/toast/toast.module').then( m => m.ToastPageModule)
  },
  {
    path: 'actionsheet',
    loadChildren: () => import('./page/actionsheet/actionsheet.module').then( m => m.ActionsheetPageModule)
  },
  {
    path: 'badge',
    loadChildren: () => import('./page/badge/badge.module').then( m => m.BadgePageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./page/card/card.module').then( m => m.CardPageModule)
  },
  {
    path: 'checkbox',
    loadChildren: () => import('./page/checkbox/checkbox.module').then( m => m.CheckboxPageModule)
  },
  {
    path: 'input',
    loadChildren: () => import('./page/input/input.module').then( m => m.InputPageModule)
  },
  {
    path: 'listas',
    loadChildren: () => import('./page/listas/listas.module').then( m => m.ListasPageModule)
  },
  {
    path: 'cadastro2',
    loadChildren: () => import('./cadastro2/cadastro2.module').then( m => m.Cadastro2PageModule)
  },
  {
    path: 'cadastro1',
    loadChildren: () => import('./cadastro1/cadastro1.module').then( m => m.Cadastro1PageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'vagas',
    loadChildren: () => import('./vagas/vagas.module').then( m => m.VagasPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {authGuard} from "./shared/guards/auth.guard";

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./modules/auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path: 'manager',
    loadChildren: () => import('./modules/manager/manager.module').then(m=>m.ManagerModule),
    canActivateChild: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

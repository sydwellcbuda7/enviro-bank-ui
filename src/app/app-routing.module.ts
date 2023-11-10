import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent,
  }
  // ,
  // {
  //   path:"password",
  //   loadChildren: () => import('./password/password.module').then(m => m.PasswordModule)
  // },
  // {
  //   path:"user",
  //   loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  // }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

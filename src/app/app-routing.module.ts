import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MemberComponent} from "./member/member.component";
import {MembreFormComponent} from "./membre-form/membre-form.component";
import {MembreListeComponent} from "./membre-liste/membre-liste.component";

const routes: Routes = [
  {
    path:'',pathMatch:'full' , component: MembreListeComponent
  },

  {
    path:'members',
    pathMatch:'full',
    component:MembreListeComponent
  },
  // : c indique ili id dynamique fil root
  {
path:'edit:/id',
    pathMatch:'full',
    component:MembreFormComponent
  },

  {
    path : "create",
    pathMatch:'full',
    component: MembreFormComponent
  },
  {
    path :"",
    pathMatch :'full',
    component:MembreFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

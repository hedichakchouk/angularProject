import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MemberComponent} from "./member/member.component";
import {MembreFormComponent} from "./membre-form/membre-form.component";
import {MembreListeComponent} from "./membre-liste/membre-liste.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ToolsComponent} from "./tools/tools.component";
import {EventsComponent} from "./events/events.component";
import {ArticlesComponent} from "./articles/articles.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {
    path:'',pathMatch:'full' , component: LoginComponent
  },

  {
    path:'members',
    pathMatch:'full',
    component:MembreListeComponent
  },
  // : c indique ili id dynamique fil root
  {
path:'edit/:id',
    pathMatch:'full',
    component:MembreFormComponent
  },
  {
    path : "dashboard",
    pathMatch:'full',
    component: DashboardComponent
  },
  {
    path : "tools",
    pathMatch:'full',
    component: ToolsComponent
  },
  {
    path : "events",
    pathMatch:'full',
    component: EventsComponent
  },
  {
    path : "articles",
    pathMatch:'full',
    component: ArticlesComponent
  },
  {
    path : "create",
    pathMatch:'full',
    component: MembreFormComponent
  },
  // {
  //   path : "login",
  //   pathMatch:'full',
  //   component: LoginComponent
  // },
  {
    path :"",
    pathMatch :'full',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/login/login.component';
import { RegisterComponent } from './view/register/register.component';
import { MylistComponent } from './view/mylist/mylist.component';
import { AddblogComponent } from './view/addblog/addblog.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'loginout',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'mylist',
    component:MylistComponent
  },
  {
    path:'okay',
    component:AddblogComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

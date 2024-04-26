import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/login/login.component';
import { RegisterComponent } from './view/register/register.component';
import { MylistComponent } from './view/mylist/mylist.component';
import { AddblogComponent } from './view/addblog/addblog.component';
import { noauthGuard } from './guards/noauth.guard';
import { SharedWithMeComponent } from './view/shared-with-me/shared-with-me.component';

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
    canActivate:[noauthGuard],
    component:MylistComponent
    
  },
  {
    path:'addBlog',
    canActivate:[noauthGuard],
    component:AddblogComponent
  },
  {
    path:'sharedWithMe',
    canActivate:[noauthGuard],
    component:SharedWithMeComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { NiceComponent } from './component/nice/nice.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { HomeComponent } from './view/home/home.component';
import { RegisterComponent } from './view/register/register.component';
import { LoginComponent } from './view/login/login.component';
import { MylistComponent } from './view/mylist/mylist.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddblogComponent } from './view/addblog/addblog.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationPlayer } from '@angular/animations';
import { ɵBrowserAnimationBuilder } from '@angular/animations';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { EventEmitter } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogContentComponent } from './view/dialog-content/dialog-content.component';
import { ItemsFromMyListComponent } from './view/items-from-my-list/items-from-my-list.component';
import { CreateTodoListModalComponent } from './view/create-todo-list-modal/create-todo-list-modal.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ShareModalComponent } from './view/share-modal/share-modal.component';
import { SharedWithMeComponent } from './view/shared-with-me/shared-with-me.component';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NiceComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    MylistComponent,
    AddblogComponent,
    DialogContentComponent,
    ItemsFromMyListComponent,
    CreateTodoListModalComponent,
    ShareModalComponent,
    SharedWithMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    FormsModule,
    HttpClientModule,
    MatProgressBarModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatDialogModule,
    MatDatepickerModule,
    
  
  
   
    
   


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

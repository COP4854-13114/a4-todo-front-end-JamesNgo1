import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TodoListsService } from '../../services/todo-lists.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  //blogger service aval for this class
  constructor(private registerService:TodoListsService, private snackBar:MatSnackBar){}



  //form control like default values validors built in for the form control
  //default value for the email for an example 
  //reative forms
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);
  nameFormControl = new FormControl('', [Validators.required]);

 //matcher = new MyErrorStateMatcher();


 async createUser(){

  //call is going to be a promise 
  let result = await this.registerService.createUser(this.emailFormControl.value as string, this.passwordFormControl.value as string,this.nameFormControl.value as string);
  
 }

}

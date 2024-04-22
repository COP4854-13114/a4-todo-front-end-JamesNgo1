import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { TodoListsService } from '../../services/todo-lists.service';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  spinner:boolean = false;


  name:string = "";
  username:string = "";
  password:string = "";

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.email]);


  constructor(private snackbar:MatSnackBar, private router:Router, private activatedRoute:ActivatedRoute,private loginService:TodoListsService){
    this.activatedRoute.params.subscribe(params=>{
      this.username = params['username'];
      this.password = params['password'];
      this.name = params['name'];

    })
  }


  /**
   * simply reset the login and password input fields
   */
  resetCredentials(){
    this.username = "";
    this.password = "";
  }


  async login(){
    
    if(this.username != null && this.password != null){
      this.spinner = true;

      //either they key or false
      //token : key to allow who and what we have access to 
      
      let x = await this.loginService.login(this.username,this.password);
      if(x != false){
        //x is the token
        console.log(x);

        //possibly call on the get user information
        this.loginService.getBlogsForUser();
      }
      //incorrect credentials
      else{
        //console.log("error");
        this.snackbar.open("incorrect username or password","close");
      }
      this.spinner = false;
      

    }
    else this.snackbar.open('please enter a username or password','close');
      
    



  }
}

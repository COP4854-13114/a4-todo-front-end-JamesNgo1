import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { TodoListsService } from '../../services/todo-lists.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  name:string = "";
  username:string = "";
  password:string = "";


  constructor(private router:Router, private activatedRoute:ActivatedRoute,private loginService:TodoListsService){
    this.activatedRoute.params.subscribe(params=>{
      this.username = params['username'];
      this.password = params['password'];
      this.name = params['name'];

    })
  }


  async login(){

    if(this.username != null && this.password != null){

      //either they key or false
      //token : key to allow who and what we have access to 
      
      let x = await this.loginService.login(this.username,this.password);
      if(x != false){
        console.log("login in!");

        //x is the token
        console.log(x);

        //possibly call on the get user information
        this.loginService.getBlogsForUser();

        
      }
      else{
        console.log("error");

      }
      

    }
    else{
      alert('please enter a username or password');
    }


  }
}

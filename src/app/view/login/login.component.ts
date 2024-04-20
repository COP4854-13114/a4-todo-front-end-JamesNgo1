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
    console.log(this.username);
    console.log(this.password);


    if(this.username != null && this.password != null){
      let x = this.loginService.login(this.username,this.password);
      console.log("printing data");
      console.log(x);
      

    }
    else{
      alert('please enter a username or password');
    }


  }
}

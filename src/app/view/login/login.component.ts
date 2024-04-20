import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username:string = "";
  password:string = "";


  constructor(private router:Router, private activatedRoute:ActivatedRoute){
    this.activatedRoute.params.subscribe(params=>{
      this.username = params['username'];
      this.password = params['password'];

    })
  }


}

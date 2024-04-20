import { Component, OnInit } from '@angular/core';
import { userInfo } from '../../model/userinfo';
import { TodoListsService } from '../../services/todo-lists.service';
import { UserToken } from '../../model/user-token';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  currentUserInfo:userInfo | null = null;
  constructor(private navbarService:TodoListsService){}
  
  ngOnInit(): void {
    this.navbarService.userLoggedIn.subscribe((UserToken:string)=>{
      this.navbarService.getUserInfo(UserToken).then((data:userInfo|null)=>{
        this.currentUserInfo = data;
      });
    });
  }
;



}

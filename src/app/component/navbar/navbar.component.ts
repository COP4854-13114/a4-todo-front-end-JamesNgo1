import { Component, OnInit } from '@angular/core';
import { userInfo } from '../../model/userinfo';
import { TodoListsService } from '../../services/todo-lists.service';
import { UserToken } from '../../model/user-token';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  

  loginIn:UserToken|null = this.navbarService.token;

  currentUserInfo:userInfo | null = null;
  constructor(private navbarService:TodoListsService,private router:Router){}

  /**
   * have a function that logouts so essential puts token as null
   */
  logout(){
    this.navbarService.token = null;
    console.log("logout");
    this.router.navigate(['']);
  }



  
  ngOnInit(): void {

    //take adv to get info of current user to know their user id and blog entries you are looking at 
    this.navbarService.userLoggedIn.subscribe((UserToken:string)=>{
      this.navbarService.getUserInfo(UserToken).then((data:userInfo|null)=>{
        this.currentUserInfo = data;

        //add thise to the service to use to get certain list for the user
        this.navbarService.userInfoDataSet = data;
        
      });

      
      //possible addition to call on the mylist for the sign in user





    });
  }
;



}

import { Component, OnInit } from '@angular/core';
import { TodoListsService } from '../../services/todo-lists.service';
import { userInfo } from '../../model/userinfo';
import { TodoListInfo } from '../../model/todo-list-info';

@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrl: './mylist.component.css'
})
export class MylistComponent implements OnInit {
  userArray:TodoListInfo[] = [];

  constructor(private mylistService:TodoListsService){};

  //intilaize declare my array with 
  ngOnInit(): void {
    this.userArray = this.mylistService.todoListsAllInfo;
    console.log("current id");
    console.log(this.mylistService.userInfoDataSet?.id);

    //change the array filter to only the ids by the user but have to add the share feature as well
    this.userArray = this.userArray.filter((todolist => todolist.created_by == this.mylistService.userInfoDataSet?.id))
    console.log("starting personalized array");
    console.log(this.userArray);
    
  }


}

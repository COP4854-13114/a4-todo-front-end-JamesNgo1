import { Component, OnInit } from '@angular/core';
import { TodoListInfo } from '../../model/todo-list-info';
import { TodoListsService } from '../../services/todo-lists.service';
import { ItemsFromMyListComponent } from '../items-from-my-list/items-from-my-list.component';
import { CreateTodoListModalComponent } from '../create-todo-list-modal/create-todo-list-modal.component';


//import { Component, OnInit } from '@angular/core';
//import { TodoListsService } from '../../services/todo-lists.service';
import { userInfo } from '../../model/userinfo';
//import { TodoListInfo } from '../../model/todo-list-info';
import { DialogContentComponent } from '../dialog-content/dialog-content.component';
import { MatDialog } from '@angular/material/dialog';
//import { ItemsFromMyListComponent } from '../items-from-my-list/items-from-my-list.component';
//import { CreateTodoListModalComponent } from '../create-todo-list-modal/create-todo-list-modal.component';
//import { todo } from 'node:test';
import { MatDatepicker } from '@angular/material/datepicker';
import { ShareModalComponent } from '../share-modal/share-modal.component';
@Component({
  selector: 'app-shared-with-me',
  templateUrl: './shared-with-me.component.html',
  styleUrl: './shared-with-me.component.css'
})
export class SharedWithMeComponent implements OnInit {
  userArray:TodoListInfo[] = [];

  constructor(private service:TodoListsService){};


  ngOnInit(): void {
    this.userArray = this.service.todoListAllInfoForUser;
    console.log("current id");
    console.log(this.service.userInfoDataSet?.id);


    this.userArray = this.userArray.filter((todolist => todolist.created_by != this.service.userInfoDataSet?.id &&
      todolist.public_list == false
    ))
    console.log("user todo list");
    console.log(this.userArray);
    console.log("calling function");
  }


  }





  



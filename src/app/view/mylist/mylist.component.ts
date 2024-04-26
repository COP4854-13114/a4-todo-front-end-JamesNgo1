import { Component, OnInit } from '@angular/core';
import { TodoListsService } from '../../services/todo-lists.service';
import { userInfo } from '../../model/userinfo';
import { TodoListInfo } from '../../model/todo-list-info';
import { DialogContentComponent } from '../dialog-content/dialog-content.component';
import { MatDialog } from '@angular/material/dialog';
import { ItemsFromMyListComponent } from '../items-from-my-list/items-from-my-list.component';
import { CreateTodoListModalComponent } from '../create-todo-list-modal/create-todo-list-modal.component';
//import { todo } from 'node:test';

@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrl: './mylist.component.css'
})
export class MylistComponent implements OnInit {
  userArray:TodoListInfo[] = [];

  constructor(private mylistService:TodoListsService,  private dialog: MatDialog){};

  deleteTodoList(todoListId:number){
    console.log("the id is:");
    console.log(todoListId);

    console.log("attempt delte");
    this.mylistService.deleteTodoList(todoListId);
  }

  openDialog(blog: any): void {

    console.log("opening the certain item ???");
    console.log(blog);


    const dialogRef = this.dialog.open(ItemsFromMyListComponent, {
      width: '700px',
      data: blog // Pass the blog data to the dialog
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed from mylist');
    });
  }

  //This modal would have to open to add a task for the specific todo list
  openDialogAddItem(blog: any): void {

    console.log("opening the certain item ???");
    console.log(blog);


    const dialogRef = this.dialog.open(CreateTodoListModalComponent, {
      width: '700px',
      data: blog // Pass the blog data to the dialog
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed from mylist');
    });
  }








  //intilaize declare my array with 
  ngOnInit(): void {
    this.userArray = this.mylistService.todoListAllInfoForUser;
    console.log("current id");
    console.log(this.mylistService.userInfoDataSet?.id);


    this.userArray = this.userArray.filter((todolist => todolist.created_by == this.mylistService.userInfoDataSet?.id))
    console.log("user todo list");
    console.log(this.userArray);
    console.log("calling function");
   
  }


}

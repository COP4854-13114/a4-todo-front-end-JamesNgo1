import { Component, OnInit } from '@angular/core';
import { TodoListsService } from '../../services/todo-lists.service';
import { userInfo } from '../../model/userinfo';
import { TodoListInfo } from '../../model/todo-list-info';
import { DialogContentComponent } from '../dialog-content/dialog-content.component';
import { MatDialog } from '@angular/material/dialog';
import { ItemsFromMyListComponent } from '../items-from-my-list/items-from-my-list.component';

@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrl: './mylist.component.css'
})
export class MylistComponent implements OnInit {
  userArray:TodoListInfo[] = [];

  constructor(private mylistService:TodoListsService,  private dialog: MatDialog){};

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

  //intilaize declare my array with 
  ngOnInit(): void {
    this.userArray = this.mylistService.todoListAllInfoForUser;
    console.log("current id");
    console.log(this.mylistService.userInfoDataSet?.id);


    //okay so the list would be public so some list could be false

    //change the array filter to only the ids by the user but have to add the share feature as well
    this.userArray = this.userArray.filter((todolist => todolist.created_by == this.mylistService.userInfoDataSet?.id))
    // console.log("starting personalized array");
    // console.log(this.userArray);


    console.log("calling function");
    //this.mylistService.getBlogsForUser();





    //replace above and include the new method that includes the get request with token

    //this would then return the array and filter with created by with the userinfo data set 
    
  }


}

import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TodoListsService } from '../../services/todo-lists.service';


//import {Component} from '@angular/core';


@Component({
  selector: 'app-create-todo-list-modal',
  templateUrl: './create-todo-list-modal.component.html',
  styleUrl: './create-todo-list-modal.component.css'
})
export class CreateTodoListModalComponent implements OnInit {

  title:string = "";
  dueDate:string = "";


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private snack:MatSnackBar, private service:TodoListsService) {}
  ngOnInit(): void {
    console.log("we open the modal");
    console.log(this.data);
  }


  addTodoListItem(){
    console.log("selected item:");
    console.log(this.data.id);
    console.log("attempt to add the todo list item");
    console.log(this.title);
    console.log(this.dueDate);
    if(this.title == "" || this.dueDate == null || this.dueDate == ""){
      this.snack.open("please do not leave the inputs blank","close");
    }
    else{
      this.service.addItemToTodolist(this.data.id,this.title,this.dueDate);
    }

    






    //else call the service that add the item to the list 

  }

}

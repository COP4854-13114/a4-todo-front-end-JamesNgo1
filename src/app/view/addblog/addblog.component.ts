import { Component, OnInit } from '@angular/core';
import { TodoListsService } from '../../services/todo-lists.service';
import { TodoListInfo } from '../../model/todo-list-info';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrl: './addblog.component.css'
})
export class AddblogComponent implements OnInit {

  todoListFormControl = new FormControl('', [Validators.required]);

  todoListTitle:string = "";
  todoListPublicList:string = "";
  checked:boolean = false;

  arr:string[] = [];

  newArr:TodoListInfo[] = [];

  constructor(private addblogSerivce:TodoListsService, private snackBar: MatSnackBar){}

  checkbox(){
    console.log(this.checked);
  }


  addList(){
    console.log("add blog list called");
    // console.log("hello world add list");
    // console.log(this.todoListTitle);
    //console.log(this.todoListPublicList);
    //this.todoListTitle = this.todoListFormControl.toString()[0];
    // console.log(this.todoListTitle);

    // console.log("printing out the login button");
    // console.log(this.todoListTitle);

    if(this.todoListTitle == "" || this.todoListTitle == null || this.todoListTitle == undefined){
      this.snackBar.open("Please enter a title for your list","close");
    }
    else{
      this.addblogSerivce.addTodoListTitle = this.todoListTitle; //was todoListTitle
      this.addblogSerivce.addTodoListPublic = this.checked;
      this.addblogSerivce.addBlog();

    }


    //set the variables for the todo list service to be passed along the body request




    
  }


  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    //this.arr 
    this.newArr= this.addblogSerivce.getTodoList();
  }

}

import { Component, OnInit } from '@angular/core';
import { TodoListsService } from '../../services/todo-lists.service';
import { TodoListInfo } from '../../model/todo-list-info';
import { FormControl, Validators } from '@angular/forms';

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

  constructor(private addblogSerivce:TodoListsService){}

  checkbox(){
    console.log(this.checked);
  }


  addList(){
    console.log("hello world add list");
    console.log(this.todoListTitle);
    console.log(this.todoListPublicList);

    //set the variables for the todo list service to be passed along the body request
    this.addblogSerivce.addTodoListTitle = this.todoListTitle;
    this.addblogSerivce.addTodoListPublic = this.checked;
    this.addblogSerivce.addBlog();
  }


  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    //this.arr 
    this.newArr= this.addblogSerivce.getTodoList();
  }

}

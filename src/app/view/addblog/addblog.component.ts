import { Component, OnInit } from '@angular/core';
import { TodoListsService } from '../../services/todo-lists.service';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrl: './addblog.component.css'
})
export class AddblogComponent implements OnInit {

  todoListTitle:string = "";
  todoListPublicList:string = "";

  arr:string[] = [];

  constructor(private addblogSerivce:TodoListsService){}


  addList(){
    console.log("hello world add list");
    console.log(this.todoListTitle);
    console.log(this.todoListPublicList);

    //set the variables for the todo list service to be passed along the body request
    this.addblogSerivce.addTodoListTitle = this.todoListTitle;
    this.addblogSerivce.addTodoListPublic = this.todoListPublicList == "true" ? true : false;


    
    this.addblogSerivce.addBlog();




  }


  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.arr = this.addblogSerivce.getTodoList();
  }

}

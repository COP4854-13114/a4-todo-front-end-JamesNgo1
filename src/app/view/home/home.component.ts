import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TodoListsService } from '../../services/todo-lists.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

//ng initand ondestory hookes components is intialize navigate back and forth those hooks would run 
//when this happen

/**
 * life cycle hooks
 * every time you go to home it goes
 */
export class HomeComponent implements OnInit{
  //constructor(private http: HttpClient){}
  blogArray:String[] = [];

  currentBlog:string = "";

  addBlog(){
    this.todoService.addTodoList(this.currentBlog);
    this.currentBlog = "";
  }

  constructor(private todoService:TodoListsService){

  }
  
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    console.log("home compoent");
    this.blogArray = this.todoService.getTodoList();
    
  }
  ngOnDestroy(): void {
    //throw new Error('Method not implemented.');
    console.log("destroyed");
  }

  

}

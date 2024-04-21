import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TodoListsService } from '../../services/todo-lists.service';
import { Router } from '@angular/router';
import { TodoListInfo } from '../../model/todo-list-info';
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
  todoListArray:String[] = [];

  newArray:TodoListInfo[] = [];

  currentBlog:string = "";

  addBlog(){
    this.todoService.addTodoList(this.currentBlog);
    this.currentBlog = "";
    this.router.navigate(['okay']);

  }

  /*
  goes figure out where blogger service live and hand me the same copy 
  */
  constructor(private todoService:TodoListsService , private httpClient:HttpClient, private router:Router){

  }
  
  ngOnInit(): void {
    //on the component show it would render it 
    console.log("home compoent");
    console.log("on the inint");
    //this.todoListArray 
    this.newArray= this.todoService.getTodoList();
    
    
  }
  ngOnDestroy(): void {
    //throw new Error('Method not implemented.');
    console.log("destroyed");
  }

  

}

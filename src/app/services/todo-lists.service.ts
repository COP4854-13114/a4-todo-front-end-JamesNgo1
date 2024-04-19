import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoListsService {
  //lives outside of any copmonets using it
  todoLists:string[] = [];


  //lets have an empty array and declare our http client
  constructor(private httpClient:HttpClient) {
    
   }

   getTodoList():string[]{
    return this.todoLists;
   }

    
    //return this.todoLists;
  

  addTodoList(todoList:string):void{
    this.todoLists.unshift(todoList);
  }
}


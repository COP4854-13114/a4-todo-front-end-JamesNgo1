import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoListsService {
  todoLists:string[] = [];


  //lets have an empty 
  constructor() {
    
   }

  getTodoList():string[]{
    return this.todoLists;
  }

  addTodoList(todoList:string):void{
    this.todoLists.unshift(todoList);
  }
}

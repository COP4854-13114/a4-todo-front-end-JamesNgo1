import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoListsService {
  //lives outside of any copmonets using it
  todoLists:string[] = [];


  //lets have an empty array and declare our http client
  //use http client to communicate the backend
  //aval to service to use 
  constructor(private httpClient:HttpClient) {
    
   }


   //replace with call to the end point now got http client 
   getTodoList():string[]{
    //sits in callback form server 

    //async
    this.httpClient.get('https://unfwfspring2024.azurewebsites.net/todo/').subscribe((data:any)=>{

    for(let row of data){
      this.todoLists.push(row.title);
      console.log(row);
    }
      
   });




    console.log("this is the todolist");
    console.log(this.todoLists);
    return this.todoLists;
   }

    
    //return this.todoLists;
  

  addTodoList(todoList:string):void{
    this.todoLists.unshift(todoList);
  }
}


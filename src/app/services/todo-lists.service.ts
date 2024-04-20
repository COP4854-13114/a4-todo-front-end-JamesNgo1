import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoListsService {
  //lives outside of any copmonets using it
  todoLists:string[] = [];


  //lets have an empty array and declare our http client
  //use http client to communicate the backend
  //aval to service to use 
  constructor(private httpClient:HttpClient, private snackBar:MatSnackBar, private router:Router) {
    
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
   }//end of getTodoList method

    
    //return this.todoLists;
  

  addTodoList(todoList:string):void{
    this.todoLists.unshift(todoList);
  }

  /**
   * create user method
   */
  async createUser(email:string,password:string,name:string){
    let data = {
      email:email,
      password:password,
      name:name
    }

    //await and async 

    //creating a promise 
    //uses rjx make request and reponse or first response back
    //get back tehe option
    try {
      let response = await firstValueFrom(this.httpClient.post('https://unfwfspring2024.azurewebsites.net/user/',data));
      console.log("hello world test");
      console.log(response);

      //second paramter is going to be description of what is in the button to close
      this.snackBar.open('account created','close');

      //redirect and append the inoformation
      this.router.navigate(['loginout',{username:email,password:password,name:name}])
      
      return true;
      
    } catch (error:any) {
      this.snackBar.open('account is already created','close');
      console.log(error.error.message)
      return false;
      
    }
  } //end of method

  async login(username:string,password:string){
    let data = {
      username:username,
      password:password
    }

    try {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(username + ':' + password)
      });
  
      //what kind of object you wajt to get back
      let response = await firstValueFrom(this.httpClient.post('https://unfwfspring2024.azurewebsites.net/user/login',data,{headers}));
      return response;
      
    } catch (error) {
      return null;
      
    }

    

    //pretend null so entire method is asyc 
    //of(null) to an observable
  } //end of login method




}


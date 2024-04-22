import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';
import { firstValueFrom, of } from 'rxjs';
import { UserToken } from '../model/user-token';
import { EventEmitter, Output } from '@angular/core';
import { userInfo } from '../model/userinfo';
import { TodoListInfo } from '../model/todo-list-info';


@Injectable({
  providedIn: 'root'
})
export class TodoListsService {
  //lives outside of any copmonets using it
  userInfoDataSet:userInfo|null = null;
  todoLists:string[] = [];
  todoListsAllInfo:TodoListInfo[] = [];
  todoListAllInfoForUser:TodoListInfo[] = [];
  token:UserToken | null = null;
  userLoggedIn: EventEmitter<string> = new EventEmitter<string>();

  //below is variables for add blog request
  addTodoListTitle:String = "";
  addTodoListPublic:boolean = false;



  //event emitter to dynamically show the name of the user when they first login 
  




  //lets have an empty array and declare our http client
  //use http client to communicate the backend
  //aval to service to use 
  constructor(private httpClient:HttpClient, private snackBar:MatSnackBar, private router:Router) {
    
   }











   //replace with call to the end point now got http client 
   getTodoList():TodoListInfo[]{
    //sits in callback form server 

    //async
    let x =this.httpClient.get('https://unfwfspring2024.azurewebsites.net/todo/').subscribe((data:any)=>{

    for(let row of data){
      this.todoLists.push(row.title);
      console.log(row.created_by);

      //hope to store the entire object
      this.todoListsAllInfo.push(row);
      console.log(row);
    }
      
   });

  
    console.log("this is the todolist");
    console.log(this.todoLists);
    //return this.todoLists;
    return this.todoListsAllInfo;




   }//end of getTodoList method

    
   
  

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








/**
 * Method to login the user with their credentials
 * returns a token for htem to use
 * @param username 
 * @param password 
 * @returns 
 */
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
      // url , then body just put stuff there , and headers include auth
      let response = await firstValueFrom(this.httpClient.post<UserToken>('https://unfwfspring2024.azurewebsites.net/user/login',data,{headers}));
      this.token = response;
      localStorage.setItem('currentToken',JSON.stringify(response));
      this.userLoggedIn.emit(this.token.token);
      this.snackBar.open('login correct','close');
      
      return response;
      
    } catch (error) {
      this.snackBar.open('login incorrect','close');
      return false;
      
    }

    

    //pretend null so entire method is asyc 
    //of(null) to an observable
  } //end of login method



  /**
   * note to self that the info is held here if you simply login
   * @param token 
   * @returns 
   */
   async getUserInfo(token:string){

    //use the api request to get the user info with their token

    //the response should be with the userinfo format 

    //invoke through the nabar that is listenning that would emit and change var name

    try {
      let userInfo = await firstValueFrom(this.httpClient.get<userInfo>('https://unfwfspring2024.azurewebsites.net/user/',{headers:{'Authorization': `Bearer ${token}`}}));
      return userInfo;

    } catch (error) {
      this.snackBar.open('cannnot get login information','close');
      return firstValueFrom(of(null));
      
    }
  }//END OF METHOD




  async addBlog(){
    /*
    have to add the request body 
    set up variables that would be changed from the service of the adblog view
    */

    let bodyRequest = {
      title:this.addTodoListTitle,
      public_list:this.addTodoListPublic
    }

    let response = await firstValueFrom(this.httpClient.post('https://unfwfspring2024.azurewebsites.net/todo/',bodyRequest,{headers:{'Authorization': `Bearer ${this.token?.token}`}}));
    console.log(response);
    return response;
  }//END OF ADD BLOG


  // make a new request that would actually get a user designed of their list
  //get the list of a lpl public list but includes there information

  async getBlogsForUser(){
    //let array:TodoListInfo[];
    // let response = await firstValueFrom(this.httpClient.get<TodoListInfo[]>('https://unfwfspring2024.azurewebsites.net/todo/',{headers:{'Authorization': `Bearer ${this.token?.token}`}}));
    // console.log("printing users bloglist");
    // console.log(response);

    let response = await firstValueFrom(this.httpClient.get<TodoListInfo[]>('https://unfwfspring2024.azurewebsites.net/todo/', {headers: {'Authorization': `Bearer ${this.token?.token}`}}));
  
  console.log("printing users bloglist with a certain user");
  
  // Iterate over the array of objects in the response
  for (let row of response) {
      // Now 'row' represents each object in the array
      this.todoListAllInfoForUser.push(row);
      console.log(row); // Do whatever you want with each object
  }
  console.log("object array");
  console.log(this.todoListAllInfoForUser);
  




  //   console.log("get blog for the users");
  //   let x =this.httpClient.get('https://unfwfspring2024.azurewebsites.net/todo/',{headers:{'Authorization': `Bearer ${this.token?.token}`}}).subscribe((data:any)=>{

  //   for(let row of data){
  //     // this.todoLists.push(row.title);
  //     // console.log(row.created_by);

  //     //hope to store the entire object
  //     //this.todoListsAllInfo.push(row);
  //     this.todoListAllInfoForUser.push(row);
  //     console.log(row);
  //   }
  //   console.log("printing the arry in the ending");
  //  console.log(this.todoListAllInfoForUser);

      
  //  });
   
    




    
  }





  








}


import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TodoListsService } from '../../services/todo-lists.service';
import { Router } from '@angular/router';
import { TodoListInfo } from '../../model/todo-list-info';
import { DialogContentComponent } from '../dialog-content/dialog-content.component';
import { MatDialog } from '@angular/material/dialog';
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

  openDialog(blog: any): void {
    const dialogRef = this.dialog.open(DialogContentComponent, {
      width: '250px',
      data: blog // Pass the blog data to the dialog
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  addBlog(){
    this.todoService.addTodoList(this.currentBlog);
    this.currentBlog = "";
    this.router.navigate(['okay']);

  }

  /*
  goes figure out where blogger service live and hand me the same copy 
  */
  constructor(private todoService:TodoListsService , private httpClient:HttpClient, private router:Router, private dialog: MatDialog){

  }
  
 info(){
  
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

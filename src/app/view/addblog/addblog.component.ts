import { Component, OnInit } from '@angular/core';
import { TodoListsService } from '../../services/todo-lists.service';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrl: './addblog.component.css'
})
export class AddblogComponent implements OnInit {

  arr:string[] = [];

  constructor(private service:TodoListsService){}


  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.arr = this.service.getTodoList();
  }

}

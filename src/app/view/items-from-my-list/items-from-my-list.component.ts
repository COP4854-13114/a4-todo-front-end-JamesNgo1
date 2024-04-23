import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TodoListsService } from '../../services/todo-lists.service';

@Component({
  selector: 'app-items-from-my-list',
  templateUrl: './items-from-my-list.component.html',
  styleUrl: './items-from-my-list.component.css'
})
export class ItemsFromMyListComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private itemService:TodoListsService) {}
  
  ngOnInit(): void {
    //  throw new Error('Method not implemented.');

    //implement a method that gets the list returns the 
    //also pass in the data.id 
    this.itemService.getTodoItems(this.data.id);




    console.log("this is the onit and below is the current blog data");
    console.log(this.data);
  }
;


}

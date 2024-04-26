import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TodoListsService } from '../../services/todo-lists.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-share-modal',
  templateUrl: './share-modal.component.html',
  styleUrl: './share-modal.component.css'
})
export class ShareModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private shareService:TodoListsService) {}

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  emailFormControl1 = new FormControl('', [Validators.required, Validators.email]);
  email:string = "";
  email1:string = "";

  share(todoListID:number){
    console.log(todoListID);
    console.log(this.emailFormControl.value);
    this.shareService.shareTodoList(todoListID,this.email);


  }

  removeShare(todoListID:number){
    console.log(todoListID);
    console.log(this.emailFormControl1.value);
  }

}

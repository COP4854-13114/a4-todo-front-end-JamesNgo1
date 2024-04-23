import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-items-from-my-list',
  templateUrl: './items-from-my-list.component.html',
  styleUrl: './items-from-my-list.component.css'
})
export class ItemsFromMyListComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

}

import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  //form control like default values validors built in for the form control
  //default value for the email for an example 
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

 //matcher = new MyErrorStateMatcher();

}

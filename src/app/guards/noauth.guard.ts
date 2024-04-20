import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TodoListsService } from '../services/todo-lists.service';


export const noauthGuard: CanActivateFn = (route, state) => {
  let todoListService = inject(TodoListsService);
  let router = inject(Router);

  if(todoListService.token){
    //true 
    return true;
  }
  else{
    router.navigate(['loginout']);
    return false;
  }


 
};

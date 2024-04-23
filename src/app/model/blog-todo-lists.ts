export interface BlogTodoLists {
    completed:boolean;
    completed_by:boolean|null;
    completed_by_user:null|string;
    completed_date:string|null;
    created_at:string;
    due_date:string|null;
    id:number;
    list_id:number;
    task:string;
    updated_at:string;
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTodoListModalComponent } from './create-todo-list-modal.component';

describe('CreateTodoListModalComponent', () => {
  let component: CreateTodoListModalComponent;
  let fixture: ComponentFixture<CreateTodoListModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateTodoListModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateTodoListModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

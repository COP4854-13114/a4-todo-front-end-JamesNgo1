import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsFromMyListComponent } from './items-from-my-list.component';

describe('ItemsFromMyListComponent', () => {
  let component: ItemsFromMyListComponent;
  let fixture: ComponentFixture<ItemsFromMyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemsFromMyListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemsFromMyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

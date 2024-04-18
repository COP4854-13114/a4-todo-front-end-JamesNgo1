import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NiceComponent } from './nice.component';

describe('NiceComponent', () => {
  let component: NiceComponent;
  let fixture: ComponentFixture<NiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

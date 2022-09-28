import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtodosComponent } from './addtodos.component';

describe('AddtodosComponent', () => {
  let component: AddtodosComponent;
  let fixture: ComponentFixture<AddtodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtodosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddtodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

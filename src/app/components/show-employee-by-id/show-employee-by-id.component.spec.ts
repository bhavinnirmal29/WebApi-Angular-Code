import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEmployeeByIDComponent } from './show-employee-by-id.component';

describe('ShowEmployeeByIDComponent', () => {
  let component: ShowEmployeeByIDComponent;
  let fixture: ComponentFixture<ShowEmployeeByIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowEmployeeByIDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowEmployeeByIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

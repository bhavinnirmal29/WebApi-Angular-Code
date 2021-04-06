import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllEmployeesComponent } from './show-all-employees.component';

describe('ShowAllEmployeesComponent', () => {
  let component: ShowAllEmployeesComponent;
  let fixture: ComponentFixture<ShowAllEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllEmployeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

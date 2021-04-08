import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectprojbyidComponent } from './selectprojbyid.component';

describe('SelectprojbyidComponent', () => {
  let component: SelectprojbyidComponent;
  let fixture: ComponentFixture<SelectprojbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectprojbyidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectprojbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

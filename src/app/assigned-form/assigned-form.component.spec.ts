import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedFormComponent } from './assigned-form.component';

describe('AssignedFormComponent', () => {
  let component: AssignedFormComponent;
  let fixture: ComponentFixture<AssignedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignedFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

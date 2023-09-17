import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OvredueTicketComponent } from './ovredue-ticket.component';

describe('OvredueTicketComponent', () => {
  let component: OvredueTicketComponent;
  let fixture: ComponentFixture<OvredueTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OvredueTicketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OvredueTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

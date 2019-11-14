import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleCalendarComponent } from './simple-calendar.component';

describe('SimpleCalendarComponentsComponent', () => {
  let component: SimpleCalendarComponent;
  let fixture: ComponentFixture<SimpleCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

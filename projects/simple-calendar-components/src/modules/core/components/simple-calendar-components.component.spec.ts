import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleCalendarComponentsComponent } from './simple-calendar-components.component';

describe('SimpleCalendarComponentsComponent', () => {
  let component: SimpleCalendarComponentsComponent;
  let fixture: ComponentFixture<SimpleCalendarComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleCalendarComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleCalendarComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

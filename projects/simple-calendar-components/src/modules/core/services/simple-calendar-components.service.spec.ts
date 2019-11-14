import { TestBed } from '@angular/core/testing';

import { SimpleCalendarComponentsService } from './simple-calendar-components.service';

describe('SimpleCalendarComponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SimpleCalendarComponentsService = TestBed.get(SimpleCalendarComponentsService);
    expect(service).toBeTruthy();
  });
});

import { Component, OnInit } from '@angular/core';
import { Month } from '../../../../models/month.model';
import { CalendarService } from '../../../../services/calendar.service';
import { SimpleCalendarService } from '../../services/simple.calendar.service';
import { Filter } from '../../../../models/filter.model';

@Component({
    selector: 'simple-calendar-filter',
    templateUrl: './simple-calendar-filter.component.html',
    styles: []
})
export class SimpleCalendarFilterComponent implements OnInit {
    months: Month[];
    years: Number[];

    filter: Filter;

    constructor(
        calendarService: CalendarService,
        private simpleCalendarService: SimpleCalendarService
    ) {
        simpleCalendarService = simpleCalendarService;

        this.months = calendarService.getMonths();
        this.years = calendarService.getYears();

        simpleCalendarService.$filter.subscribe(filter => {
            this.filter = filter;
        });
    }

    ngOnInit() {
    }

    setYear(year) {
        this.simpleCalendarService.setCurrentYear(year);
    }

    setMonth(month) {
        this.simpleCalendarService.setCurrentMonth(month);
    }
}

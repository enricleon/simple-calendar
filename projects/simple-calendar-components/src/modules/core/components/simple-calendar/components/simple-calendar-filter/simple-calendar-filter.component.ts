import { Component, OnInit } from '@angular/core';
import { Month } from '../../../../models/month.model';
import { CalendarService } from '../../../../services/calendar.service';

@Component({
    selector: 'simple-calendar-filter',
    templateUrl: './simple-calendar-filter.component.html',
    styles: []
})
export class SimpleCalendarFilterComponent implements OnInit {
    months: Month[];
    years: Number[];

    constructor(
        calendarService: CalendarService
    ) {
        this.months = calendarService.getMonths();
        this.years = calendarService.getYears();
    }

    ngOnInit() {
    }
}

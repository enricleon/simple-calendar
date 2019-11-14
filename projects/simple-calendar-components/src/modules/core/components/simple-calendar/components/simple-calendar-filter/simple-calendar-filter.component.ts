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
    private _simpleCalendarService: SimpleCalendarService;

    months: Month[];
    years: Number[];

    filter: Filter;

    constructor(
        calendarService: CalendarService,
        simpleCalendarService: SimpleCalendarService
    ) {
        this._simpleCalendarService = simpleCalendarService;

        this.months = calendarService.getMonths();
        this.years = calendarService.getYears();

        simpleCalendarService.$filter.subscribe(filter => {
            this.filter = filter;
        });
    }

    ngOnInit() {
    }

    setYear(year) {
        this._simpleCalendarService.setCurrentYear(year);
    }

    setMonth(month) {
        this._simpleCalendarService.setCurrentMonth(month);
    }
}

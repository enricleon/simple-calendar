import { Component, OnInit } from '@angular/core';
import { SimpleCalendarService } from '../../services/simple.calendar.service';
import { CalendarDay } from '../../../../models/calendar-day';

@Component({
    selector: 'simple-calendar-month',
    templateUrl: './simple-calendar-month.component.html',
    styleUrls: ['./simple-calendar-month.component.scss']
})
export class SimpleCalendarMonthComponent implements OnInit {
    monthDays: Array<CalendarDay>;

    constructor(simpleCalendarService: SimpleCalendarService) { 
        simpleCalendarService.$monthDays.subscribe(monthDays => {
            this.monthDays = monthDays;
        });
    }

    ngOnInit() {
    }
}
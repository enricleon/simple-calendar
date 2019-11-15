import { Component, OnInit } from '@angular/core';
import { SimpleCalendarService } from '../../services/simple.calendar.service';
import { CalendarDay } from '../../../../models/calendar-day';

@Component({
    selector: 'sc-month',
    templateUrl: './month.component.html',
    styleUrls: ['./month.component.scss']
})
export class MonthComponent implements OnInit {
    monthDays: Array<CalendarDay>;

    constructor(simpleCalendarService: SimpleCalendarService) { 
        simpleCalendarService.$monthDays.subscribe(monthDays => {
            this.monthDays = monthDays;
        });
    }

    ngOnInit() {
    }
}
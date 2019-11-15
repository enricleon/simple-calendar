import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../../../../services/calendar.service';

@Component({
    selector: 'sc-month-header',
    templateUrl: './month-header.component.html',
    styleUrls: ['./month-header.component.scss']
})
export class MonthHeaderComponent implements OnInit {

    weekDays: Array<String>;

    constructor(
        calendarService: CalendarService
    ) {
        this.weekDays = calendarService.getWeekDays();
    }

    ngOnInit() {
    }
}

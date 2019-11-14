import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../../../../services/calendar.service';
import { SimpleCalendarService } from '../../services/simple.calendar.service';
import { Moment } from 'moment';

@Component({
    selector: 'simple-calendar-header',
    templateUrl: './simple-calendar-header.component.html',
    styleUrls: ['./simple-calendar-header.component.scss']
})
export class SimpleCalendarHeaderComponent implements OnInit {

    weekDays: Array<String>;

    constructor(
        calendarService: CalendarService
    ) {
        this.weekDays = calendarService.getWeekDays();
    }

    ngOnInit() {
    }
}
